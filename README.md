# Sample nodejs library

This is an example of a library to be used as part of any node js application.

## How it works

Anything placed in the src folder is exported as part of the library.

The library has built-in support for:

- Typescript
- Formatting with Prettier
- Yarn as package manager (with the binary in repo)

### Useful commands

- `yarn build` to create a production-ready version of the library.

## Publishing

For private packages, we deploy them to Github packages.

For public packages, we deploy them to both Github packages and npmjs.com.

After updating the version number in package json (i.e. `yarn version patch`), run one of the following commands:

- `yarn pub` deploys to all configured package repositories
- `yarn pubNpm` deploys to npmjs.com
- `yarn pubGithub` deploys to Github packages

### Warnings

Never commit any passwords or auth tokens to the repo!
