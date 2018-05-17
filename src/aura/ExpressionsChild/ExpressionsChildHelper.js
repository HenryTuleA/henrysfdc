({
	helperMethod : function() {
		
	},
    doGetRecordsFromApex : function(component) {
		console.log('try me now');
        var action = component.get('c.getSampleRecords');
        action.setCallback(this, function(response){
           var state = response.getState();
            if (state== 'SUCCESS'){
                console.log('State is success');
                var res = response.getReturnValue();
                 console.log(res);
                 console.log(res.Description);
                 console.log(res.Name);
                
            }else{
                var errors = response.getError();
                console.error( state );
                console.error( errors );
                console.log('State is => '+state);                
            }
        });
        $A.enqueueAction(action);
	}
    
})