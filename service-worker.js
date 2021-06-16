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
    "url": "19-21总结.html",
    "revision": "c4ae6872ac519ca11a8732f591bd801a"
  },
  {
    "url": "404.html",
    "revision": "9898007e42e3b7cd442cf52830cbddfe"
  },
  {
    "url": "assets/css/0.styles.3f503044.css",
    "revision": "e4f3d15073976f7b6b5a8fda25edbcbf"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.874c21b1.js",
    "revision": "68c32dd9ab602496c2cc83cce2b757e2"
  },
  {
    "url": "assets/js/11.06584f03.js",
    "revision": "bfaddcf35dbfab095d93a500426b3826"
  },
  {
    "url": "assets/js/12.a5c8c05f.js",
    "revision": "9fbd16cd50464e4c1c45854705a82203"
  },
  {
    "url": "assets/js/13.1b507851.js",
    "revision": "b82c7ad6977442acb370d45c81399a3c"
  },
  {
    "url": "assets/js/14.c27a0ed9.js",
    "revision": "cbb7c9ed85257aaa3fcee0aa9d9ccdbe"
  },
  {
    "url": "assets/js/15.fae66cfd.js",
    "revision": "73f0efb6aba67e0d0d109ba126bfb47b"
  },
  {
    "url": "assets/js/16.8b83fc5b.js",
    "revision": "fa225c0824d1873613d709b479b10a73"
  },
  {
    "url": "assets/js/17.eafc6cc3.js",
    "revision": "eea01898491da2c033f57961b1447ca0"
  },
  {
    "url": "assets/js/18.f7675d14.js",
    "revision": "f8e27995f92b6d690f0f6dd2d5981311"
  },
  {
    "url": "assets/js/19.aa19b35f.js",
    "revision": "17ce1ea55d0b82079bf988d1d6aa1bfa"
  },
  {
    "url": "assets/js/2.208295da.js",
    "revision": "e7ebfa878629cd3ea6fe07ac4d12d1ea"
  },
  {
    "url": "assets/js/20.af217273.js",
    "revision": "edbecf177b8702d618fb1b57325cae67"
  },
  {
    "url": "assets/js/21.8ddc378c.js",
    "revision": "05f39b79582e5771808d374aea239ef7"
  },
  {
    "url": "assets/js/22.36e77ad8.js",
    "revision": "addaf0c8742af1dbdc7a25f237186a05"
  },
  {
    "url": "assets/js/23.5a61c462.js",
    "revision": "83954b9623d5c21872a5f5cb88559186"
  },
  {
    "url": "assets/js/24.582c1b00.js",
    "revision": "a01d8575a3c386a7bf2717a5b78b19df"
  },
  {
    "url": "assets/js/25.eda3379a.js",
    "revision": "10129cd84bfe0773062c02e97bc475d0"
  },
  {
    "url": "assets/js/26.8e4cbbe9.js",
    "revision": "59fa2b951f4cc66afb4d5ae1ab8e27e4"
  },
  {
    "url": "assets/js/27.03cb3422.js",
    "revision": "c37aa562922e78e75ee0f46d6b11c3f0"
  },
  {
    "url": "assets/js/28.645ce61e.js",
    "revision": "acb655cffa770bd5f87c73f68066beb7"
  },
  {
    "url": "assets/js/29.f897465a.js",
    "revision": "c5da910af7f568f741bcda9398b00213"
  },
  {
    "url": "assets/js/3.967895da.js",
    "revision": "7998e4b76181ac10bd1a4d4fc926bfb6"
  },
  {
    "url": "assets/js/30.d2934177.js",
    "revision": "7f5eb7bed64ffdcd63f130d7de56f726"
  },
  {
    "url": "assets/js/31.42258174.js",
    "revision": "77625207a489a2d2edae058b92d49a99"
  },
  {
    "url": "assets/js/32.f7b5e341.js",
    "revision": "c071500077b8e0573fa78e45543f323f"
  },
  {
    "url": "assets/js/33.362b0b71.js",
    "revision": "542dc53f8c0286d5c8d679f4b9ad5c2b"
  },
  {
    "url": "assets/js/34.91512baa.js",
    "revision": "00a7acda697da398b2847e7b706d8f3d"
  },
  {
    "url": "assets/js/35.e51fc052.js",
    "revision": "68162fe0d15b24b4013c6b2a3ce3aeb2"
  },
  {
    "url": "assets/js/36.41c20116.js",
    "revision": "8334996cdbfb8dda6b745b165e2fed65"
  },
  {
    "url": "assets/js/37.e90f6066.js",
    "revision": "2f1f9dc8b183ce7dd29d5ad37a876646"
  },
  {
    "url": "assets/js/38.3878636b.js",
    "revision": "a63e8c873e4ea38882c4fc2a68902404"
  },
  {
    "url": "assets/js/39.f310c7d2.js",
    "revision": "5f4bfc6f45f128cf40e275cd9d45c30b"
  },
  {
    "url": "assets/js/4.9f3812bd.js",
    "revision": "5e0c332c01a42fe33f8f8ffb56ead6f6"
  },
  {
    "url": "assets/js/40.c1e2ee49.js",
    "revision": "323668888101e2900c5214ae9f36957d"
  },
  {
    "url": "assets/js/41.cf733c7c.js",
    "revision": "ac8782847b2ae72e311874f1387da428"
  },
  {
    "url": "assets/js/42.ef868d9d.js",
    "revision": "4706850c1112c2a7ac0c9a6e25c131bc"
  },
  {
    "url": "assets/js/43.8478bfa6.js",
    "revision": "78521d8bf17f2fcd3cc6e1e69ce49327"
  },
  {
    "url": "assets/js/44.dd9a1d85.js",
    "revision": "1879615465276d3106ff8b819030a5bc"
  },
  {
    "url": "assets/js/45.d014f7a8.js",
    "revision": "bfe2fc14ce65e21dfe2201b8a42d52a1"
  },
  {
    "url": "assets/js/46.205be7a4.js",
    "revision": "6a1db0462e1e2d6898720143e6fcf491"
  },
  {
    "url": "assets/js/47.a942e446.js",
    "revision": "6f3625b34ce5ce994048ceb29ffcaae5"
  },
  {
    "url": "assets/js/48.f11dc1c7.js",
    "revision": "23eec78729ee7aa4801c8135d1e7c53e"
  },
  {
    "url": "assets/js/49.30f1d0d9.js",
    "revision": "ce883b0adac4c444486a70bc70558134"
  },
  {
    "url": "assets/js/5.b3cdef39.js",
    "revision": "42c48f9d40130067c47d6cfebf0d119a"
  },
  {
    "url": "assets/js/50.ad3da487.js",
    "revision": "28312b443f66a5e2ee21c74957bf101b"
  },
  {
    "url": "assets/js/51.6685e327.js",
    "revision": "af5de092e09bf754472e0fe64e316913"
  },
  {
    "url": "assets/js/52.6f6c68f4.js",
    "revision": "c0d755b0585042136a10b932d66dbca9"
  },
  {
    "url": "assets/js/53.4acba881.js",
    "revision": "822d46675ace1695544f6c7710ba4c75"
  },
  {
    "url": "assets/js/54.609dd144.js",
    "revision": "b486b5c1a2249cffd3f318dee871b488"
  },
  {
    "url": "assets/js/6.b8f3f640.js",
    "revision": "43c58875bbf0271097cb447459d66167"
  },
  {
    "url": "assets/js/7.2e8acf8c.js",
    "revision": "a826e9346f517014e30d4a122e9dea75"
  },
  {
    "url": "assets/js/8.cd73e5c7.js",
    "revision": "3e3f0a63044df17a6c86486e16d6270c"
  },
  {
    "url": "assets/js/9.ba0911e0.js",
    "revision": "38b3891cacf50cbc32a6b6e6e59b98dd"
  },
  {
    "url": "assets/js/app.da05fdbf.js",
    "revision": "becded78a26f0cc442516c57d17f9943"
  },
  {
    "url": "blog/《算法图解》笔记.html",
    "revision": "7019f9cc49bb32b8f0c34c40c0e79fc6"
  },
  {
    "url": "blog/antd 树形 table 组件.html",
    "revision": "4339c8942fe0692ebf4acb985fd71ff0"
  },
  {
    "url": "blog/dp.html",
    "revision": "a4666de6626078c3d570c3fad124e15c"
  },
  {
    "url": "blog/eslint + prettier.html",
    "revision": "6511a5412bcfca86a3ad0fc30fca855e"
  },
  {
    "url": "blog/jest.html",
    "revision": "bda508abac280db5a666da8f9079737f"
  },
  {
    "url": "blog/Mobx 扫盲.html",
    "revision": "1504559f3286792fe40179502b9e596b"
  },
  {
    "url": "blog/PWA.html",
    "revision": "1c27839bcd14fb1a4f1abebed043ffac"
  },
  {
    "url": "blog/React 扫盲.html",
    "revision": "6a19547dd898ab853f5c9f8d98e24e06"
  },
  {
    "url": "blog/react-query 笔记.html",
    "revision": "6c9c9037f953c44fa1bcb0043252f2a3"
  },
  {
    "url": "blog/recoil.html",
    "revision": "c8119e8dd14c6347ed52fcb4db915bf6"
  },
  {
    "url": "blog/redux-toolkit.html",
    "revision": "f12974a3917c27147df72917fc6db644"
  },
  {
    "url": "blog/RxJS 笔记.html",
    "revision": "0de8e256bf6bebe64084d25a476269e8"
  },
  {
    "url": "blog/Typescript 扫盲.html",
    "revision": "633d408382971b7859380aa8b9631ccc"
  },
  {
    "url": "blog/utility-types.html",
    "revision": "613c13b1ec92eebabc13ec045516f09c"
  },
  {
    "url": "blog/wsl.html",
    "revision": "9793bca75272d068c87ef3a54a6a5e6a"
  },
  {
    "url": "blog/书签.html",
    "revision": "b249d8006ee3865e94c32b1cab6c23ed"
  },
  {
    "url": "blog/刷面试题.html",
    "revision": "8aef2c1fab091d29f89041df178de53f"
  },
  {
    "url": "blog/各种小技巧.html",
    "revision": "4e9a1e1ba851391af76e6af331b2fb17"
  },
  {
    "url": "blog/性能优化.html",
    "revision": "34633474c657e06554abfe715c95304b"
  },
  {
    "url": "demo.html",
    "revision": "f572647a05efaa138fab24bae68c74a7"
  },
  {
    "url": "dp.html",
    "revision": "ce5a06697db4362a5d39f86e6e3d6917"
  },
  {
    "url": "golang.html",
    "revision": "6c74e4852ada5a118b939a90fe4bb8b0"
  },
  {
    "url": "image/devtools-manifest.png",
    "revision": "ba2812b1771a7e929e7f3ec9f234ab96"
  },
  {
    "url": "image/lighthouse-0.jpg",
    "revision": "38610f05df715550aa82c957fe71e444"
  },
  {
    "url": "image/lighthouse-1.png",
    "revision": "6c8b849a524aaa2b004182ef13d10f17"
  },
  {
    "url": "image/phases16.3.jpg",
    "revision": "8882a9d0c9f7cfc500c6e30705442d27"
  },
  {
    "url": "image/script.jpg",
    "revision": "39ad13e0a7e934f8778c8eda0a8c7d73"
  },
  {
    "url": "image/tree-table-1.gif",
    "revision": "d0de0634a5baf9da3eee4f0051cc3314"
  },
  {
    "url": "image/tree-table-2.gif",
    "revision": "06cec1403bdf7591429ef2dea468e2fe"
  },
  {
    "url": "image/valid.png",
    "revision": "a710d34dd1b3fd12392b258a5a5a3ac1"
  },
  {
    "url": "image/三次握手.png",
    "revision": "ab4c919da75ce8fdcfb66fce722000ef"
  },
  {
    "url": "image/交通.png",
    "revision": "38e9a487997d2eea979097fbc9e9e674"
  },
  {
    "url": "image/原因门槛.png",
    "revision": "b41d4f675e68959438f6c352fe278619"
  },
  {
    "url": "image/心态问题.png",
    "revision": "823990aff13db1c4068ed03e329df6fa"
  },
  {
    "url": "image/正则速查.png",
    "revision": "78ab1c6f3dd66d8c796b8b64b59b1a8d"
  },
  {
    "url": "index.html",
    "revision": "d52a232727a6587e326580f85ceff3e3"
  },
  {
    "url": "life/PR-笔记.html",
    "revision": "cd4e9f6826d4294e4afbd42d2015352f"
  },
  {
    "url": "life/乌合之众.html",
    "revision": "f26ae8622db6bb07a440f951324ccfd3"
  },
  {
    "url": "life/亲密关系.html",
    "revision": "68cb4272e2e4efdd40b7be7f576c24f6"
  },
  {
    "url": "life/传习录.html",
    "revision": "4bcbd33c851ec906157d86d7d9970765"
  },
  {
    "url": "life/最熟悉的陌生人.html",
    "revision": "6b8178796a0c69d26d54c03083bdd1a3"
  },
  {
    "url": "life/回忆录.html",
    "revision": "a0b6d61ecd979884afdcb6460af89dba"
  },
  {
    "url": "life/害羞与社交焦虑症.html",
    "revision": "5e98d806ce57c210518add5ad90daecb"
  },
  {
    "url": "life/幻想即现实.html",
    "revision": "4383f219cb63779ae7069b7b442b0c55"
  },
  {
    "url": "life/被讨厌的勇气.html",
    "revision": "87577208ca0dfa940ab75e3c83417f77"
  },
  {
    "url": "life/非暴力沟通.html",
    "revision": "2d4a68ac69d0c3591fadfc87762a2753"
  },
  {
    "url": "logo.jpg",
    "revision": "f689102d951cc152cde2d8a18d65b2f1"
  },
  {
    "url": "nestjs.html",
    "revision": "8e7b2a35421440ac884199dfd0a93f7b"
  },
  {
    "url": "nvc.html",
    "revision": "f14377b7d912105f8db1187505349eaf"
  },
  {
    "url": "ppt.html",
    "revision": "759774d12c4e6466b6efb2ac819ccced"
  },
  {
    "url": "resume.html",
    "revision": "b4b0ed2cb286c2b3e4690f9436b1e55e"
  },
  {
    "url": "shell.html",
    "revision": "5e5e0e061f2b755c05c358c76befa918"
  },
  {
    "url": "复习/css.html",
    "revision": "8604c02da9d12b2b26ec52dfab9ebb27"
  },
  {
    "url": "复习/js.html",
    "revision": "07ceac4bb690aee7bb0ba5be6b12b6c8"
  },
  {
    "url": "复习/ts.html",
    "revision": "d2d17a78f459cfc03bdc4e7349bd451b"
  },
  {
    "url": "复习/样式片段.html",
    "revision": "ea4ba85162373712708cccda015813d1"
  },
  {
    "url": "复习/网络基础.html",
    "revision": "8eaab6164bbd83d2994ba5f036e232d4"
  },
  {
    "url": "简历.html",
    "revision": "bc509421e41b5cc19efb0b8878b5f44f"
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
