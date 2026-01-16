// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@nuxt/fonts"],
  typescript: {
    typeCheck: true,
    strict: true,
  },
  imports: {
    dirs: [
      "~/assets/types.ts"
    ],
  },
  css: ["normalize.css/normalize.css"],
  image: {
    dir: "assets/images",
  },
  fonts: {
    families: [
      {
        name: "Source Sans 3",
        provider: "google",
      },
    ],
    defaults: {
      weights: [400, 700],
      styles: ["normal", "italic"],
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: `
            @use "~/assets/styles/variables.sass" as *;
            @use "~/assets/styles/globals.sass" as *;
            @use "~/assets/styles/mixins.sass" as *;
          `,
        },
      },
    },
  },
});
