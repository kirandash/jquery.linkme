/*
* name:		Linkme
* author:	Kiran Dash
* version:	1.0.0
* license:	MIT
*/

(function($){
	$.fn.linkme = function(options){
		//Default Settings
		var settings = $.extend({
			href	:null,
			text	:null,
			target	:'_self'
		}, options);
		
		//Validation
		if(settings.href == null){
			console.log('You need an href option for Linkme to work');
			return this;
		}
		
		return this.each(function(){
			var object = $(this);
			
			if(settings.text == null){
				settings.text = object.text();
			}
			
			object.wrap('<a href="'+settings.href+'" target="'+settings.target+'"></a>').text(settings.text);
		});
	}
}(jQuery));