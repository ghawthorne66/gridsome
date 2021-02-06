// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "C-Side",
  siteDescription: "A designer boutique",
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: 'process.env.CONTENTFUL_SPACE', // required
        accessToken: 'process.env.CONTENTFUL_ACCESS_TOKEN', // required
        host: 'cdn.contentful.com',
        environment: 'master',
        typeName: 'Contentful'
      } 
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        baseDir: "./content/posts",
        path: "*.md",
        typeName: "Post",
        route: "/posts/:title",
        refs: {
          tags: {
            typeName: 'Tag',
            route: '/tags/:id',
            create: true
          }
        }
      }
    }
  ]
};


// {
//   use: "@gridsome/source-filesystem",
//   options: {
//     baseDir: "./content/posts",
//     path: "*.md",
//     typeName: "Post",
//     route: "/posts/:slug",
//   },
// },


// {
//   use: "@gridsome/source-filesystem",
//   options: {
//     path: "content/posts/**/*.md",
//     typeName: "Post",

//     remark: {
//       // remark options
//     },
//   },
// },
// ],
// templates: {
// Post: [
//   {
//     path: "/posts/:title",
//     component: "./src/templates/Post.vue",
//   },
// ],
// },
