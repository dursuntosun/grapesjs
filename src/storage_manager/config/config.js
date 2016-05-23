define(function () {

	return {
		// Enable/Disable autosaving
		autosave: 1,

		// Indicates which storage to use. Available: local | remote
		storageType: 'local',

		// If autosave enabled, indicates how many steps (general changes to structure)
		// need to be done before save. Useful with remoteStorage to reduce remote calls
		stepsBeforeSave: 1,

		//Enable/Disable components model (JSON format)
		storeComponents: true,

		//Enable/Disable styles model (JSON format)
		storeStyles: true,

		//Enable/Disable saving HTML template
		storeHtml: true,

		//Enable/Disable saving HTML template
		storeCss: true,

		// ONLY FOR LOCAL STORAGE
		// If enabled, checks if browser supports Local Storage
		checkLocal: true,

		// ONLY FOR REMOTE STORAGE
		// Custom params that should be passed with each store/load request
		params: {},

		// Endpoint where to save all stuff
		urlStore: '',

		// Endpoint where to fetch data
		urlLoad: '',

		//Callback before request
		beforeSend: function(jqXHR, settings){},

		//Callback after request
		onComplete: function(jqXHR, status){},

	};
});