# [0.0.0](https://github.com/ghaiklor/kittik/compare/v2.1.2...v0.0.0) (2020-04-19)


### Bug Fixes

* 🐛 issue when delay could accept NaN or Infinity values ([1905b0d](https://github.com/ghaiklor/kittik/commit/1905b0d3df5b548c835b59e3301a82c310c0fd78))
* 🐛 issue when process.stdin could be not an interactive ([5055370](https://github.com/ghaiklor/kittik/commit/5055370bb0e0adebaa171c7dcced69b63ddc3bbd))
* 🐛 issue with animating text with print animation ([b55f6bd](https://github.com/ghaiklor/kittik/commit/b55f6bd61d46c6e3aecb60349332e33f4a0edc82))
* 🐛 issue with graceful closing the process ([268dccf](https://github.com/ghaiklor/kittik/commit/268dccf9911ac2c8a7015cae02e9587273f56326))
* 🐛 issue with regular expression for base64 in image shape ([c3f9be2](https://github.com/ghaiklor/kittik/commit/c3f9be2f129b12d4ac7371891b924c54fbc0be1b))


### Features

* 🎸 add a possibility to override cursor when using builder ([43b03aa](https://github.com/ghaiklor/kittik/commit/43b03aa9599e8eb243fda86bcf1c49a90b54e363))
* 🎸 add Builder Pattern to Shape/Animation/Slide ([d30c965](https://github.com/ghaiklor/kittik/commit/d30c965abbe85b961c22d68c525455b27770e29d))
* 🎸 add name to the slides, so you can reference them later ([f45e55c](https://github.com/ghaiklor/kittik/commit/f45e55c63281f8717c0c3b694fc7546d6d8e5fde))
* 🎸 DeckBuilder allows to create the whole decks via API ([fc1eb56](https://github.com/ghaiklor/kittik/commit/fc1eb56da99d0ca498f20d5d47f6430f81077f9e))
* 🎸 implement more user-friendly error handling in slides ([c494c26](https://github.com/ghaiklor/kittik/commit/c494c265f80fcb1800e83bc39fbfa4b58c754e96))
* 🎸 implement passing cursor as an argument to renderer ([594795c](https://github.com/ghaiklor/kittik/commit/594795c7645b377447fa3e2f693dcbf3132d9079))


### BREAKING CHANGES

* 🧨 Any shape constructor now accept not the two argument (cursor, options)
but only the one (options)



## [2.1.2](https://github.com/ghaiklor/kittik/compare/v2.1.1...v2.1.2) (2016-05-12)


### Bug Fixes

* **slide:** Fix issue with True Color support ([3257f22](https://github.com/ghaiklor/kittik/commit/3257f22564722dd4a91c94d25be44f9aacb51890))



## [2.1.1](https://github.com/ghaiklor/kittik/compare/v2.1.0...v2.1.1) (2016-05-10)


### Bug Fixes

* **slide:** Update kittik-shape-code with fixes ([e2ff33b](https://github.com/ghaiklor/kittik/commit/e2ff33b2e2fa1e2de164c9c60b87c81851a4be36))



# [2.1.0](https://github.com/ghaiklor/kittik/compare/v2.0.0...v2.1.0) (2016-05-10)


### Features

* **shape:** Add new shape that renders code blocks ([98cbd94](https://github.com/ghaiklor/kittik/commit/98cbd9416fc0fde3477747727df55d5665408e19))



# [2.0.0](https://github.com/ghaiklor/kittik/compare/v1.0.1...v2.0.0) (2016-05-04)


### Bug Fixes

* **core:** Fix issue with exports ([da72012](https://github.com/ghaiklor/kittik/commit/da7201211fecbc4d21d06e86b3a274e38b2d6f5f))
* **deck:** Fix issue with check if cursor is not a tty stream ([f29ca07](https://github.com/ghaiklor/kittik/commit/f29ca0787fbafb44f8b60bac3836ade53e354541))
* **deck:** Fix issue with default declaration ([b724e5b](https://github.com/ghaiklor/kittik/commit/b724e5ba6721b1afebaaddf0b5233fd949f275d1))
* **deck:** Fix issue with exiting from deck ([9722d62](https://github.com/ghaiklor/kittik/commit/9722d620f65ac849a948090292ecbcd8e57167d9))
* **deck:** Fix issue with restoring screen after exit ([2b17ab7](https://github.com/ghaiklor/kittik/commit/2b17ab724d2fd2805b4e53b5efb761caba59f193))
* **package:** Fix issue with exports Deck class ([ba9c35f](https://github.com/ghaiklor/kittik/commit/ba9c35f13cf949dc441283b62659149617c5c379))
* **slide:** Fix issue with non-rendering slide ([72eb302](https://github.com/ghaiklor/kittik/commit/72eb302d33554eb4dc663bd8d251875cd0782b13))
* **slide:** Fix issue with serializing slides ([46a6bc8](https://github.com/ghaiklor/kittik/commit/46a6bc8d528cb4988bd6daeb27f7a1265b766b06))


### Features

* **deck:** Implement mixing global shapes\animations into slides ([5138b2c](https://github.com/ghaiklor/kittik/commit/5138b2c96e306262eae17186ccfad1d6ef77784d))
* **package:** Add all implemented shapes and animations ([dfb19ca](https://github.com/ghaiklor/kittik/commit/dfb19ca7c9e92c3f9059049d5559e2e7f8c67812))
* **slide:** Implement rendering slide with animations ([2580e6e](https://github.com/ghaiklor/kittik/commit/2580e6e4488a02d9c2cc1bdd4d9126e5851d023b))
* **slide:** Implement simple rendering of the slide ([481920b](https://github.com/ghaiklor/kittik/commit/481920b7be4d9924cfda861121973fcc81741819))



## [1.0.1](https://github.com/ghaiklor/kittik/compare/v1.0.0...v1.0.1) (2015-12-08)


### Bug Fixes

* **package:** Fix issue with non-exists cli ([673df76](https://github.com/ghaiklor/kittik/commit/673df7636ad84dddb77f6ae20af7298b0e659657))



# [1.0.0](https://github.com/ghaiklor/kittik/compare/e05a5604ce4bd4d2fc39b16a64190629d2a3fa07...v1.0.0) (2015-12-08)


### Bug Fixes

* **cursor:** Fixes issue with incorrect cursor position on exit ([b3199d1](https://github.com/ghaiklor/kittik/commit/b3199d18ae6894f5db365e5cd9ea5eacd4e2822d))
* **cursor:** Fixes issue with off is undefined ([3750d1f](https://github.com/ghaiklor/kittik/commit/3750d1f941c8b55e806ececa97562b0e9a66f001))
* **cursor:** Fixes issue with reseting the screen after exit from presentation ([36f65ba](https://github.com/ghaiklor/kittik/commit/36f65bacda11f6639435cee2367b53bccc02b02f))
* **shape:** Fixes issue when class name is taken not from the correct source ([f966b38](https://github.com/ghaiklor/kittik/commit/f966b38401414bcf8aa68eccca3d07710755f4e4))
* **shape:** Fixes issue when options is undefined ([7fd61cb](https://github.com/ghaiklor/kittik/commit/7fd61cb51876479881070d260e62f4e2b54b5cbe))
* **shape:** Fixes issue when test is not defined ([2809c2f](https://github.com/ghaiklor/kittik/commit/2809c2fc5021fcc19ca499b493ba59a9150b6a04))
* **shape:** Fixes issue with empty arguments in constructor ([23274af](https://github.com/ghaiklor/kittik/commit/23274af96074f02f11ef2b57639f842e44b1ba3f))
* **shape:** Fixes issue with fload coordinates in Rectangle ([915358c](https://github.com/ghaiklor/kittik/commit/915358c1608188b5790f2615294d8099b5816f75))
* **shape:** Fixes issue with static property that is not supported ([23ae97e](https://github.com/ghaiklor/kittik/commit/23ae97e54b727cbb4680dbb66156b4eb5519e657))
* **slide:** Fixes issue with passing slides array ([a880a24](https://github.com/ghaiklor/kittik/commit/a880a247225d6aa0072015c4d0c78ecc4f3a0ade))


### Features

* **animation:** Add basic print animation ([86dfe4d](https://github.com/ghaiklor/kittik/commit/86dfe4df358dae652f19aeaee366177790f7c89e))
* **cli:** Implement simple CLI ([4c69581](https://github.com/ghaiklor/kittik/commit/4c69581ad54a9f867fd18a1976ea6e62cf608471))
* **cursor:** Adds more wrap methods to work with cursor ([8228a4a](https://github.com/ghaiklor/kittik/commit/8228a4a26676baa94252332a34ba4a194d148805))
* **cursor:** Implement basic wrapper around charm ([e05a560](https://github.com/ghaiklor/kittik/commit/e05a5604ce4bd4d2fc39b16a64190629d2a3fa07))
* **cursor:** Implements feature that allows to override stdout and stdin streams ([2ce012d](https://github.com/ghaiklor/kittik/commit/2ce012dae18faa3b2be86abf35fb95b5092b14f6))
* **cursor:** Implements fill method ([f6a6cca](https://github.com/ghaiklor/kittik/commit/f6a6cca769d9ef16429d71354dc8a445bc810191))
* **cursor:** Implements getting TTY size ([7915319](https://github.com/ghaiklor/kittik/commit/79153197c739cb8b97db87a2083a0f3adf0254cc))
* **cursor:** Implements on, off for cursor ([c38d93a](https://github.com/ghaiklor/kittik/commit/c38d93a6af8ff527fcdc7b58c36dc973054a5f66))
* **cursor:** Implements possibility to add multiply pipes before\after cursor stream ([1dfa32d](https://github.com/ghaiklor/kittik/commit/1dfa32dcd0638575b0235d6f2ed6930d8db2430d))
* **loader:** Implements basic loader ([29fdc6a](https://github.com/ghaiklor/kittik/commit/29fdc6a22670efd46443d51426ed78bd8fccbe5b))
* **package:** Initial release ([9856348](https://github.com/ghaiklor/kittik/commit/9856348403478d403e2f62ba86bf618186506c06))
* **presentation:** Implements exit method and supports keypress for switching the slides ([4e8d731](https://github.com/ghaiklor/kittik/commit/4e8d73132ee3d86aeb14db6e07b88e1380b3cb87))
* **presentation:** Implements rendering and switching between slides ([215c667](https://github.com/ghaiklor/kittik/commit/215c667e25d0b47b06b71286a4c0c932d32c7085))
* **presentation:** Implements simple presentation wrapper ([b043617](https://github.com/ghaiklor/kittik/commit/b043617a12b8a3e2a43de0bcc07350030ae34a1d))
* **primitive:** Implements basic primitives ([a85ff1c](https://github.com/ghaiklor/kittik/commit/a85ff1cb25cfa56c29ff3ae23a3283d038d8cc0c))
* **shape:** Adds checking for Shape instance when you add it to Slide ([82eca71](https://github.com/ghaiklor/kittik/commit/82eca716d8c1fad36636f594d0974ad99acb0410))
* **shape:** Adds to base shape text property ([9c16685](https://github.com/ghaiklor/kittik/commit/9c166854f7f8e8adfbb7c023724523c69f1ed59c))
* **shape:** Implements background and foreground in basic shape ([6c4fef9](https://github.com/ghaiklor/kittik/commit/6c4fef958c0c000a4a1e11250ba5b42789bf8416))
* **shape:** Implements basic shapes ([68bcdb3](https://github.com/ghaiklor/kittik/commit/68bcdb3fabba99bbdb37c637a366fc331938b744))
* **shape:** Implements feature to check if fromObject is called with right Object representation ([42205f9](https://github.com/ghaiklor/kittik/commit/42205f9929562d83f2b314c63672489919c458ba))
* **shape:** Implements get and set of names from shape ([de587ef](https://github.com/ghaiklor/kittik/commit/de587efe96be41a101e6e0af9a496dfe3f8de736))
* **shape:** Implements JSON and Object serializers for shape ([0d3dd5d](https://github.com/ghaiklor/kittik/commit/0d3dd5d86394fbd128bb108f111d563aba2b4ae5))
* **shape:** Implements Rectangle shape ([f4c4376](https://github.com/ghaiklor/kittik/commit/f4c4376d6a5f59968745625013068499a1e84f83))
* **shape:** Implements simple text shape ([9dc1a52](https://github.com/ghaiklor/kittik/commit/9dc1a522e5edde7875b70401f7e012c422d9476f))
* **shape:** Implements static method that creates new instances of shapes ([75b8c20](https://github.com/ghaiklor/kittik/commit/75b8c2019550550340d6714ae97e91534e1f34d2))
* **shape:** Implements writing text in center of rectangle ([0bbc828](https://github.com/ghaiklor/kittik/commit/0bbc828255b6869820b4f4945c434a4505bf8c5e))
* **slide:** Implements basic slide ([9d1c05b](https://github.com/ghaiklor/kittik/commit/9d1c05bac7fe2c9e557d9b55830a2add2850e630))
* **slide:** Impplements simple Slide wrapper that allows to render the slide ([881b956](https://github.com/ghaiklor/kittik/commit/881b956c6f8672e1f8d291e5b995f7726df1072e))



