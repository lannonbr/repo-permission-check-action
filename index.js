const { Toolkit } = require("actions-toolkit");
const tools = new Toolkit();

// Permission levels higher in the array have higher access to the repo.
const perms = ["none", "read", "write", "admin"];

const username = tools.context.actor;
(async () => {
  const response = await tools.github.repos.getCollaboratorPermissionLevel(
    tools.context.repo({ username })
  );

  let permission = response.data.permission; // Permission level of actual user
  let argPerm = tools.arguments._[0]; // Permission level passed in through args

  let yourPermIdx = perms.indexOf(permission);
  let requiredPermIdx = perms.indexOf(argPerm);

  console.log(`[Action] User Permission: ${permission}`);
  console.log(`[Action] Minimum Action Permission: ${argPerm}`);

  // If the index of your permission is at least or greater than the required,
  // exit sucessfully. Otherwise fail.
  if (yourPermIdx >= requiredPermIdx) {
    process.exit(0);
  } else {
    process.exit(1);
  }
})();
