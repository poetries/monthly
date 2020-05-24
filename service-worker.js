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
    "revision": "ccc3b4e91338555f542adafb3b969807"
  },
  {
    "url": "articles/2019/10.html",
    "revision": "bd19eef62cfdcf20a5c4a758e76e28e9"
  },
  {
    "url": "articles/2019/11.html",
    "revision": "3b2be9656ae4c2d26a7f1e2d11defec3"
  },
  {
    "url": "articles/2019/12.html",
    "revision": "00d027ca8deed5c9473d73af9f6eaf63"
  },
  {
    "url": "articles/2020/01.html",
    "revision": "b3243045c371ae2a2a25d2464f77bcca"
  },
  {
    "url": "articles/2020/02.html",
    "revision": "3ede76ed3e23ee29f9fa075cf1019383"
  },
  {
    "url": "articles/2020/03.html",
    "revision": "d60f43bef0f718bf800b81e00a4e80fa"
  },
  {
    "url": "articles/2020/04.html",
    "revision": "e50cb77208e89475e2f9bac126e21951"
  },
  {
    "url": "articles/2020/05.html",
    "revision": "b40e4ab56644250c0d3d2b1603e65dfa"
  },
  {
    "url": "articles/index.html",
    "revision": "91ed684e392062c4c882fe01e97356d7"
  },
  {
    "url": "assets/css/0.styles.ce4f36a5.css",
    "revision": "049686356d0fc2fb9009bc766e9c23eb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4e647c39.js",
    "revision": "b8ea41664f4c44561d5d4ed708f252dc"
  },
  {
    "url": "assets/js/11.68fc1ba0.js",
    "revision": "0ce3601f07994cceb5b1ae2e04c05cc4"
  },
  {
    "url": "assets/js/12.abc5aaa8.js",
    "revision": "25c7df42dbf4332f5224e853109fecd6"
  },
  {
    "url": "assets/js/13.71834cc5.js",
    "revision": "7da537a34631dc4528559900a9c2a8b8"
  },
  {
    "url": "assets/js/14.9074b027.js",
    "revision": "1c79ebc2e8676c0586c60c10c06b11fb"
  },
  {
    "url": "assets/js/15.9154e67b.js",
    "revision": "5b2296b28f521a04aec0b16739574364"
  },
  {
    "url": "assets/js/16.03642e30.js",
    "revision": "c002ef2b7d76f14a44ac970fae0eeb1e"
  },
  {
    "url": "assets/js/17.8a84da91.js",
    "revision": "66cbab0afab4fd2938b339bd951e43fa"
  },
  {
    "url": "assets/js/18.8a0ee0e2.js",
    "revision": "f7bf30dfb62649c3c7fbda2869d7e496"
  },
  {
    "url": "assets/js/19.b473218d.js",
    "revision": "6d6b37cf6808c9011d1df608ec6237a1"
  },
  {
    "url": "assets/js/20.6c66d88c.js",
    "revision": "4e2d959ce64c30df8fdf23fb6e6847a1"
  },
  {
    "url": "assets/js/21.64321a6d.js",
    "revision": "4897d77376e7a284fb6e275010a4a7ae"
  },
  {
    "url": "assets/js/22.ff70fbb2.js",
    "revision": "42f19843f321c0f4e8a7c9cb26bd0a38"
  },
  {
    "url": "assets/js/23.79c0194f.js",
    "revision": "d822354c6689031e2d5a0aec9eb484de"
  },
  {
    "url": "assets/js/4.d69f0255.js",
    "revision": "a4791ee53b8fb7efaa25dca47e9a8eb1"
  },
  {
    "url": "assets/js/5.e32e1350.js",
    "revision": "1ae293c7dc98e41d0841e21a2666541e"
  },
  {
    "url": "assets/js/6.61767f73.js",
    "revision": "80e6cbe1b3b7a6f26d137ec4165e819c"
  },
  {
    "url": "assets/js/7.74fedac8.js",
    "revision": "5900a0c37c36e99e358de786d8703ba7"
  },
  {
    "url": "assets/js/8.bd84e126.js",
    "revision": "f5b6d3c74e257767de963f7dc7492e57"
  },
  {
    "url": "assets/js/9.57f96752.js",
    "revision": "b5d57049058c84e88c52db3171b785e6"
  },
  {
    "url": "assets/js/app.13a3a1a7.js",
    "revision": "83377c3941477f5c51244e845f9cb368"
  },
  {
    "url": "assets/js/vendors~docsearch.c19e8bed.js",
    "revision": "a6120acb688e1c03859a9806b65d36f2"
  },
  {
    "url": "assets/js/vendors~notification.a8e7bdca.js",
    "revision": "36cc4cf752d05ff556df44d8d09418cc"
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
    "revision": "5215bbf3b83aa65d2a8f74d81d8c5b17"
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
