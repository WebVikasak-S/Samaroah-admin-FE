// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "content" | "presets" | any> = {
  content: ["./src/app/**/*.tsx"],
  theme: {
    extend: {
      // backgroundImage: {
      //   't2-bg': "url('../public/assets/t2-bg.png')",
      // },
      colors: {
        primary: {
          DEFAULT: "#277FE7", // You can replace this with your primary color
          light: "#ABE0FF", // Optional: lighter shade of the primary color
          dark: "#0077B5", // Optional: darker shade of the primary color
        },
        secondary: {
          DEFAULT: "#00337C", // You can replace this with your secondary color
          light: "#657786", // Optional: lighter shade of the secondary color
          dark: "#000000", // Optional: darker shade of the secondary color
        },
      },
    },
  },
  presets: [sharedConfig],
};

export default config;
