# Repo Push Check Action

A GitHub action to check if a user has push access to a repo.

It will check on the current repo if the user has either `write` or `admin` permissions on the repo.

## Usage

```workflow
action "Check Push Access" {
  uses = "lannonbr/repo-push-check-action@master"
  secrets = ["GITHUB_TOKEN"]
}
```
