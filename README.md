# Memory leak reproduction

## Steps on steroids

```
yarn
yarn build
cd dist
npx http-server
```

## Steps description
- yarn install
- yarn production build
- run any favorite server inside of dist directory (prod build), for example http-server
- you can use autoclick feature on bottom of demo or change using tabs on top
- check memory usage @ page load and after several mounts/unmounts
