# Repo Permission Check Action

A GitHub action to check if a user has specific access to a repo.

On GitHub, all users have one of four permission levels for any repo:

- **none**: no access to a repo
- **read**: pull-only access to a repo
- **write**: pull and push access to a repo
- **admin**: pull, push, and administrator access to a repo.

This action will check on the current repo if the user has a high enough permission level based on a defined argument.

## Usage

Say I want to have an action to only pass if a user has write access to the repo, I can use the action as follows:

```workflow
action "Check Push Access" {
  uses = "lannonbr/repo-permission-check-action@master"
  args = ["write"]
  secrets = ["GITHUB_TOKEN"]
}
```

This will allow anyone with write or higher permissions to succeed.

As this requires access to the GitHub API, the `GITHUB_TOKEN` secret is required.
