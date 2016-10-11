define(['jQuery', 'sandbox'], function($, sandbox){
	var moduleData = APToday.ModuleData;
	APToday.Core = {
		start: function(moduleId) {
			console.log("Starting " + moduleId);
			if(moduleData[moduleId]){
				moduleData[moduleId].init(new APToday.SandBox.sandbox(this));
			}
		    //moduleData[moduleId].instance.create();
        },
		stop: function(moduleId) {
			var data = moduleData[moduleId];
			if (data.instance) {
				data.instance.destroy();
				data.instance = null;
			}
		},
		startAll: function() {
			for (var moduleId in moduleData) {
				if (moduleData.hasOwnProperty(moduleId)) {
					this.start(moduleId);
				}
			}
		},
		stopAll: function() {
			for (var moduleId in moduleData) {
				if (moduleData.hasOwnProperty(moduleId)) {
					this.stop(moduleId);
				}
			}
		},
		publish: function(message, args) {
			try {
					var i;
					for (i = 0; i < cache[message].length; i++) {
						if (typeof args === "undefined") { args = []; }
						if (!(args instanceof Array)) {
							args = [args];
						}
						cache[message][i].apply(this, args);
					};
			} catch (err) {
				console.log(err);
			}
		},
		subscribe: function(message, callback) {
			if (!cache[message]) {
				cache[message] = [];
			}
			cache[message].push(callback);
			return [message, callback];
		},
		unsubscribe: function(handle) {
			var t = handle[0];
			base.each(cache[t], function(idx) {
				if (this == handle[1]) {
					cache[t].splice(idx, 1);
				}
			});
		}
	};
	return APToday;

});