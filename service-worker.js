/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d4110628b93a4da494febb77d9d339dc"
  },
  {
    "url": "articles/2019/10.html",
    "revision": "dc236f0d3ed84540fbc1262f5cda065e"
  },
  {
    "url": "articles/2019/11.html",
    "revision": "274a084d5bab30c1f807aa5af4ead35f"
  },
  {
    "url": "articles/2019/12.html",
    "revision": "9f94c73d61d3a89721a81f0f89772149"
  },
  {
    "url": "articles/2020/01.html",
    "revision": "edadbc28dc7e58ec4c9c74faf3d2de53"
  },
  {
    "url": "articles/2020/02.html",
    "revision": "08396a603556cd587c5f37748afd56a8"
  },
  {
    "url": "articles/2020/03.html",
    "revision": "25cd73a6817cbf28c539e21595275c47"
  },
  {
    "url": "articles/2020/04.html",
    "revision": "6e9530ff36c047eb4ac5fe0d5de54bf8"
  },
  {
    "url": "articles/2020/05.html",
    "revision": "10fb0865e7ecf1db839c4152fa723fa9"
  },
  {
    "url": "articles/2020/08.html",
    "revision": "5423116205910c607954385e5efb1fcd"
  },
  {
    "url": "articles/2020/09.html",
    "revision": "6f7c1be941117d447de331cd222c8f56"
  },
  {
    "url": "articles/2020/10.html",
    "revision": "95c594902f9bd91f4aadc8fa6aff4b91"
  },
  {
    "url": "articles/index.html",
    "revision": "dfda5b809f6b4cada0b8f653bc59cdfe"
  },
  {
    "url": "assets/css/0.styles.13ae735f.css",
    "revision": "d0a3c7f91618630aa8863ef08d908640"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e325241a.js",
    "revision": "2e3f5fb6f91241cdf5f3180e7138fd87"
  },
  {
    "url": "assets/js/11.4e266160.js",
    "revision": "e743949e46f03a4eb782011d1679e2b5"
  },
  {
    "url": "assets/js/12.70df8e29.js",
    "revision": "e2d6021c3ffa3dbacd20e55cca6d6ffd"
  },
  {
    "url": "assets/js/13.dbac2e1f.js",
    "revision": "662955dc73a3c7999da05d8a7c1ef90d"
  },
  {
    "url": "assets/js/14.f07db056.js",
    "revision": "dbc7376d6fd96559d14cc608281eb65d"
  },
  {
    "url": "assets/js/15.c05c8b47.js",
    "revision": "c33f9cfe42b96548d2a66c899319a177"
  },
  {
    "url": "assets/js/16.ae2d6c0c.js",
    "revision": "4832bac121173ec3104970840233819e"
  },
  {
    "url": "assets/js/17.423a2e12.js",
    "revision": "f5f2eea1f64bc10ab44cffb634819f90"
  },
  {
    "url": "assets/js/18.2620de45.js",
    "revision": "f5533ce5b1a49c6ffe1f72db44357cfe"
  },
  {
    "url": "assets/js/19.b54a12ea.js",
    "revision": "bb037feb727e27e6812c69e56a934e61"
  },
  {
    "url": "assets/js/20.b3b00c97.js",
    "revision": "b3d14dece913b8ac94ca1ea2bf4fe835"
  },
  {
    "url": "assets/js/21.7c044e9c.js",
    "revision": "53f76cfa124c7fa163c1cce0af65f97b"
  },
  {
    "url": "assets/js/22.6eaf475c.js",
    "revision": "490cc9ad32904aba48021e7943885ca8"
  },
  {
    "url": "assets/js/23.c237c751.js",
    "revision": "84cc93a8f2b7de44a3c6733e7c644640"
  },
  {
    "url": "assets/js/24.2f8649f5.js",
    "revision": "4e0c30aa8629cdde166a169c923f9132"
  },
  {
    "url": "assets/js/25.f1e09901.js",
    "revision": "6cfe98734213cbb6bba05a0a9cb9eefc"
  },
  {
    "url": "assets/js/26.ae7963c3.js",
    "revision": "52fdfb9fd93a8c3b28e73001ed6eb919"
  },
  {
    "url": "assets/js/27.39108dbc.js",
    "revision": "6bba1850a67f8a1dbb73ea007afaa4bd"
  },
  {
    "url": "assets/js/28.b772f662.js",
    "revision": "65c2d4877d36004054f888cada2b88ad"
  },
  {
    "url": "assets/js/4.43da1b5c.js",
    "revision": "f631827b5c7fae33486887b82799e47d"
  },
  {
    "url": "assets/js/5.32b2487b.js",
    "revision": "65432ba2aa6d62525f43d363361d2780"
  },
  {
    "url": "assets/js/6.8e706eb9.js",
    "revision": "ccd398f22fae1956ed9927e5c326ea70"
  },
  {
    "url": "assets/js/7.8be8bc45.js",
    "revision": "6fad5a33167cca3b7ab588e390883094"
  },
  {
    "url": "assets/js/8.01a87a58.js",
    "revision": "c7ce92219b697e01eea08ced2b0b614d"
  },
  {
    "url": "assets/js/9.f2518962.js",
    "revision": "65e9cb08c276c296bb8322467d416148"
  },
  {
    "url": "assets/js/app.8e366dc6.js",
    "revision": "4cc61e539c3fc713b85301ef7fbea106"
  },
  {
    "url": "assets/js/vendors~docsearch.7ef51de9.js",
    "revision": "d076a4b80ddf65768b052f205a82c491"
  },
  {
    "url": "assets/js/vendors~notification.bf0fb2f0.js",
    "revision": "c9e67c847f17e840cd7a7c80cca7caf7"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "432588ce593ef44106241bff4598ea58"
  },
  {
    "url": "logo.png",
    "revision": "736ab2ad735e2b92e0b74ba0ca36ca7a"
  },
  {
    "url": "logo.svg",
    "revision": "193a730d0b1344fdbbbcd2c9cd733edc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
