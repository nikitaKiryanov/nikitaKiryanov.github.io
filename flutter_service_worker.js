'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "71e2ff9e88d6d74a6e0ae9f0ae9a66af",
"index.html": "db3ca7cb973a31dcd26945dce245f504",
"/": "db3ca7cb973a31dcd26945dce245f504",
"main.dart.js": "6d9a943154cd412d551a40b5cb031fa9",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "55cf2c846d184ba260523b322bd02688",
".git/config": "7ff915abc659038900cc594dc7547045",
".git/objects/95/09d6c678497ce3247e32835efe47a0fc64ff6c": "850d37baedb1af67d8df83b00020887b",
".git/objects/92/c11219dfdfbdba41c13b059948179dbebb0140": "400cdada23fda7b6212b3d6c9acf4d2b",
".git/objects/92/3fcb8736ad40200728afec916321dce02c4234": "4d7d7710ea69faba6392f4f7c2603a6d",
".git/objects/92/f81a5620b9248b259e01b5edeb5e1ba9aa404c": "7694b8add0826fb3951e398dbf7de518",
".git/objects/0c/e78d48bf2510c49b5457ed5fad254c428b296f": "683c760573f9e39c3e4bc51822b6fe32",
".git/objects/0c/bef1052fa445fa349c6c5da93c662672e4389d": "d6107931a3aa9e28af3f171ca961d8c8",
".git/objects/3b/cf2bc1a6bd4d6baa9a4ce8eab4fc3967418a6b": "7c83f5dd3be61372716eabee2154b0f7",
".git/objects/6f/a2bc6532ab89f3e948d20bff3be63057e0116c": "e3ab074803da28890ed4bb1379824eeb",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3c/4713306d61f2bc6322b4ac06d2c708b11b0ea0": "8324e2e2d7404306588325f3281f58e5",
".git/objects/3c/d6be2750eb8f50ae46f27240399838c56a6583": "cb75272c3e8209af3164557f4470a0bd",
".git/objects/58/34dbd95cbddff3fe11bb759ea691865b9a26e1": "991f1f6fed908fe83bff032dfced54da",
".git/objects/94/2954deb76b4add8284d3d5c2ca3ebe02741918": "7b29b1b143837d355e1c8709e5c313f8",
".git/objects/0e/cdad6ea0108f85369366b8931320c66e07f458": "adcf7e98478ecb92d3482a611dd5e962",
".git/objects/0e/d1b375bcbda740d2d15cbcad226a6fd2738647": "046b3c80ae7886ed820118df8488e95b",
".git/objects/5a/b603963f719946f09261340e2225642f4988e7": "fd336a63b5c978d5583f77247e64b635",
".git/objects/a4/f160f085fd6007bd0fe4a4aeb7bfa3e4665a29": "2f479ab5ac8efdcc156efb5436c24ac0",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bb/57861f1773dd283e2bee97478e3d71bc1c52b3": "5b117edfec06bd95ab344093c081bbc3",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/bcfc781e02366639bdfc1902e7bd922cdf438d": "60ae0c0ac4df4181fbe735ea0a70ccda",
".git/objects/d0/3fe5077061a25f08d518b03694cd8dc43f223f": "72e11df140de065feecc66b63d0f207c",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/da/39e4040ac0944cd82c4548660987e732893b5b": "b64eb241f48c55df932788c5307fede4",
".git/objects/a5/ab6aa125cc25e550d90816b9d99aba028c473e": "b351eb17934cc9d6b835cab46f1e416b",
".git/objects/bd/07a7d7e021eff7af601890a104295dee43632f": "7a9e86e03de260cf5248e5f8c4b50e5c",
".git/objects/d1/7918c3cd383acb47e06cb931af05443226eeb2": "e14c662e5d199743e5dc9d14f3154f51",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/a543ddfa7976d524d3ae3557f55214213ac773": "499a58fc4518f3a2c9dc7346f01ac3f3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/6e687a5de605c5a901cfb70eab2eba25bb79dd": "29bc91281ba5dc17f33b31f678122f34",
".git/objects/ee/15133513c4b5524e7882ad9d93f012d57d6089": "ecd27df6252242649d13b7381918e050",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/f2/9bc5e054829d8cea3acb7da1b019bd37c9062c": "0c28156021f7d420b6e9f72f011e73e9",
".git/objects/f5/02b95d9417c487c529ec0fd1f0fba583aba50c": "caa6cde38901aabaadc2e19cbce3bb6a",
".git/objects/ca/b0e09457b41991a6e0dededabf579b5c030ed8": "d188f12695942447903933f5a6b152b3",
".git/objects/ed/97381d6a9666430ea19ce2f155943d93ccfe16": "e9c7b5496f2f0bc446cbba30d394cb0c",
".git/objects/ec/e4948aa42e0c833e6a476e28f4a2867df59b2d": "e4e9145e4b3ab135476d99008158be59",
".git/objects/ec/0d30503d7cbf1d7dcc26b12318a1fa6bb0bedc": "888f65b2ae7646044c9a76d641ab979e",
".git/objects/20/edd1087debc80062634dfc03e171fe1e30884c": "783b2633d272a54382a55f1251cd8176",
".git/objects/27/c15c994259537d574e1bff55b7f43b0840505f": "506ed64b9ce5f4f641773e077afde3b4",
".git/objects/42/5b56cb5796c76121154e4213fbbc7cb49c6707": "9a67de174cc03d3f7107320323825362",
".git/objects/1f/6d2d9c512d948c3aa4635ce89dab8d4fc62a7c": "2396421ba7d93a6fa1c2d4e0780105fe",
".git/objects/74/ef749b49dcae91635e5281e6d32357387b69cd": "1d013012a7cdb8b161419270d0d80abd",
".git/objects/1a/452ce9e1f81eb8496e4f75f3309c914601375f": "accea4a2c7770a62c55c904b160ee34c",
".git/objects/17/8447fc2bb67f27cfac27486a17ec9dc773bc6f": "838269a407993e59394546292f67ed81",
".git/objects/17/dcbf27c177c987464270d256a91c93ef102da8": "3dcb84d8d770ec9e522ba1062d268017",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8f/43c1f19f3bbbe838a23059724fb8ad7ea842bc": "fdc48273272c84b5f2e004102580db8d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/26/d871d7e8712990896b2bde5222ffdf96cc916d": "102e00234816c92276a928267431c814",
".git/objects/4d/40a31c1d15fe38658003d22a6b8da20a69b52d": "24d457052dee148c75d703128c0ca29d",
".git/objects/86/67a636473b7ce9206ac4290877c952b786f3b4": "857d8715027e0e7f3adea9e079df7948",
".git/objects/72/9af1960a1bb009ee6cadd5b6de11ba66d716fe": "b3021b15287f99eaaed55d3c8ca94bd4",
".git/objects/2a/22e00b4cba1d87952d15b5b2e26ad47542ce84": "5b14b46c5033e53f84f174319d3e6149",
".git/objects/2f/243c556aba1801517c30949d4e93959fdaa565": "62faa44bea5eae7801a8b84bddceb037",
".git/objects/88/2f01aa1580c482a20a09df463dda7814e9e981": "f26911f72e4cf9a0f1a1e56e4fb52168",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/d3a1271b971e1c3594b6e109c65f390f9cde94": "eb0775408c9814876627cce0a452390f",
".git/objects/6b/5fa99689aae53a57b40eab5dc867fd2e5a9c84": "ef078fef24d9039ce5dd626eed9d55e0",
".git/objects/07/03fa0cae010e0636f40d5bf6720c119df159e0": "bb2746c7e5294ae2a3c1e792a494c07d",
".git/objects/38/09649f569e56d92d0811e157f6b76c5f38fa37": "6ff822e6b9d2675fb96e1dafe8602077",
".git/objects/38/c8e42728c6a8bd1288ab41f3a0c5a6e15880de": "d323c3768ae95a1073b6afb4e73756f8",
".git/objects/5d/b59c54006fd43d532c3933f8feb73fbfc5c090": "134a1a33d8e32df99cd0a30b765dee6d",
".git/objects/5d/dc53ea4bf65f7894e9b865c0bacaec34c75006": "aa0fcde53414084fc982ae6a2e6ca0e2",
".git/objects/96/94c2758160cddd2c31860c69eabe032192b0c7": "ea4b4c46a9b535ef5de06f9f5fb23893",
".git/objects/54/0377e422223176d64ecf48e58809b57641d2cc": "01ec6fcc482789151bef2c06c75c4d78",
".git/objects/98/5e4fdfe3a0c0feed49a5c52bf47dd28b24ea8d": "637866f8892cc9c472e0b38fea9627f9",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5e/d6e523f429f3e952b0e5dcbd7c5dd104a52e67": "0db3d716b4edf552a17611824f37e397",
".git/objects/5b/dc3eb47148a47e1bbd7a8bfa2a192884581ba1": "dcdb695cd8c5038d76758bad2f797a1e",
".git/objects/08/e9b37d0620926b92b5a8f51ed332c5df892868": "e07e1076165f10d402539d62eeeacdd0",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/6c/89cbb4a23e7f22a6c6aea673ccf8e84743976c": "8321c22c3e280d4bdfff94305b565c93",
".git/objects/52/e9cd5f2199771ac7df587232ab4fde39502aa4": "5c4f9ff236c9f40ee7c502d821d60b50",
".git/objects/0f/feaa841e9c5d809cf4222304da29776bb0371c": "32e293abd85f1f1091cd6a1008e5adb1",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/a7/2e1750008a2faa272da566d896fe1dd45ae95c": "53c7bc3bb71401e51765ca575ee6ff86",
".git/objects/b8/11f1502efcdb81876b806645bc87c31d4c487c": "c95b6d31953199c9ac5c43fea6adb61a",
".git/objects/dc/6eac94a4390df60b71637d7add549642d9f298": "cdae0942ed17d0e15251799b3105783b",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/af/eec3135540d7da3ba9f268d5e7e8c4493f3c38": "d7e32a596a40406c280d70990dfb4f99",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/de/cacf75895bddb4ea456ff4d31cab8b6b9c19fb": "b7acf22c031d516c3965caf09f402321",
".git/objects/b0/b679235fe61f9071f384d88024677ac44d3518": "59dc5f1093354410d7f3c8026f71eb5b",
".git/objects/b0/c4c3ccd2bea2be526a38534aca70eb4ee622a6": "81b5278d1a3938fb41149f19a33866d4",
".git/objects/a6/49f700917299cc99a60b67a75d85bfa67807f9": "002740f1d0feed5bb306d440914d62a1",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3f29c5fb4d69764694cea4bf4158914a8a98e3": "4028615d2022e98e63bb7025e5004222",
".git/objects/c4/96ee17dc9527b111568c5b6f314cf05296fa63": "8a6ce532d57ba870d60ebf42f7b7e190",
".git/objects/cd/a03594392eba3bc646d0c32670fe10699ab6d1": "ae22ee542da203b4110ee49ab71670e0",
".git/objects/e6/c766bb43fc6e42d0b56f7635bc0b49ecf7aede": "46dbaded375f572e3fa036243c00a9c2",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f0/f3e771798d1fae12bd7afc305bd6cec8e81d55": "2b0637378ccdaa2a68263eecebb29d3f",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/f6/0f2d1f0379448c4f55f4e6c524c6370957fdcd": "ba6796b75e3642d61fb221be3330ca63",
".git/objects/cb/c334b2f74df3e01a19dac959fc497581921d41": "f0cad28cc5c4221b0664b67b008ea250",
".git/objects/f8/3f5bbf711fd3a2a8349916b82c88cd46a6b413": "6d3f81125c2495d91435e2fdd3d1557f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/4f/4472b7c4cca6a8c748171f669a9e8e2f35f0fc": "c26897007cb9b2b47509a8450b0cca2f",
".git/objects/8d/b7ebd31a16596fb1abc755967124e9102c95c3": "8eab03f3b4fb63c4257c7bf490713747",
".git/objects/1c/37a67f557aa221f44be4a5a3829a20396e3ecb": "9a266c1623c5cec6f76d3b69b7f5d119",
".git/objects/40/728c94456109d27234ffe1c950fb359c61af7d": "684580d76c3443463924fb723e7c212b",
".git/objects/2e/016d5cffb851f4af865cfd29afefe5607f483f": "c0a3bf222cb4774a37cd37ffca7a9cca",
".git/objects/13/51f782cdcd53e953c5cbcac0495d435506e761": "c0b316d318a0bea90344675746cacd07",
".git/objects/14/bbb3d900dd56c024cc1b4d4a48bfdd89afd951": "118babf6b33483cd7fc13de49e616248",
".git/objects/22/2198e5b658e52b1e8392fa85f81b5b0ad89699": "e183403d82efb1b3e5005d5a49e3526b",
".git/objects/22/2bc809ad3f4c4ab05c42f3af96e659464ba9b5": "601e10a52b91241a08bfc7887d49a8f4",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e88e8d7b7d9b9b7a08bcec0cb2270edb",
".git/logs/refs/heads/main": "e88e8d7b7d9b9b7a08bcec0cb2270edb",
".git/logs/refs/remotes/origin/main": "1b957e2ba9bed4536becefd87ed99ae5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "853d1307de7f081e9feebb1aa516893a",
".git/refs/remotes/origin/main": "853d1307de7f081e9feebb1aa516893a",
".git/index": "e32680d3892e4fd886c64efa5592ee0d",
".git/COMMIT_EDITMSG": "c5e1670a76fa30eb5c8cb1969cb58536",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "3704feaf39b502f94bf3739020e54bee",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "4429175595ae26157809fe41bae6291a",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
