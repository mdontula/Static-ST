define(['jquery', 
  'underscore', 
  'backbone',
  'text!../templates/headertemplate.html'], function($, _, Backbone, headertemplate){
	var HeaderView = Backbone.View.extend({
		template: headertemplate,
		initialize: function(){
			console.log(this);
			this.render();
		},
		render: function(){
		  var template = _.template(this.template);
		  $(this.el).html(template(this.model.toJSON()));
		}
	});
	
	return HeaderView;
});