# @semrel-extra/demo-msr-cicd

Demo repo to show how [multi-semantic-release](https://github.com/dhoulb/multi-semantic-release) works with CI/CD
* [`master`](https://github.com/semrel-extra/demo-msr-cicd/tree/master) — [GitHub Actions](https://github.com/features/actions)
* [`travis`](https://github.com/semrel-extra/demo-msr-cicd/tree/travis) — [Travis CI](https://www.travis-ci.com/)

### Stack
* [yarn 1.x](https://classic.yarnpkg.com/en/docs/workspaces) (workspaces enabled, see root level `package.json`)
* [lerna 4.x](https://github.com/lerna/lerna)

### Monorepo structure
* `pkg-a` has no own deps
* `pkg-b` has no deps too
* `pkg-c` refers to `pkg-a`
* `pkg-d` depends from `pkg-b` and `pkg-c`
* `pkg-e` is fully independent

packages `a, b, c` belong to `packages/foo` scope
`d` and `e` — to scope `packages/bar`

### License
MIT