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
    "revision": "d1db63e4aad9a0469a55b4039db1ce88"
  },
  {
    "url": "articles/2019/10.html",
    "revision": "a96657a36c391cdae0c6d8745ace8451"
  },
  {
    "url": "articles/2019/11.html",
    "revision": "6ddcea009dd95ffff616798fe3d8e9f7"
  },
  {
    "url": "articles/2019/12.html",
    "revision": "7be05647f1197af8ab31dfb6d8fdd2d9"
  },
  {
    "url": "articles/2020/01.html",
    "revision": "5815a32cc812aea8465877f24c613c06"
  },
  {
    "url": "articles/2020/02.html",
    "revision": "0a1975444f4e00a0cc89aac48683030b"
  },
  {
    "url": "articles/2020/03.html",
    "revision": "654d8d6c392742ca2ff423c7cf9b08c9"
  },
  {
    "url": "articles/2020/04.html",
    "revision": "fe6be1b067657b6eb0793a24e0a0cd8f"
  },
  {
    "url": "articles/2020/05.html",
    "revision": "b38257097d7ee910bdc7625a3b70ff73"
  },
  {
    "url": "articles/2020/08.html",
    "revision": "1c2831f89b064240996f49ac5e1d44b7"
  },
  {
    "url": "articles/2020/09.html",
    "revision": "f95e27464d53530b513b267cf24d6edb"
  },
  {
    "url": "articles/index.html",
    "revision": "1ae8df2fdb81b24bec87d2c9c27269d3"
  },
  {
    "url": "assets/css/0.styles.6d01e277.css",
    "revision": "71ce762f6f961a5934a8f24a30c56dd2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9721c0e8.js",
    "revision": "6423a58208b56ea5cbdb5f4bf2be954b"
  },
  {
    "url": "assets/js/11.6736872e.js",
    "revision": "eb85c238fd1ba5767b4899d900adb945"
  },
  {
    "url": "assets/js/12.425e2145.js",
    "revision": "4b4b233cfcd3b85c9ce8f0661b92afb7"
  },
  {
    "url": "assets/js/13.b70b27ba.js",
    "revision": "397f144ce81daa94902917e2c0445352"
  },
  {
    "url": "assets/js/14.6f7bb0d9.js",
    "revision": "26f3345cc537723e689cdd2dfc06c092"
  },
  {
    "url": "assets/js/15.a6d706d1.js",
    "revision": "7535cc2fe73764fcaa0e5577d22977e8"
  },
  {
    "url": "assets/js/16.7818327f.js",
    "revision": "279fc2bee06488cb719b59f89b2ca614"
  },
  {
    "url": "assets/js/17.76649d37.js",
    "revision": "432354c44985a51835c3d84dc45079c1"
  },
  {
    "url": "assets/js/18.6b4a5798.js",
    "revision": "a3aa4d73ba26e3067479a76589cdfb75"
  },
  {
    "url": "assets/js/19.bd669ddf.js",
    "revision": "d1bf10796ebb4203cd302f76fc262e42"
  },
  {
    "url": "assets/js/20.2c87c234.js",
    "revision": "6ec732381f6694f6986afce2aee8dbac"
  },
  {
    "url": "assets/js/21.71104f8a.js",
    "revision": "9df47771e310b5e1173478eece97f2f9"
  },
  {
    "url": "assets/js/22.f4aa9859.js",
    "revision": "9a591c700f404cfbb56765a7f2fafc6e"
  },
  {
    "url": "assets/js/23.ec230ab5.js",
    "revision": "af598ec20767f9091757b0f1041b8c26"
  },
  {
    "url": "assets/js/24.7d662a0f.js",
    "revision": "556e9f7792aef593b841bedb68f91cf7"
  },
  {
    "url": "assets/js/25.36612c4d.js",
    "revision": "00a0a21614aadedfd90da6b7a93e42bd"
  },
  {
    "url": "assets/js/4.317455e2.js",
    "revision": "d44a5fc6eb784a715e33b82b17122c62"
  },
  {
    "url": "assets/js/5.95a936e1.js",
    "revision": "32f264126d02fb39e5e3263a2b3da689"
  },
  {
    "url": "assets/js/6.0da51b60.js",
    "revision": "6d4152801a26f17373bcdd2775693179"
  },
  {
    "url": "assets/js/7.581ec39b.js",
    "revision": "6d461dd06e66bdec72e345be238b3745"
  },
  {
    "url": "assets/js/8.49389dd1.js",
    "revision": "dbcbc41bfac9d341e61357d5947f4d56"
  },
  {
    "url": "assets/js/9.1040b2c6.js",
    "revision": "50b63b265da2410a0192b2da392980f2"
  },
  {
    "url": "assets/js/app.347771fe.js",
    "revision": "8e4eabee367322a702f656a3bc377809"
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
    "revision": "705a043a762e7a3935294f866aca5de4"
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
