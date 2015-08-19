window.appConfig = window.appConfig || {};

/**
 * HTML 檔案目錄
 * @type {String}
 */
window.appConfig.rootPath			= '';

/**
 * STATIC 檔案目錄
 * @type {String}
 */
window.appConfig.staticPath			= '';

/**
 * 專案名稱
 * @type {Boolean}
 */
window.appConfig.project				= '';

/**
 * HTML 檔案目錄
 * @type {String}
 */
window.appConfig.projectRootPath		= window.appConfig.rootPath+window.appConfig.project;

/**
 * HTML 檔案目錄
 * @type {String}
 */
window.appConfig.projectStaticPath	= window.appConfig.staticPath+window.appConfig.project;

/**
 * 是否開啟DEBUG模式
 * @type {Boolean}
 */
window.appConfig.debugMode			= false;
