// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-ap
import AltLayout from '~/layouts/AltLayout.vue';
import VueDisqus from 'vue-disqus';

// import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  head.htmlAttrs = { lang: "en" },
  head.bodyAttrs = { class: "body" }
  // Set default layout as a global component
  Vue.component('Layout', AltLayout)
  Vue.use(VueDisqus)

  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css'
  });

  head.script.push({
    type: 'text/javascript',
    src: 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js',
    body: true,
  });

  head.script.push({
    type: 'text/javascript',
    src: 'https://cdn.snipcart.com/scripts/2.0/snipcart.js',
    body: true,
    id: 'snipcart',
    'data-api-key': 'MmNjZjM0NmUtOTM2ZS00MTUzLTk3ZDAtZTg0NGNmZWY2YjdhNjM3NDgyMjA0NDA4MDA4ODEz',
  });
}


