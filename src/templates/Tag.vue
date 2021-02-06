<template>
  <Layout>
    <h1>{{ $page.tag.title }}</h1>

     <article
      v-for="edge in $page.tag.belongsTo.edges"
      :key="edge.node.id"
      style="margin-bottom: 2em"
    >
      <g-image :src="edge.node.cover_image" style="width: 100%" />
      <h2>{{ edge.node.title }}</h2>
      <p>{{ edge.node.excerpt }}</p>
      <p>
        Posted {{ edge.node.date }} . {{ edge.node.timeToRead }} minute read
      </p>
      <div>
        <g-link
          style="padding-right: 0.25em"
          v-for="tag in edge.node.tags"
          :to="tag.path"
          :key="tag.id"
          >#{{ tag.id }}
        </g-link>
      </div>
      <g-link :to="edge.node.path">Read Post</g-link>
      <!-- <div v-html="edge.node.content"></div> -->
    </article>
  </Layout>
</template>

<page-query>
query ($id: ID) {
  tag (id: $id){
    title
    belongsTo {
      edges {
        node {
          ... on Post {
            id
            title
            excerpt
            title
            excerpt
            date (format: "MMMM Do, YYYY")
            timeToRead
            path
            cover_image (width: 1000, height: 300, fit: cover, quality: 90, blur: 10)
            tags {
                path
                id
            }
          }
        }
      }
    }
  }
}
</page-query>
