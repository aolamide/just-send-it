if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let o={};const t=e=>n(e,d),l={module:{uri:d},exports:o,require:t};i[d]=Promise.all(s.map((e=>l[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BB4EewoK.js",revision:null},{url:"assets/index-C9mvemUr.css",revision:null},{url:"index.html",revision:"f9db1b43ee4445fe8117ab68f4fa9342"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"pwa-64x64.png",revision:"6897be6de2d1a38d962f3f31d098aac4"},{url:"pwa-192x192.png",revision:"d87cbe1026a49d1212f18f189f396067"},{url:"pwa-512x512.png",revision:"9801e1852c382cfe41d14896a863914e"},{url:"maskable-icon-512x512.png",revision:"6ee5c542e1daa571c387486500e3a50f"},{url:"manifest.webmanifest",revision:"d7df954f8db34d001eced2d8885c4b40"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));