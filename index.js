const { Toolkit } = require("actions-toolkit");
const tools = new Toolkit();
const octokit = tools.createOctokit();

const perms = ["admin", "write", "read", "none"];

const username = tools.context.actor;
tools.arguments(async () => {
  const response = octokit.repos.getCollaboratorPermissionLevel(
    tools.context.repo({ username })
  );

  let permission = response.data.permission;

  console.log(tools.arguments);

  // let yourPermIdx = perms.indexOf(permission);

  // let requiredPermIdx = perms.indexOf(tools.arguments);

  // if (yourPermIdx >= requiredPermIdx) {
  //   process.exit(0);
  // } else {
  //   process.exit(1);
  // }

  if (["write", "admin"].includes(permission)) {
    process.exit(0);
  } else {
    process.exit(1);
  }
})();
