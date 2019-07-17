/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 const path = require('path');
 const slugifyPost = require('./slugifyPost');

 exports.createPages = async ({graphql, actions: {createPage}}) => {
   const result = await graphql(`
   {
     postgres {
       pages: allPagesList {
         id
         slug
         title
         categoryByCategoryId {
            name
            slug
        }
      }
     }
   }
   `)

   result.data.postgres.pages.forEach(page => {
     createPage({
       path: '/' + page.slug,
       component: path.resolve('./src/templates/site-page.js'),
       context: {
         pageId: page.id,
       },
     });
   });

 }
