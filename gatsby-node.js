/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  if (page.path.match(/^\/dashboard/)) {
    if (page.path.match(/create-survey/)) {
      deletePage(page);
      createPage({
        ...page,
        context: {
          dashboardNav: true,
          sideNav: false
        }
      });
    } else {
      deletePage(page);
      createPage({
        ...page,
        context: {
          dashboardNav: true,
          sideNav: true
        }
      });
    }
  } else {
    deletePage(page);
    createPage({
      ...page,
      context: {
        dashboardNav: false,
        sideNav: false
      }
    });
  }
};
