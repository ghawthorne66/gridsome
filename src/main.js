// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-ap
import AltLayout from '~/layouts/AltLayout.vue'
import VueDisqus from 'vue-disqus'

// import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  head.htmlAttrs = { lang: "en" },
  head.bodyAttrs = { class: "body" }
  // Set default layout as a global component
  Vue.component('Layout', AltLayout)
  Vue.use(VueDisqus)
}
