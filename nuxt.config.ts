// https://nuxt.com/docs/api/configuration/nuxt-config
function per(target: number, context: number) {
  return (target / context) * 100 + "vw";
}

export default defineNuxtConfig({
  components: true,
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
