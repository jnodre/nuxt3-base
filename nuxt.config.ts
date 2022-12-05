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
});
