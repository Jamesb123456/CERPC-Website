# Branch protection rules (recommended)

Apply these in GitHub → Settings → Branches → Branch protection rules (Add rule) for `main`:

- Require a pull request before merging
  - Require approvals: 1 (or more)
  - Dismiss stale pull request approvals when new commits are pushed (recommended)
  - Require review from Code Owners (optional)
- Require status checks to pass before merging
  - Require branches to be up to date before merging (recommended)
  - Required checks (exact job names):
    - `CI / lint`
    - `CI / build`
- Require linear history (optional)
- Do not allow bypassing the above settings (recommended)

Notes:
- Status check names use the pattern: `<workflow name> / <job name>`. Our workflow is `CI`; jobs are `lint` and `build`.
- After saving, open any pull request to verify required checks appear.
