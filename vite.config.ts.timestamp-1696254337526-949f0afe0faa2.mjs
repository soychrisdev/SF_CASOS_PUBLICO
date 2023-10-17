// vite.config.ts
import react from "file:///C:/git/inacap-salesforce-crm-apps/salesforce-casos-externos/node_modules/@vitejs/plugin-react/dist/index.mjs";
import sass from "file:///C:/git/inacap-salesforce-crm-apps/salesforce-casos-externos/node_modules/sass/sass.node.mjs";
import { defineConfig } from "file:///C:/git/inacap-salesforce-crm-apps/salesforce-casos-externos/node_modules/vite/dist/node/index.js";
var vite_config_default = defineConfig(async ({ command }) => {
  if (command === "serve") {
    console.log("using vite.config. DEV option");
    return {
      plugins: [react()],
      css: {
        preprocessorOptions: {
          scss: {
            implementation: sass
          }
        }
      },
      server: {
        proxy: {
          "/api": {
            target: "http://[::1]:54111/api",
            secure: false,
            changeOrigin: false,
            rewrite: (path) => path.replace(/^\/api/, "")
          }
        }
      }
    };
  } else {
    console.log("using vite.config. build option");
    return {
      plugins: [react()],
      css: {
        preprocessorOptions: {
          scss: {
            implementation: sass
          }
        }
      },
      server: {
        proxy: {
          "/api": {
            target: "http://localhost:54111/CRM_SF/SF_CASOS_EXTERNO/api",
            // work in build
            secure: false,
            changeOrigin: true
            // work in local
          }
        }
      }
    };
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxnaXRcXFxcaW5hY2FwLXNhbGVzZm9yY2UtY3JtLWFwcHNcXFxcc2FsZXNmb3JjZS1jYXNvcy1leHRlcm5vc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcZ2l0XFxcXGluYWNhcC1zYWxlc2ZvcmNlLWNybS1hcHBzXFxcXHNhbGVzZm9yY2UtY2Fzb3MtZXh0ZXJub3NcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L2dpdC9pbmFjYXAtc2FsZXNmb3JjZS1jcm0tYXBwcy9zYWxlc2ZvcmNlLWNhc29zLWV4dGVybm9zL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IHNhc3MgZnJvbSBcInNhc3NcIjtcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoYXN5bmMgKHsgY29tbWFuZCB9KSA9PiB7XG5cdGlmIChjb21tYW5kID09PSBcInNlcnZlXCIpIHtcblx0XHRjb25zb2xlLmxvZyhcInVzaW5nIHZpdGUuY29uZmlnLiBERVYgb3B0aW9uXCIpO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHBsdWdpbnM6IFtyZWFjdCgpXSxcblx0XHRcdGNzczoge1xuXHRcdFx0XHRwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG5cdFx0XHRcdFx0c2Nzczoge1xuXHRcdFx0XHRcdFx0aW1wbGVtZW50YXRpb246IHNhc3MsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRzZXJ2ZXI6IHtcblx0XHRcdFx0cHJveHk6IHtcblx0XHRcdFx0XHRcIi9hcGlcIjoge1xuXHRcdFx0XHRcdFx0dGFyZ2V0OiBcImh0dHA6Ly9bOjoxXTo1NDExMS9hcGlcIixcblx0XHRcdFx0XHRcdHNlY3VyZTogZmFsc2UsXG5cdFx0XHRcdFx0XHRjaGFuZ2VPcmlnaW46IGZhbHNlLFxuXHRcdFx0XHRcdFx0cmV3cml0ZTogKHBhdGgpID0+IHBhdGgucmVwbGFjZSgvXlxcL2FwaS8sIFwiXCIpLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS5sb2coXCJ1c2luZyB2aXRlLmNvbmZpZy4gYnVpbGQgb3B0aW9uXCIpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRwbHVnaW5zOiBbcmVhY3QoKV0sXG5cdFx0XHRjc3M6IHtcblx0XHRcdFx0cHJlcHJvY2Vzc29yT3B0aW9uczoge1xuXHRcdFx0XHRcdHNjc3M6IHtcblx0XHRcdFx0XHRcdGltcGxlbWVudGF0aW9uOiBzYXNzLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0c2VydmVyOiB7XG5cdFx0XHRcdHByb3h5OiB7XG5cdFx0XHRcdFx0XCIvYXBpXCI6IHtcblx0XHRcdFx0XHRcdHRhcmdldDogXCJodHRwOi8vbG9jYWxob3N0OjU0MTExL0NSTV9TRi9TRl9DQVNPU19FWFRFUk5PL2FwaVwiLCAvLyB3b3JrIGluIGJ1aWxkXG5cdFx0XHRcdFx0XHRzZWN1cmU6IGZhbHNlLFxuXHRcdFx0XHRcdFx0Y2hhbmdlT3JpZ2luOiB0cnVlLCAvLyB3b3JrIGluIGxvY2FsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fTtcblx0fVxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTJXLE9BQU8sV0FBVztBQUM3WCxPQUFPLFVBQVU7QUFDakIsU0FBUyxvQkFBb0I7QUFHN0IsSUFBTyxzQkFBUSxhQUFhLE9BQU8sRUFBRSxRQUFRLE1BQU07QUFDbEQsTUFBSSxZQUFZLFNBQVM7QUFDeEIsWUFBUSxJQUFJLCtCQUErQjtBQUUzQyxXQUFPO0FBQUEsTUFDTixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsTUFDakIsS0FBSztBQUFBLFFBQ0oscUJBQXFCO0FBQUEsVUFDcEIsTUFBTTtBQUFBLFlBQ0wsZ0JBQWdCO0FBQUEsVUFDakI7QUFBQSxRQUNEO0FBQUEsTUFDRDtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ1AsT0FBTztBQUFBLFVBQ04sUUFBUTtBQUFBLFlBQ1AsUUFBUTtBQUFBLFlBQ1IsUUFBUTtBQUFBLFlBQ1IsY0FBYztBQUFBLFlBQ2QsU0FBUyxDQUFDLFNBQVMsS0FBSyxRQUFRLFVBQVUsRUFBRTtBQUFBLFVBQzdDO0FBQUEsUUFDRDtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsRUFDRCxPQUFPO0FBQ04sWUFBUSxJQUFJLGlDQUFpQztBQUM3QyxXQUFPO0FBQUEsTUFDTixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsTUFDakIsS0FBSztBQUFBLFFBQ0oscUJBQXFCO0FBQUEsVUFDcEIsTUFBTTtBQUFBLFlBQ0wsZ0JBQWdCO0FBQUEsVUFDakI7QUFBQSxRQUNEO0FBQUEsTUFDRDtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ1AsT0FBTztBQUFBLFVBQ04sUUFBUTtBQUFBLFlBQ1AsUUFBUTtBQUFBO0FBQUEsWUFDUixRQUFRO0FBQUEsWUFDUixjQUFjO0FBQUE7QUFBQSxVQUNmO0FBQUEsUUFDRDtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsRUFDRDtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
