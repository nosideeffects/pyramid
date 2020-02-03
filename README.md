# pyramid word

Extremely basic api and frontend for determining if a provided sequence is a "pyramid word".

A "pyramid word" is any word that contains characters with linearly increasing frequency, starting at 1. e.g. "banana" has 1 `b`, 2 `n`, and 3 `a`.

This project does not attempt to validate that a provided sequence is necessarily a _word_, only that it contains alpha characters with linear frequency.

### Setup
> Note: Requires Node.js version 10+

```bash
npm install

npm run build
npm run start

# Navigate to https://localhost:3000
```

### How to use

1. Build and run server
1. Navigate to https://localhost:3000
1. Use UI to check for pyramid words

OR

1. Build and run server
1. `curl https://localhost:3000/api/pyramid?q=<word>` to check for pyramid words

### Tests

```bash
npm run test
```
