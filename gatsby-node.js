/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// Replacing '/' would result in empty string which is invalid
const replacePath = (path) => (path === `/` ? path : path.replace(/\/$/, ``));

async function removeTrailingSlash(page) {
  return new Promise((resolve) => {
    const oldPage = { ...page };
    page.path = replacePath(page.path);
    resolve(oldPage);
    // if (page.path !== oldPage.path) {
    //   resolve({ updatedPage: page, oldPage, remove: true });
    // } else {
    //   resolve({ updatedPage: page, oldPage, delete: false });
    // }
  });
}

// exports.onCreatePage = ({ page, actions }) => {
//   const { createPage, deletePage } = actions;
//   removeTrailingSlash(page);
// };

// exports.onCreatePage = async ({ page, actions }) => {
// console.log('pages: ', page.path.match(/create-giveaway/));
// const { createPage, deletePage } = actions;
// if (page.path.match(/create-giveaway/)) {
//   page.matchPath = `${page.path}:userID`;
//   console.log('PAGE: ', page);
//   createPage(page);
// }
// console.log('PAGE: ', page);
// createPage(page);

// const oldPage = await removeTrailingSlash(page);
// page.matchPath is a special key that's used for matching pages
// only on the client.
// console.log('UPDATED PAGE: ', page.path);
// console.log('OLDPAGE: ', oldPage.path);

// if (remove) {
//   deletePage(oldPage);
//   createPage(updatedPage);
// }
// if (page.path.match(/^\/dashboard/)) {
//   console.log('PAGE: ', page);
//   // deletePage(page);

//   page.context = 'show Nav';

//   // Update the page.
//   createPage({
//     ...page,
//     context: {
//       showNav: true
//     }
//   });
// }
// };

// exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
//   const { createNode } = actions;
//   console.log('actions: ', actions);

//   // Data can come from anywhere, but for now create it manually
//   const myData = {
//     key: 123,
//     foo: `The foo field of my node`,
//     bar: `Baz`
//   };

//   const nodeContent = JSON.stringify(myData);

//   const nodeMeta = {
//     id: createNodeId(`my-data-${myData.key}`),
//     parent: null,
//     children: [],
//     internal: {
//       type: `MyNodeType`,
//       mediaType: `text/html`,
//       content: nodeContent,
//       contentDigest: createContentDigest(myData)
//     }
//   };

//   const testNode = Object.assign({}, myData, nodeMeta);
//   createNode(testNode);
// };

// exports.onCreateDevServer = ({ app }) => {
//   app.get('/hello', function(req, res) {
//     res.send('hello world');
//   });
// };
