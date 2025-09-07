# Contributing to React Scientific Calculator

We love your input! We want to make contributing to React Scientific Calculator as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## Development Process

We use GitHub to host code, track issues and feature requests, and accept pull requests.

## Pull Requests

Pull requests are the best way to propose changes to the codebase. We actively welcome your pull requests:

1. Fork the repo and create your branch from `main`
2. If you've added code that should be tested, add tests
3. If you've changed APIs, update the documentation
4. Ensure the test suite passes
5. Make sure your code lints
6. Issue that pull request!

## Any contributions you make will be under the MIT Software License

When you submit code changes, your submissions are understood to be under the same [MIT License](http://choosealicense.com/licenses/mit/) that covers the project.

## Report bugs using GitHub's [issues](https://github.com/your-username/react-scientific-calculator/issues)

We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/your-username/react-scientific-calculator/issues/new); it's that easy!

## Write bug reports with detail, background, and sample code

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

## Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/react-scientific-calculator.git
   cd react-scientific-calculator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Run tests**
   ```bash
   npm test
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## Code Style

* Use 2 spaces for indentation
* Use semicolons
* Use single quotes for strings
* Use meaningful variable and function names
* Add JSDoc comments for all functions
* Follow React Hooks patterns
* Use functional components over class components

## Project Structure Guidelines

```
src/
├── components/          # Reusable React components
│   └── Calculator/      # Calculator-specific components
├── hooks/              # Custom React hooks
├── utils/              # Pure utility functions
├── styles/             # Global styles and themes
└── tests/              # Test files
```

## Testing

- Write unit tests for all utility functions
- Write integration tests for complex components
- Use React Testing Library for component tests
- Maintain test coverage above 80%

## Performance Guidelines

- Use `useCallback` and `useMemo` appropriately
- Avoid unnecessary re-renders
- Optimize bundle size
- Ensure Lighthouse scores above 90

## Accessibility Guidelines

- Use semantic HTML elements
- Add proper ARIA labels
- Ensure keyboard navigation works
- Maintain color contrast ratios
- Test with screen readers

## License

By contributing, you agree that your contributions will be licensed under the MIT License.