// @grant           unsafeWindow
// @grant           GM_addStyle
// @grant           GM.addStyle
// @grant           GM_getResourceText
// @grant           GM.getResourceText
// @include         http://gmonkey.*.*/test/*
// @include         http://devzone.*.*/test/gm/*
// @include         /http(|s)\://(|.+?\.)dailymotion\..+?/.*/
// @include         /http(|s)\://(|.+?\.)flickr\..+?/.*/
// @include         /http(|s)\://(|.+?\.)instagram\..+?/.*/
// @include         /http(|s)\://(|.+?\.)metacafe\..+?/.*/
// @include         /http(|s)\://(|.+?\.)ok\.ru.+?/.*/
// @include         /http(|s)\://(|.+?\.)pinterest\..+?/.*/
// @include         /http(|s)\://(|.+?\.)tiktok\..+?/.*/
// @include         /http(|s)\://(|.+?\.)tumblr\..+?/.*/
// @include         /http(|s)\://(|.+?\.)tumbral\..+?/.*/
// @include         /http(|s)\://(|.+?\.)youtube\..+?/.*/
// ==/UserScript==

/*
 Changes:
 2021-06-19
 - update syntax, remove inspection failures
 - add jsdoc

 2021-06-19
 - add wide/small handling of container
 - add result line selection
 - optimize link caption generation

 2021-06-03
 - switch to different IDE
 - clean code

 2014-05-28
 - some layout fixes
 - overlays the yt header

 2013-03-29
 - the first 2.x release
 - removing JQuery from script
 - new color layout
 - now search through link and link description / caption
 - optional disable new search and search only by url

 2013-02-20
 - Detecting clipboard support (disabling on new browsers)

 2011-12-27
 - Version Number changed
 - Added Copy to Clipboard Support (if enabled)

 2011-12-20
 - Added a 'SELECT ALL' Button
 - Search result can be displayed as plain text or linked text

 2011-02-06
 - Added JSDoc / Code cleaning
 - Code Testing function
 - Layout update

 2011-01-22
 - Layout update

 2010-09-08
 - Don't start search, if it's a known site
 - Layout update

 2010-08-19
 - Layout update
 - Set automatic filter on favorite sites
 - Many Bugfixes

 2010-07-24
 - Initial Release
 */
