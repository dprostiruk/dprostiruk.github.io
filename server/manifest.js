const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.png","images/IMG_6500.JPG","images/Spinner-1s-200px.gif","images/favicon.ico","images/photo_2023-06-10_10-01-40.jpg"]),
	mimeTypes: {".png":"image/png",".JPG":"image/jpeg",".gif":"image/gif",".ico":"image/vnd.microsoft.icon",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.1b032124.js","app":"_app/immutable/entry/app.6a0bec8b.js","imports":["_app/immutable/entry/start.1b032124.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/singletons.49fcf4c8.js","_app/immutable/entry/app.6a0bec8b.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.faba9f8e.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-4a50d451.js')),
			__memo(() => import('./chunks/1-0a5b55bd.js')),
			__memo(() => import('./chunks/4-c00fec26.js'))
		],
		routes: [
			{
				id: "/comic",
				pattern: /^\/comic\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set(["/","/about/","/contact/","/photos/","/portfolio/"]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
