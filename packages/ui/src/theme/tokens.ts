import { Theme } from './types';

export const lightTheme: Theme = {
  colors: {
    "light": {
      "foreground": {
        "default": {
          "primary": "#20262E",
          "secondary": "#697382",
          "tertiary": "#939DAC"
        },
        "accent": {
          "primary": "#005AD6",
          "secondary": "#458BEB",
          "tertiary": "#96C2FF",
          "on-primary": "#F6FAFF",
          "on-secondary": "#004AB0",
          "on-tertiary": "#005AD6"
        },
        "success": {
          "primary": "#0D8D59",
          "secondary": "#42B486",
          "tertiary": "#64C79F",
          "on-primary": "#F7FFFC",
          "on-secondary": "#047648",
          "on-tertiary": "#0D8D59"
        },
        "danger": {
          "primary": "#C62B28",
          "secondary": "#E84542",
          "tertiary": "#FA8A88",
          "on-primary": "#FFF7F7",
          "on-secondary": "#A31714",
          "on-tertiary": "#C62B28"
        },
        "warning": {
          "primary": "#D97300",
          "secondary": "#F0A551",
          "tertiary": "#FBC17F",
          "on-primary": "#391F00",
          "on-secondary": "#593000",
          "on-tertiary": "#794000"
        },
        "reward": {
          "primary": "#C38A26",
          "secondary": "#F1B84D",
          "tertiary": "#FFE18C",
          "on-primary": "#FFFCF5",
          "on-secondary": "#A6731E",
          "on-tertiary": "#C38A26"
        },
        "neutral": {
          "primary": "#313843",
          "secondary": "#555F6D",
          "tertiary": "#7D8897",
          "on-primary": "#F2F2F2",
          "on-secondary": "#424B58",
          "on-tertiary": "#555F6D"
        },
        "disabled": {
          "primary": "#AAB4C0",
          "on-primary": "#939DAC"
        }
      },
  
      "background": {
        "default": {
          "primary": "#FFFFFF",
          "primary-hover": "#F7FAFF",
          "secondary": "#F7FAFF",
          "secondary-hover": "#F0F4FA",
          "tertiary": "#F0F4FA",
          "tertiary-hover": "#E9EEF5"
        },
        "accent": {
          "primary": "#005AD6",
          "primary-hover": "#004AB0",
          "secondary": "#DCEFFF",
          "secondary-hover": "#C3E1FF",
          "tertiary": "#F7FAFF",
          "tertiary-hover": "#E9EEF5"
        },
        "success": {
          "primary": "#0D8D59",
          "primary-hover": "#047648",
          "secondary": "#D4F7E9",
          "secondary-hover": "#B8EED9",
          "tertiary": "#E5FBF2",
          "tertiary-hover": "#D4F7E9"
        },
        "danger": {
          "primary": "#C62B28",
          "primary-hover": "#A31714",
          "secondary": "#FFEAEA",
          "secondary-hover": "#FFD8D7",
          "tertiary": "#FFF1F1",
          "tertiary-hover": "#FFEAEA"
        },
        "warning": {
          "primary": "#E48B27",
          "primary-hover": "#D97300",
          "secondary": "#FFEED1",
          "secondary-hover": "#FFDFB1",
          "tertiary": "#FFF5E4",
          "tertiary-hover": "#FFEED1"
        },
        "reward": {
          "primary": "#C38A26",
          "primary-hover": "#A6731E",
          "secondary": "#FBF3E6",
          "secondary-hover": "#F6EDD7",
          "tertiary": "#FFFCF5",
          "tertiary-hover": "#FBF3E6"
        },
        "neutral": {
          "primary": "#20262E",
          "primary-hover": "#161A1F",
          "secondary": "#E9EEF5",
          "secondary-hover": "#DCE2EA",
          "tertiary": "#F0F4FA",
          "tertiary-hover": "#E9EEF5"
        },
        "disabled": {
          "primary": "#DCE2EA"
        }
      },
  
      "border": {
        "default": {
          "primary": "#DCE2EA",
          "secondary": "#C3CAD5",
          "tertiary": "#939DAC"
        },
        "accent": {
          "primary": "#005AD6",
          "secondary": "#458BEB",
          "tertiary": "#DCEFFF"
        },
        "success": {
          "primary": "#047648",
          "secondary": "#25A06E",
          "tertiary": "#D4F7E9"
        },
        "danger": {
          "primary": "#C62B28",
          "secondary": "#F16664",
          "tertiary": "#FFEAEA"
        },
        "warning": {
          "primary": "#593000",
          "secondary": "#995100",
          "tertiary": "#FFEED1"
        },
        "reward": {
          "primary": "#C38A26",
          "secondary": "#FFE18C",
          "tertiary": "#F6EDD7"
        },
        "neutral": {
          "primary": "#697382",
          "secondary": "#AAB4C0",
          "tertiary": "#DCE2EA"
        },
        "inverse": {
          "primary": "#424B58"
        },
        "transparent": {
          "primary": "rgba(255, 255, 255, 0.8)"
        },
        "disabled": {
          "primary": "#C3CAD5"
        }
      },
  
      "data": {
        "accent-01": "#D9EBFF",
        "accent-02": "#C3DFFF",
        "accent-03": "#A0CDFF",
        "accent-04": "#64A5FF",
        "accent-05": "#4388F4",
        "accent-06": "#2171E0",
        "accent-07": "#004AB2",
        "accent-08": "#00357F",
        "accent-09": "#00143C",
        "gray-01": "#F0F4F9",
        "gray-02": "#E7EDF5",
        "gray-03": "#D3DCE9",
        "gray-04": "#A2B2C8",
        "gray-05": "#74849A",
        "gray-06": "#46566D",
        "gray-07": "#333E4E",
        "gray-08": "#2A323E",
        "gray-09": "#20262E"
      },
  
      "skeleton": {
        "color-1": "rgba(10, 12, 14, 0.01)",
        "color-2": "rgba(10, 12, 3, 0.08)"
      },
  
      "assets": {
        "neutral-color-1": "#282828",
        "accent-color-1": "#003F96",
        "accent-color-2": "#005AD6",
        "accent-color-3": "#A0C8FF"
      }
    }
  },
    "typography": {
      "families": {
        "default": "Poppins"
      },
      "sizes": {
        "4xl": "43px",
        "3xl": "34px",
        "2xl": "24px",
        "xl": "21px",
        "l": "18px",
        "m": "16px",
        "s": "14px",
        "xs": "12px"
      },
      "lineHeights": {
        "none": "1",
        "xs": "1.125",
        "s": "1.375",
        "m": "1.5",
        "l": "1.7",
        "default": "1.5"
      },
      "letterSpacing": {
        "xs": "-0.015",
        "s": "-0.004",
        "m": "0.0015",
        "l": "0.0025",
        "xl": "0.005",
        "2xl": "0.0125"
      },
      "weights": {
        "regular": "400",
        "medium": "500"
      }
    }
  }
