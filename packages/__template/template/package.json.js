{
  "name": "undefinedcollect-up",
  "version": "0.0.0",
  "publishConfig": {
    "access": "public",
    "main": "lib",
    "types": "types",
    "module": "es"
  },
  "author": "余聪 <yucong.cuttle@bytedance.com>",
  "description": "Collect update for testing",
  "main": "src",
  "files": [
    "src"
  ],
  "scripts": {
    "test": "undefined/run test",
    "packlimit": "undefined/run packlimit",
    "dev": "npm run build -- --watch",
    "postpublish": "undefined/run pkgxo --reset",
    "version": "npm test && npm run packlimit"
  },
  "dependencies": {},
  "keywords": [
    "余聪",
    "collect-up"
  ],
  "repository": {
    "type": "git",
    "url": "git+null",
    "directory": "packages/collect-up"
  }
}