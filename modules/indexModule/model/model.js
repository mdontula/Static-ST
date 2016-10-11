define(['jquery', 'underscore', 'backbone','text!../templates/indextemplate.html'], function($, _, Backbone, indextemplate){
	var MyModel = Backbone.Model.extend({
	  defaults: {
	    name: 'Mahesh Dontula',
	    age: 28
	  },

	  initialize: function(){
	    alert("Welcome to this world");
	  }

	});

	return MyModel;
});