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
    "url": "index.html",
    "revision": "0adb6435fcae0228fa377e205caed98a"
  },
  {
    "url": "polyfills/core-js.a4845415c7b63c32d40b379aba69aef2.js",
    "revision": "f10930295e594d9f97ff2386f7e3bd83"
  },
  {
    "url": "polyfills/custom-elements-es5-adapter.84b300ee818dce8b351c7cc7c100bcf7.js",
    "revision": "cff507bc95ad1d6bf1a415cc9c8852b0"
  },
  {
    "url": "polyfills/dynamic-import.991be47e17117abb5eb15f5254ad3869.js",
    "revision": "08b86a7f56c6f0d65265654299b16d74"
  },
  {
    "url": "polyfills/fetch.a1ad5fb96dc0cb61b9454244c9bd7fe6.js",
    "revision": "9f292b53ba5b57783d407eb5a61aba83"
  },
  {
    "url": "polyfills/regenerator-runtime.95dc763885f05111a2f88232a2d0cf2d.js",
    "revision": "2b97956e0416f86ebda5ed3d4a75a127"
  },
  {
    "url": "polyfills/systemjs.1ab8cf92e6a7376cdf9bfc400db6ca13.js",
    "revision": "24c1cb7b35e05d8bdf471e737ba7ab21"
  },
  {
    "url": "polyfills/webcomponents.f2956532e796a677ef87a9cb17f5f9fc.js",
    "revision": "939ef49522c9d6762c23f0a3fb10e87b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index.html"));
