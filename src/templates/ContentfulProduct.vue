<template>
  <Layout>
    <h2 style="text-align: center" v-html="$page.contentfulProduct.name"></h2>
      <button
        class="snipcart-add-item cart-button"
        :data-item-id="$page.contentfulProduct.id"
        :data-item-name="$page.contentfulProduct.name"
        :data-item-price="$page.contentfulProduct.price"
        :data-item-image="$page.contentfulProduct.image.file.url"
        :data-item-url="$page.contentfulProduct.path"
      >Buy for $ {‌{$page.contentfulProduct.price}}</button>
      <g-image
        :src="$page.contentfulProduct.image.file.url"
        style="width: 100%; height: 300px; object-fit: contain;"
        :alt="$page.contentfulProduct.image.title"
      />
      <p>{‌{$page.contentfulProduct.description}}</p>
    </div>
    <vue-disqus shortname="blog-a86fmpsnid" :identifier="$page.contentfulProduct.id"></vue-disqus>
  </Layout>
</template>
 
<page-query>
query($path: String) {
  contentfulProduct(path: $path) {
    id
    path
    name
    title
    price
    description
    image {
      file {
        url
      }
    }
  }
}
</page-query>