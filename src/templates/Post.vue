<template>
    <Layout>
        <div v-html="$page.post.content"></div>
        <Disqus shortname="gridsome-5" :identifier="$page.post.id" />
    </Layout>
</template>

<page-query>
query ($path: String!) {
  post(path: $path) {
    id
    content
  }
}
</page-query>