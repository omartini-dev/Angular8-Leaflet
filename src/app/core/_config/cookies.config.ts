import { NgcCookieConsentConfig } from "ngx-cookieconsent";
export const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: "localhost" // it is recommended to set your domain, for cookies to work properly
  },
  palette: {
    popup: {
      background: "#000"
    },
    button: {
      background: "#f1d600"
    }
  },
  theme: "edgeless",
  type: "info",
  layout: "my-custom-layout",
  layouts: {
    "my-custom-layout": `
    {{messagelink}}
    <div class="links">
      {{cookieInfo}}
      {{compliance}}
    </div>
    `
  },
  elements: {
    messagelink: `
    <span id="cookieconsent:desc" class="cc-message">{{message}}</span>
    `,
    cookieInfo: `<a href="{{cookiePolicyHref}}" class="cc-info">
      <span class="mat-icon notranslate material-icons mat-icon-no-color">
        chevron_right
      </span>
      <span class="text">
        Cookie-Einstellungen
      </span>
    </a>`
  },
  content: {
    message: `Wir verwenden Cookies, um die einwandfreie Funktion unserer Website zu gewährleisten,
      Inhalte und Werbung zu personalisieren, Social Media-Funktionen bereitzustellen und
      unseren Datenverkehr zu analysieren. Wir informieren auch unsere Social Media-, Werbe- und
      Analysepartner über Ihre Nutzung unserer Website. Nur durch Klicken auf "Alle Cookies akzeptieren"
      erteilen Sie Ihre freiwillige Einwilligung zur Aktivierung sämtlicher Cookies.
      Wenn Sie nur teilweise einwilligen wollen, können Sie dies über die Einstellungen vornehmen.
      Hier können Sie Ihre Einwilligung zudem jederzeit widerrufen oder ändern.`.replace(
      "\n",
      " "
    ),

    cookiePolicyLink: "Cookie Policy",
    cookiePolicyHref: "https://cookie.com",

    privacyPolicyLink: "Privacy Policy",
    privacyPolicyHref: "https://privacy.com",

    tosLink: "Terms of Service",
    tosHref: "https://tos.com",
    dismiss: "Alle Cookies akzeptieren"
  }
};
