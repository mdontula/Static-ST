require.config({
	baseUrl: './',	
	paths: {
		jQuery: 'lib/jquery',
		underscore: 'lib/underscorejs',
		backbone: 'lib/backbone',
		bootstrap: 'lib/bootstrap.min',
		text: 'lib/text',
		API: 'api/api2',
		sandbox: 'api/sandbox',
		app: 'app/app',
		modulesInit: 'modules/modulesInit'
	},
	shim:{
		'API':{
			deps:['jQuery', 'modules/modules']
		}
	}

});
require(['modulesInit', 'API'], function(modulesInit, API){
	console.log(API);

});