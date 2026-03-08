import { buildVueDompurifyHTMLDirective } from 'vue-dompurify-html';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('clean-html', buildVueDompurifyHTMLDirective())
})
