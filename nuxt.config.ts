function per(target: number, context: number) {
  return (target / context) * 100 + "vw";
}

export default defineNuxtConfig({
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
  // typescript: {
  //   typeCheck: {
  //     eslint: {
  //       files: "./**/*.{ts,js,vue}",
  //     },
  //   },
  // },
  image: {
    // The screen sizes predefined by `@nuxt/image`:
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
});
