# Kittik

![Travis (.com)](https://img.shields.io/travis/com/ghaiklor/kittik?style=for-the-badge)
![Codecov](https://img.shields.io/codecov/c/gh/ghaiklor/kittik?style=for-the-badge)
![Snyk Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/ghaiklor/kittik?style=for-the-badge)
![GitHub Commits](https://img.shields.io/github/commits-since/ghaiklor/kittik/latest/master?style=for-the-badge)

![GitHub Followers](https://img.shields.io/github/followers/ghaiklor?label=Follow&style=social)
![Twitter Follow](https://img.shields.io/twitter/follow/ghaiklor?style=social)

_This branch is in active development. If you want to use kittik right now, you can find last stable release here [v2.1.2](https://github.com/ghaiklor/kittik/releases/tag/v2.1.2)_

## Announcement

Kittik **will be totally rebooted from scratch**.

During last few years I've learned a lot and got a lot of new expertise in different areas.
So I believe, that the new version of kittik will be better then before.

Here is my plan:

1) First of all, I've moved the old kittik-cursor for rendering in terminal to separate repository - [@ghaiklor/terminal-canvas](https://github.com/ghaiklor/terminal-canvas). I made a lot of job there in optimizations, so it can render faster than before. I've managed to decrease the most of de-optimization in TurboFan, thanks to [turbolizer](https://github.com/thlorenz/turbolizer) and built-in profiler in Node.

2) I understood that handling different npm packages in separate repositories is a big headache, so the old repositories will be all moved in this repo and managed by lerna.

3) The core functionality of Kittik (_slides, decks, etc_) will be rewritten from scratch without Babel and using the latest features of TypeScript.

4) Many of you told me that creating slides in YAML or via API is another headache. So, I'm planning to develop a separate language, so Kittik can have its own DSL for creating presentations.

Stay in touch by starring this repository or even better, watch it or subscribe to my twitter - [@ghaiklor](https://twitter.com/ghaiklor).

## License

[MIT](./LICENSE)
