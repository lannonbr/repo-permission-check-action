const { Toolkit } = require("actions-toolkit");
const tools = new Toolkit();
const octokit = tools.createOctokit();

const user = process.env.GITHUB_ACTOR;
const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");

octokit.repos
  .getCollaboratorPermissionLevel({ owner, repo, username: user })
  .then(response => {
    if (["write", "admin"].includes(response.data.permission)) {
      process.exit(0);
    } else {
      process.exit(1);
    }
  });
