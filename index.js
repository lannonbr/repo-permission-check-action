const { Toolkit } = require("actions-toolkit");
const tools = new Toolkit();
const octokit = tools.createOctokit();

const username = tools.context.actor;

octokit.repos
  .getCollaboratorPermissionLevel(tools.context.repo({ username }))
  .then(response => {
    if (["write", "admin"].includes(response.data.permission)) {
      process.exit(0);
    } else {
      process.exit(1);
    }
  });
