({
	handleClick : function(component, event, helper) {
		var name = event.getSource();
        console.log('name => ' + name);
	},
    
    clickReimbursed: function(component, event, helper) {
        var expense = component.get("v.expense");
        var updateEvent = component.getEvent("updateExpense");
        updateEvent.setParams({ "expense": expense });
        updateEvent.fire();
    }

})