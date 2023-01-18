function per(target: number, context: number) {
  return (target / context) * 100 + "vw";
}

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiUrl: "https://api.asimetrica.abanico.net",
    },
  },
  css: ["@/assets/style/imports.scss"],
  postcss: {
    plugins: {
      autoprefixer: {},
      "postcss-nested": {},
      "postcss-pxtorem": {},
      "postcss-functions": {
        functions: {
          per,
        },
      },
      "postcss-preset-env": { stage: 1 },
    },
  },
  modules: ["@nuxt/image-edge", "@nuxtjs/html-validator"],
  vite: {
    server: {
      proxy: {
        "/api": {
          target: "https://api.asimetrica.abanico.net",
          changeOrigin: true,
          // rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  },
  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
  },

  htmlValidator: {
    usePrettier: true,
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "es",
      },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "My App",
      meta: [{ hid: "description", name: "description", content: "" }],
    },
  },
});
