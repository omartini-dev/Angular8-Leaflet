//import { c } from "ttag";
import _ from "lodash";

interface ResponseFragment {
	status: string;
	instancePath: string[];
	errorMessage: string;
	responseTimeInMs: number;
}

interface ServiceTarget {
	baseUrl: string;
	isQuiet?: boolean;
	quiet?: any;
}

export interface AuthenticationApi {
	getHttpHeaderValue(): string;
}

export interface DownloadResult {
	blob: Blob;
}

export interface NotificationApi {
	notify(notification: {
		title: string;
		text: string;
		type: "success" | "warning" | "error" | "info" | "notice";
		error?: Error;
	}): void;
}

interface QuietApi<T> {
	quiet: T;
}

export function createApiService<T>(config: {
	baseUrl: string;
	authenticationApi: AuthenticationApi;
	notificationApi: NotificationApi;
}): T & QuietApi<T> {
	const target: ServiceTarget = {
		baseUrl: config.baseUrl,
	};
	const handler = {
		get(target: ServiceTarget, methodName: string) {
			if (methodName === "quiet") {
				return target.quiet;
			}
			return function(parameter: any) {
				const input: string = target.baseUrl + "/" + methodName;
				const headers: Headers = new Headers();
				headers.append(
					"Authorization",
					config.authenticationApi.getHttpHeaderValue(),
				);
				const startTime = new Date().getTime();
				let endTime;
				return fetch(input, {
					method: "POST",
					mode: "cors",
					body: JSON.stringify(parameter),
					headers,
				})
					.then((response: Response) => {
						endTime = new Date().getTime();
						if (!response.ok) {
							// TODO: proper error handling
							return response.text().then(text => {
								throw new Error("Error executing " + methodName + " :" + text);
							});
						}
						if (methodName.startsWith("download")) {
							return response.blob().then(blob => {
								return {
									blob,
								};
							});
						}
						return response.json();
					})
					.then(json => {
						const responseInformation = json.responseInformation;
						if (responseInformation) {
							const responseTimeInMs = endTime - startTime;
							const errors: ResponseFragment[] = [];
							let failedNodes = "";
							let successCount = 0;
							let needsRootFragment = true;
							responseInformation.fragments.forEach(
								(fragment: ResponseFragment) => {
									if (fragment) {
										if (fragment.status == "OK") {
											successCount++;
										} else {
											failedNodes +=
												" " +
												fragment.instancePath.join("-") +
												": " +
												fragment.status;
											errors.push(fragment);
										}
										if (fragment.instancePath.length == 0) {
											needsRootFragment = false;
											fragment.responseTimeInMs = responseTimeInMs;
										}
									}
								},
							);
							// Add root info
							if (needsRootFragment) {
								responseInformation.fragments.push({
									instancePath: [],
									status: "OK",
									responseTimeInMs,
								});
							}
							if (errors.length >= responseInformation.fragments.length) {
								if (target.isQuiet) {
									return json;
								}
								throw Error(
									"Total failure to perform call " +
										methodName +
										", first error: " +
										errors[0].errorMessage,
								);
							}
							if (errors.length >= responseInformation.fragments.length) {
								if (target.isQuiet) {
									return json;
								}
								throw Error(
									"Total failure to perform call " +
										methodName +
										", first error: " +
										errors[0].errorMessage,
								);
							}
							if (responseInformation.failure) {
								if (target.isQuiet) {
									return json;
								}
								if (errors.length > 0) {
									throw Error(
										"Total failure to perform call " +
											methodName +
											", first error: " +
											errors[0].errorMessage,
									);
								} else {
									throw Error("Total failure to perform call " + methodName);
								}
							}

							if (responseInformation.incomplete > 0 && !target.isQuiet) {
								config.notificationApi.notify({
									title: `Result of ${methodName} call may be incomplete`,
									text: "The following instances failed: " + failedNodes,
									type: "warning",
								});
							}
						}
						return json;
					})
					.catch(throwable => {
						if (!target.isQuiet) {
							config.notificationApi.notify({
								title: "RPC call failed",
								text: typeof throwable === "string" ? input + throwable : input,
								type: "error",
								error: throwable,
							});
							throw throwable;
						}
					});
			};
		},
	};
	target.quiet = new Proxy({ isQuiet: true, ...target } as any, handler);
	const proxy = new Proxy(target as any, handler) as any;
	return proxy as (T & QuietApi<T>);
}

export interface Modifier<T> {
	replaced?: T;
	removed?: boolean;
}

export function computeModification<T>(
	original: T,
	current: T,
	modification: any,
	...attributes: (keyof T)[]
) {
	for (const attribute of attributes) {
		if (!_.isEqual(original[attribute], current[attribute])) {
			modification[attribute + "Modification"] = {
				replaced: current[attribute],
			};
		}
	}
}
