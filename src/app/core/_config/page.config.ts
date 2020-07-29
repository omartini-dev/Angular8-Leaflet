export class PageConfig {
  public defaults: any = {
    dashboard: {
      page: {
        title: "Dashboard",
        desc: "Latest updates and statistic charts"
      }
    },
    forms: {
      page: { title: "Forms", desc: "" }
    },
    mail: {
      page: { title: "Mail", desc: "Mail" }
    },
    "user-management": {
      users: {
        page: { title: "Users", desc: "" }
      },
      roles: {
        page: { title: "Roles", desc: "" }
      }
    },
    builder: {
      page: { title: "Layout Builder", desc: "" }
    },
    header: {
      actions: {
        page: { title: "Actions", desc: "Actions example page" }
      }
    },
    profile: {
      page: { title: "User Profile", desc: "" }
    },
    error: {
      404: {
        page: { title: "404 Not Found", desc: "", subheader: false }
      },
      403: {
        page: { title: "403 Access Forbidden", desc: "", subheader: false }
      }
    },
    wizard: {
      "wizard-1": { page: { title: "Wizard 1", desc: "" } },
      "wizard-2": { page: { title: "Wizard 2", desc: "" } },
      "wizard-3": { page: { title: "Wizard 3", desc: "" } },
      "wizard-4": { page: { title: "Wizard 4", desc: "" } }
    }
  };

  public get configs(): any {
    return this.defaults;
  }
}
