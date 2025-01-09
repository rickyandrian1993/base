// electron.vite.config.mjs
import react from "@vitejs/plugin-react";
import { defineConfig, externalizeDepsPlugin } from "electron-vite";
import { resolve } from "path";
var __electron_vite_injected_dirname = "C:\\Project\\Electron\\wb\\client";
var electron_vite_config_default = defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    resolve: {
      alias: {
        "@main": resolve(__electron_vite_injected_dirname, "src/main")
      }
    }
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        "@renderer": resolve(__electron_vite_injected_dirname, "src/renderer/src")
      }
    },
    build: {
      rollupOptions: {
        /**
         * Ignore "use client" waning since we are not using SSR
         */
        onwarn(warning, warn) {
          if (warning.code === "MODULE_LEVEL_DIRECTIVE" && warning.message.includes("use client")) {
            return;
          }
          warn(warning);
        }
      }
    },
    plugins: [react()],
    server: {
      host: true,
      port: 8080
    }
  }
});
export {
  electron_vite_config_default as default
};
