const core = require("@actions/core");
const github = require("@actions/github");

const octokit = new github.GitHub(process.env.GITHUB_TOKEN);

// Permission levels higher in the array have higher access to the repo.
const perms = ["none", "read", "write", "admin"];

const username = github.context.actor;
(async () => {
  const response = await octokit.repos.getCollaboratorPermissionLevel({
    ...github.context.repo,
    username: username
  });

  let permission = response.data.permission; // Permission level of actual user
  let argPerm = core.getInput("permission"); // Permission level passed in through args

  let yourPermIdx = perms.indexOf(permission);
  let requiredPermIdx = perms.indexOf(argPerm);

  core.debug(`[Action] User Permission: ${permission}`);
  core.debug(`[Action] Minimum Action Permission: ${argPerm}`);

  // If the index of your permission is at least or greater than the required,
  // exit successfully. Otherwise fail.
  if (yourPermIdx >= requiredPermIdx) {
    process.exit(0);
  } else {
    process.exit(1);
  }
})();
