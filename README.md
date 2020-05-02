# Gatsby + Netlify CMS Starter

[![Netlify Status](https://api.netlify.com/api/v1/badges/b654c94e-08a6-4b79-b443-7837581b1d8d/deploy-status)](https://app.netlify.com/sites/gatsby-starter-netlify-cms-ci/deploys)

**Note:** Этот стартер использует [Gatsby v2](https://www.gatsbyjs.org/blog/2018-09-17-gatsby-v2/).

Этот репо содержит пример бизнес-сайта, который построен с [Gatsby](https://www.gatsbyjs.org/), и [Netlify CMS](https://www.netlifycms.org): **[Demo Link](https://gatsby-netlify-cms.netlify.com/)**.

Следует [JAMstack architecture](https://jamstack.org) используя Git как единственный источник правды, и [Netlify](https://www.netlify.com) для непрерывного развертывания и распространения CDN.

## Features

- Простая целевая страница с функциональностью блога, созданная с Netlify CMS
- Editabe Pages: Landing, About, Product, Blog-Collection и Contact page с поддержкой Netlify
- Create Blog posts из Netlify CMS
- Tags: Отдельная страница для постов под каждым тегом
- Basic directory organization
- Использует Bulma для стилей, но размер уменьшен by `purge-css-plugin`
- Blazing fast loading times thanks to pre-rendered HTML and automatic chunk loading of JS files
- Uses `gatsby-image` with Netlify-CMS preview support
- Separate components for everything
- Netlify deploy configuration
- Netlify function support, см папку `lambda`
- Perfect score on Lighthouse for SEO, Accessibility and Performance (wip:PWA)
- ..and more

## Prerequisites

- Node (I recommend using v8.2.0 or higher)
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)
- [Netlify CLI](https://github.com/netlify/cli)

## Getting Started (Recommended)

Netlify CMS может работать в любой веб-среде интерфейса, но самый быстрый способ попробовать это - запустить его на предварительно настроенном начальном сайте с Netlify. Примером здесь является Kaldi coffee company template (adapted from [One Click Hugo CMS](https://github.com/netlify-templates/one-click-hugo-cms)). Используйте кнопку ниже, чтобы создать и развернуть свою собственную копию хранилища:

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/gatsby-starter-netlify-cms&amp;stack=cms"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

После нажатия этой кнопки вы авторизуетесь в GitHub и выбираете имя репозитория. Netlify автоматически создаст хранилище в вашей учетной записи GitHub с копией файлов из шаблона. Затем он создаст и развернет новый сайт на Netlify, после чего вы попадете на панель мониторинга сайта после завершения сборки. Затем вам нужно настроить службу идентификации Netlify, чтобы авторизовать пользователей для входа в CMS.

### Access Locally

Разверните локальную копию Gitub репозитория Netlify, созданную для вас, с именем, которое вы указали на предыдущем шаге
```
$ git clone https://github.com/[GITHUB_USERNAME]/[REPO_NAME].git
$ cd [REPO_NAME]
$ yarn
$ netlify dev # or ntl dev
```

Это использует новый [Netlify Dev](https://www.netlify.com/products/dev/?utm_source=blog&utm_medium=netlifycms&utm_campaign=devex) CLI feature чтобы выполнять любые функции, которые у вас есть в папке `lambda`.

Для локального тестирования CMS вам необходимо запустить производственную сборку сайта:

```
$ npm run build
$ netlify dev # or ntl dev
```

### Media Libraries (installed, but optional)

Media Libraries были включены в этот стартер по умолчанию. Если вы не планируете использовать `Uploadcare` или `Cloudinary` в вашем проекте вы **можете** удалить их из модуля импорта и регистрации в `src/cms/cms.js`. Вот пример строк для комментирования или удаления из вашего проекта.

```javascript
import CMS from 'netlify-cms-app'
// import uploadcare from 'netlify-cms-media-library-uploadcare'
// import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

// CMS.registerMediaLibrary(uploadcare);
// CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
```

Note: Не забудьте также удалить их из `package.json` и `yarn.lock` / `package-lock.json` using `yarn` or `npm`. Во время сборки netlify-cms-app также объединит библиотеки мультимедиа, удаление их сэкономит вам время сборки.
Example:
```
yarn remove netlify-cms-media-library-uploadcare
```
OR
```
yarn remove netlify-cms-media-library-cloudinary
```
## Getting Started (Without Netlify)

```
$ gatsby new [SITE_DIRECTORY_NAME] https://github.com/netlify-templates/gatsby-starter-netlify-cms/
$ cd [SITE_DIRECTORY_NAME]
$ npm run build
$ npm run serve
```

### Setting up the CMS

Следуйте [Netlify CMS Quick Start Guide](https://www.netlifycms.org/docs/quick-start/#authentication) настроить аутентификацию и хостинг.

## Debugging

Пользователи Windows могут столкнуться `node-gyp` errors when trying to npm install.
To resolve, make sure that you have both Python 2.7 and the Visual C++ build environment installed.

```
npm config set python python2.7
npm install --global --production windows-build-tools
```

[Full details here](https://www.npmjs.com/package/node-gyp 'NPM node-gyp page')

MacOS users might also encounter some errors, for more info check [node-gyp](https://github.com/nodejs/node-gyp). We recommend using the latest stable node version.

## Purgecss

This plugin uses [gatsby-plugin-purgecss](https://www.gatsbyjs.org/packages/gatsby-plugin-purgecss/) and [bulma](https://bulma.io/). The bulma builds are usually ~170K but reduced 90% by purgecss.

# CONTRIBUTING

Contributions are always welcome, no matter how large or small. Before contributing,
please read the [code of conduct](CODE_OF_CONDUCT.md).
