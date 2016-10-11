define(['./views/index', './model/model'], function(headerView, headerModel){
	var headerModule = {
		moduleId: 'headerModule',
		view: headerView,
		model: headerModel,
		$el: '#headerModule',
		init: function(sandbox){

			new this.view({el: this.$el, model: new this.model(), sb: sandbox});
		}
	}
	return headerModule;
});