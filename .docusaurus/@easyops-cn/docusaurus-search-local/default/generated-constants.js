import lunr from "/home/ie12/文档/GitHub/ie12sBlog.Pages/node_modules/lunr/lunr.js";
require("/home/ie12/文档/GitHub/ie12sBlog.Pages/node_modules/lunr-languages/lunr.stemmer.support.js")(lunr);
require("/home/ie12/文档/GitHub/ie12sBlog.Pages/node_modules/@easyops-cn/docusaurus-search-local/dist/client/shared/lunrLanguageZh.js").lunrLanguageZh(lunr);
require("/home/ie12/文档/GitHub/ie12sBlog.Pages/node_modules/lunr-languages/lunr.multi.js")(lunr);
export const removeDefaultStopWordFilter = [];
export const language = ["en","zh"];
export const searchIndexUrl = "search-index{dir}.json?_=f8ef1cbd";
export const searchResultLimits = 8;
export const fuzzyMatchingDistance = 1;