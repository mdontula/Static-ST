define(['./views/index', './model/model'], function(indexView, indexModel){
	var indexModule = {
		moduleId: 'indexModule',
		view: indexView,
		model: indexModel,
		$el: $('#indexModuleContainer'),
		init: function(sandbox){

			new this.view({el: this.$el, model: new this.model(), sb: sandbox});
		}
	}
	return indexModule;
});