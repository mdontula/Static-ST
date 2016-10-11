define(['jquery', 
  'underscore', 
  'backbone',
  'text!../templates/indextemplate.html'], function($, _, Backbone, indextemplate){
	var IndexView = Backbone.View.extend({
		template: indextemplate,
		initialize: function(){
			console.log(this);
			this.render();
		},
		render: function(){
		  var template = _.template(this.template);
		  $(this.el).html(template(this.model.toJSON()));
		}
	});
	
	return IndexView;
});