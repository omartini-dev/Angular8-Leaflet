import {createApiService} from "./gener8-runtime/gener8-runtime";
//import NotificationService from "./services/NotificationService";
import {FleetMonitoringApi} from "./gener8ed/fleetmonitoring-api";

const baseUrl: string = "/fleetmonitoring-api/api";
export const apiBaseUrl: string = baseUrl;

let HTTPHeader: string = null;

export function setHttpHeader(header: string) {
  HTTPHeader = header;
}

//ConfigurationService.configuration.infoscopeBaseUrl + "/api";
export const metascopeApi = createApiService<FleetMonitoringApi>({
  baseUrl,
  authenticationApi: {
    getHttpHeaderValue(): string {
      return HTTPHeader;
    }
  },
  notificationApi: {
    notify(notification: { title: string; text: string; type: "success" | "warning" | "error" | "info" | "notice"; error?: Error }): void {
      console.log(notification);
    }
  },
});
