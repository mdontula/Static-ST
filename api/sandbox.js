define(['API'], function(API){
	APToday.SandBox = {
		sandbox: function(core){
			return{
				uid: function(id, view){
					return id + '_module';
				}
			}
		}
	}

	return APToday;
		
	
	
})