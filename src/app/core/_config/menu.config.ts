export class MenuConfig {
  public defaults: any = {
    header: {
      self: {
        skin: "light"
      },
      items: []
    },
    aside: {
      self: {
        skin: "light"
      },
      items: [
        {
          title: "Map",
          // root: true,
          icon: "icon-a_map",
          page: "/map",
          translate: "MENU.MAP"
          // bullet: "dot"
        },
        {
          title: "Vehicles",
          // root: true,
          icon: "icon-a_list-view",
          page: "/vehicles",
          translate: "MENU.SUPPORT"
          // bullet: "dot"
        },
        {
          title: "Settings",
          // root: true,
          icon: "icon-a_settings",
          page: "/contact",
          translate: "MENU.SUPPORT"
          // bullet: "dot"
        },
        {
          title: "Support",
          // root: true,
          icon: "icon-a_support",
          page: "/contact",
          translate: "MENU.SUPPORT"
          // bullet: "dot"
        },
        // {
        //   title: "Dashboard",
        //   // root: true,
        //   // icon: "flaticon2-architecture-and-city",
        //   page: "/dashboard",
        //   translate: "MENU.DASHBOARD"
        //   // bullet: "dot"
        // },
        // {
        //   title: "Imprint",
        // root: true,
        // icon: "flaticon2-architecture-and-city",
        // page: "/imprint",
        // translate: "MENU.IMPRINT"
        // bullet: "dot"
        // }
        // { section: "Applications" },
        // {
        //   title: "User Management",
        //   root: true,
        //   bullet: "dot",
        //   icon: "flaticon2-user-outline-symbol",
        //   submenu: [
        //     {
        //       title: "Users",
        //       page: "/user-management/users"
        //     },
        //     {
        //       title: "Roles",
        //       page: "/user-management/roles"
        //     }
        //   ]
        // },
        // { section: "Custom" },
        // {
        //   title: "Error Pages",
        //   root: true,
        //   bullet: "dot",
        //   icon: "flaticon2-list-2",
        //   submenu: [
        //     {
        //       title: "Error 1",
        //       page: "/error/error-v1"
        //     },
        //     {
        //       title: "Error 2",
        //       page: "/error/error-v2"
        //     },
        //     {
        //       title: "Error 3",
        //       page: "/error/error-v3"
        //     },
        //     {
        //       title: "Error 4",
        //       page: "/error/error-v4"
        //     },
        //     {
        //       title: "Error 5",
        //       page: "/error/error-v5"
        //     },
        //     {
        //       title: "Error 6",
        //       page: "/error/error-v6"
        //     }
        //   ]
        // },
        // {
        //   title: "Wizard",
        //   root: true,
        //   bullet: "dot",
        //   icon: "flaticon2-mail-1",
        //   submenu: [
        //     {
        //       title: "Wizard 1",
        //       page: "/wizard/wizard-1"
        //     },
        //     {
        //       title: "Wizard 2",
        //       page: "/wizard/wizard-2"
        //     },
        //     {
        //       title: "Wizard 3",
        //       page: "/wizard/wizard-3"
        //     },
        //     {
        //       title: "Wizard 4",
        //       page: "/wizard/wizard-4"
        //     }
        //   ]
        // },
        {
          title: "Dashboard",
          root: true,
          page: "/dashboard",
          translate: "MENU.DASHBOARD",
          icon: "icon-a_dashboard"
        },
        {
          title: "Support",
          root: true,
          page: "/contact",
          translate: "MENU.SUPPORT",
          icon: "icon-a_support"
        },
        {
          title: "Kpis",
          root: true,
          page: "/kpis",
          translate: "MENU.KPIS",
          icon: "icon-a_support"
        }
      ]
    }
  };

  public get configs(): any {
    return this.defaults;
  }
}
