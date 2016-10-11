define(['./indexModule/module', './headerModule/module'], function(index,header){
		APToday.ModuleData = {
			indexModule: index,
			headerModule: header
		};

		return APToday;
});