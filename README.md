# @semrel-extra/demo-msr-cicd
[![multi-semantic-release](https://img.shields.io/badge/msr-%F0%9F%A4%96%20%F0%9F%93%A6%20%F0%9F%9A%80-b8e3fc.svg?style=flat)](https://github.com/dhoulb/multi-semantic-release) 

Demo repo to show how [multi-semantic-release](https://github.com/dhoulb/multi-semantic-release) works with CI/CD

| Branch | CI/CD | Status | Remark
|---|---|---|---
|[`master`](https://github.com/semrel-extra/demo-msr-cicd/tree/master) | [GitHub Actions](https://github.com/features/actions) | [![CI](https://github.com/semrel-extra/demo-msr-cicd/workflows/CI/badge.svg?branch=master)](https://github.com/semrel-extra/demo-msr-cicd/actions)
|[`beta`](https://github.com/semrel-extra/demo-msr-cicd/tree/beta) | [GitHub Actions](https://github.com/features/actions) | [![CI](https://github.com/semrel-extra/demo-msr-cicd/workflows/CI/badge.svg?branch=beta)](https://github.com/semrel-extra/demo-msr-cicd/actions) | Pre-releases, beta-versions pipeline
|[`travis`](https://github.com/semrel-extra/demo-msr-cicd/tree/travis) | [Travis CI](https://www.travis-ci.com/) | [![Release Status](https://app.travis-ci.com/semrel-extra/demo-msr-cicd.svg?branch=travis)](https://app.travis-ci.com/semrel-extra/demo-msr-cicd)

### Stack
* [yarn 1.x](https://classic.yarnpkg.com/en/docs/workspaces) (workspaces enabled, see root level [`package.json`](package.json), [`.yarnrc`](.yarnrc))
* [lerna 4.x](https://github.com/lerna/lerna)

### Monorepo structure
* `pkg-a` has no own deps
* `pkg-b` has no deps too
* `pkg-c` refers to `pkg-a`
* `pkg-d` depends from `pkg-b` and `pkg-c`
* `pkg-e` is fully independent

packages `a, b, c` belong to `packages/foo` scope
`d` and `e` — `packages/bar`

### License
[MIT](./LICENSE)
