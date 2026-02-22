import { vite as vidstack } from "vidstack/plugins";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "192x192",
          href: "/favicon.png",
        },
      ],
    },
  },
  modules: ["@nuxt/image", "@nuxt/fonts"],
  typescript: {
    typeCheck: true,
    strict: true,
  },
  imports: {
    dirs: ["assets/types/**/*"],
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
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith("media-"),
    },
  },
  vite: {
    plugins: [vidstack()],
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
  runtimeConfig: {
    dbHost: process.env.DB_HOST,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,
  },
});
