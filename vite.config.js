import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Accepts connections from other devices
    port: 5173, // Optional: specify port
  },
  proxy: {
    "/getEvents": {
      target: "http://43.204.148.194:8081",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/getEvents/, "/getEvents"),
    },
  },
});
