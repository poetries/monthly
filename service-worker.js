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
    "revision": "eba85ac378211f8c51a7224c9787cf97"
  },
  {
    "url": "articles/2019/10.html",
    "revision": "8aecf2c05ce81121b5f0a46f283bd1bd"
  },
  {
    "url": "articles/2019/11.html",
    "revision": "9b380eeeb755de740834b51c1cfe479c"
  },
  {
    "url": "articles/2019/12.html",
    "revision": "03935e0ef9f15e936487377239a2754e"
  },
  {
    "url": "articles/2020/01.html",
    "revision": "ec4bc7614a6ca4df7a3a3e8200a5ac61"
  },
  {
    "url": "articles/2020/02.html",
    "revision": "854d6761e197ca226063ce011b34575f"
  },
  {
    "url": "articles/2020/03.html",
    "revision": "bd19b55252516b4039552dec22926203"
  },
  {
    "url": "articles/2020/04.html",
    "revision": "349247bd582097812602c248e24bf411"
  },
  {
    "url": "articles/2020/05.html",
    "revision": "675447aa49e5b2e3904d8e3310f4d965"
  },
  {
    "url": "articles/2020/08.html",
    "revision": "f8122f6ef36f8d3c39d9acb2c0802c64"
  },
  {
    "url": "articles/index.html",
    "revision": "aadf8d8773d6797770ce69302745aebc"
  },
  {
    "url": "assets/css/0.styles.ab1107ad.css",
    "revision": "b9d4de1a248b1207b2319243a0102a6d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4249a9e6.js",
    "revision": "114973fbc6194835930db7ae86e37c62"
  },
  {
    "url": "assets/js/11.02e3af1f.js",
    "revision": "eb85c238fd1ba5767b4899d900adb945"
  },
  {
    "url": "assets/js/12.8ff3cb42.js",
    "revision": "4b4b233cfcd3b85c9ce8f0661b92afb7"
  },
  {
    "url": "assets/js/13.6c692c62.js",
    "revision": "397f144ce81daa94902917e2c0445352"
  },
  {
    "url": "assets/js/14.a8b4ed39.js",
    "revision": "822105630e42eecdba1fa41639dd0168"
  },
  {
    "url": "assets/js/15.ce15dbb0.js",
    "revision": "e2167ec1869889f0eb77534f32dd6d56"
  },
  {
    "url": "assets/js/16.36954d9d.js",
    "revision": "8464e13ff53c0d3a6171db71e733fdcb"
  },
  {
    "url": "assets/js/17.2101bf0f.js",
    "revision": "1bf5b632fb5f9fa10cdfb939757b9c2e"
  },
  {
    "url": "assets/js/18.8f51047e.js",
    "revision": "a3aa4d73ba26e3067479a76589cdfb75"
  },
  {
    "url": "assets/js/19.7374e55e.js",
    "revision": "d1bf10796ebb4203cd302f76fc262e42"
  },
  {
    "url": "assets/js/20.a0c02cf8.js",
    "revision": "6ec732381f6694f6986afce2aee8dbac"
  },
  {
    "url": "assets/js/21.f9b88843.js",
    "revision": "9df47771e310b5e1173478eece97f2f9"
  },
  {
    "url": "assets/js/22.c0befc10.js",
    "revision": "4072b2810f09d183e11348b7e8ac10af"
  },
  {
    "url": "assets/js/23.0ca4533f.js",
    "revision": "578af87d8d09ee058fb0d0e6a606ccaf"
  },
  {
    "url": "assets/js/24.93ef38ac.js",
    "revision": "74873080d2abd08f3bde2c5436f13322"
  },
  {
    "url": "assets/js/4.5e76ac34.js",
    "revision": "d3764b60805ec898fe7a8f62201b6b7d"
  },
  {
    "url": "assets/js/5.34427f28.js",
    "revision": "77314d37c5adbfe1225084f6d6276565"
  },
  {
    "url": "assets/js/6.6252b9c3.js",
    "revision": "c3f89ff41552ec85075b03db18b9f212"
  },
  {
    "url": "assets/js/7.6223ad0e.js",
    "revision": "6d461dd06e66bdec72e345be238b3745"
  },
  {
    "url": "assets/js/8.c29ab9f5.js",
    "revision": "e6013789cd2e6e886da981e55d28ddfd"
  },
  {
    "url": "assets/js/9.abc3d019.js",
    "revision": "50b63b265da2410a0192b2da392980f2"
  },
  {
    "url": "assets/js/app.89e24e27.js",
    "revision": "c2aea4e528e444063e1ddf793e4509d9"
  },
  {
    "url": "assets/js/vendors~docsearch.d08cb2ea.js",
    "revision": "d1d506cf6870c12df18e5974ea1a178a"
  },
  {
    "url": "assets/js/vendors~notification.d315aa2b.js",
    "revision": "b8a381a3ca87e0a05fad15c60fefbca7"
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
    "revision": "2ba8cb30b48e4681ce7a6ed22565fe97"
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
