// noinspection JSUnusedGlobalSymbols

/**
 * Adds site which should be known by this script.
 * Can be left empty.
 */
function lgm_addKnownSites() {
    gmAddSite("video", "(|.+?\.)dailymotion\..+?", ".*");
    gmAddSite("photos", "(|.+?\.)flickr\..+?", ".*");
    gmAddSite("/p/", "(|.+?\.)instagram\..+?", ".*");
    gmAddSite("watch", "(|.+?\.)metacafe\..+?", ".*");
    gmAddSite("video", "(|.+?\.)ok\.ru.+?", ".*");
    gmAddSite("pin", "(|.+?\.)pinterest\..+?", ".*");
    gmAddSite("video", "(|.+?\.)tiktok\..+?", ".*");
    gmAddSite("post|image", "(|.+?\.)tumblr\..+?", ".*");
    gmAddSite("post|image", "(|.+?\.)tumbral\..+?", ".*");
    gmAddSite("watch?", "(|.+?\.)youtube\..+?", ".*");
    gmAddSite("10", "devzone\\..+?\\.(net|eu)", "/test/gmonkey/.*");
}

/**
 * Adds CSS-Styles for this script.
 * Can be left empty.
 *
 * @return {boolean} always true
 */
function lgm_addStyles() {
    GM_addStyle(CSS_STYLE);
    return true;
}

/**
 * Adds HTML-Objects for this script.
 * Can be left empty.
 */
function lgm_addControls() {
    lgmAddControlsGrabLinks();
}

/**
 * The first action which should be excecuted in this script.
 * Can be left empty.
 *
 * @return {boolean} always true
 */
function lgm_addInitAction() {
    return true;
}

gmInitEventHandler();
