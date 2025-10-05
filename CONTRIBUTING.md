# Contributing

Thanks for your interest in contributing to the CERPC Website!

## Getting Started

1. Fork and clone the repo
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run locally:
   ```bash
   npm start
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## Development Guidelines

- Use React best practices and keep components small and focused.
- Keep assets in `public/images/` or `src/assets/` as appropriate.
- Routing lives in `src/App.js`; pages go in `src/pages/`.

## Branching & PRs

- Create feature branches from `main` (or `master`): `feat/short-description`, `fix/bug-summary`.
- Write clear commit messages (Conventional Commits encouraged):
  - `feat: add gallery filters`
  - `fix: correct header link padding`
- Open a Pull Request:
  - Describe the change and motivation
  - Include screenshots for UI changes
  - Link related issues, if any

## Testing & CI

- Ensure `npm run build` passes locally before opening a PR.
- Our GitHub Actions workflow builds the project on every PR.

## Reporting Issues

- Use the Bug Report or Feature Request templates in GitHub Issues.
- Include reproduction steps and environment details when possible.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
