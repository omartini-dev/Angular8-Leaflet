import { LayoutConfigModel } from "../_base/layout";

export class LayoutConfig {
  public defaults: LayoutConfigModel = {
    demo: "demo1",
    self: {
      layout: "fluid",
      body: {
        "background-image": "./assets/media/misc/bg-1.jpg"
      },
      logo: {
        dark: "./assets/media/logos/ZF-logo-STD-White-3C.svg",
        light: "./assets/media/logos/logo-4.svg",
        brand: "./assets/media/logos/ZF-logo-STD-White-3C.svg",
        green: "./assets/media/logos/ZF-logo-STD-White-3C.svg"
      }
    },
    loader: {
      enabled: true,
      type: "spinner-logo",
      logo: "./assets/media/logos/logo-4.svg",
      message: "Please wait..."
    },
    colors: {
      state: {
        brand: "#0070B4",
        dark: "#282a3c",
        light: "#ffffff",
        primary: "#5867dd",
        success: "#34bfa3",
        info: "#36a3f7",
        warning: "#ffb822",
        danger: "#fd3995"
      },
      base: {
        label: ["#c5cbe3", "#a1a8c3", "#3d4465", "#3e4466"],
        shape: ["#f0f3ff", "#d9dffa", "#afb4d4", "#646c9a"]
      }
    },
    header: {
      self: {
        skin: "light",
        fixed: {
          desktop: true,
          mobile: true
        }
      },
      menu: {
        self: {
          display: true,
          layout: "default",
          "root-arrow": false
        },
        desktop: {
          arrow: true,
          toggle: "click",
          submenu: {
            skin: "light",
            arrow: true
          }
        },
        mobile: {
          submenu: {
            skin: "dark",
            accordion: true
          }
        }
      }
    },
    subheader: {
      display: false,
      layout: "subheader-v1",
      fixed: false,
      width: "fluid",
      style: "solid"
    },
    content: {
      width: "fluid"
    },
    brand: {
      self: {
        skin: "light"
      }
    },
    aside: {
      self: {
        skin: "light",
        display: true,
        fixed: true,
        minimize: {
          toggle: true,
          default: true
        }
      },
      footer: { self: { display: true } },
      menu: {
        dropdown: false,
        scroll: false,
        submenu: {
          accordion: true,
          dropdown: { arrow: true, "hover-timeout": 500 }
        }
      }
    },
    footer: { self: { width: "fluid" } }
  };

  /**
   * Good place for getting the remote config
   */
  public get configs(): LayoutConfigModel {
    return this.defaults;
  }
}
