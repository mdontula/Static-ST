define(['jquery', 'underscore', 'backbone'], function($, _, Backbone){
	var HeaderModel = Backbone.Model.extend({
	  defaults: {
	    menuItem1: 'One',
	    menuItem2: 'Two',
	    menuItem3: 'Three',
	    menuItem4: 'Four',
	    menuItem5: 'Five'
	  },

	  initialize: function(){
	  		alert("HeaderModule");
	  }

	});

	return HeaderModel;
});