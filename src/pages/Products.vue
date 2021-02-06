<template>
  <Layout>
    <h1>Products</h1>
    <div
      style="text-align: center"
      v-for="edge in $page.allContentfulProduct.edges"
      :key="edge.node.id"
    >
      <h2 style="margin-bottom: 0.25rem">{{ edge.node.name }}</h2>
      <button
      class="snipcart-add-item cart-button"
      :data-item-id="edge.node.id"
      :data-item-name="edge.node.name"
      :data-item-image="edge.node.image.file.url"
      :data-item-price="edge.node.price"
      data-item-url="products"

       >Buy For ${{ edge.node.price }}</button>
      <g-image
        :src="edge.node.image.file.url"
        style="width: 100%; height: 300px; object-fit: contain"
        alt="edge.node.image.title"
      />
      <!-- <p>{{ edge.node.description }}</p> -->
    </div>
    <Pager :info="$page.allContentfulProduct.pageInfo" linkClass="pager" />
  </Layout>
</template>

<page-query>
query ($page: Int){
  allContentfulProduct (perPage: 2, page: $page ) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        name
        price
        image {
          title
          file {
            url
          }
        }
    
        
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome' 
export default {
  components: { Pager },
    metaInfo: {
        title: "Products",
        meta: [
            {charset: 'utf-8'},
            { name: 'author', content: 'blog'},
            { name: 'description', content: 'Discover new items daily.'},
            { name: 'keywords', content: 'New Items, Widgets'}
        ]
    }
}
</script>

<style>
.pager {
  font-size: 1rem;
  letter-spacing: 0.25px;
  padding: 40px 20px;
}

.cart-button {
  background-color: forestgreen;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 8px 16px;
  margin-bottom: 10px;
  text-decoration: none;
  font-size: 1rem;
}
</style>