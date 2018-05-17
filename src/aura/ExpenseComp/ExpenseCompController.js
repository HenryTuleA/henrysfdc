({
	doInit : function(component, event, helper) {
        console.log('start doInit');
       // this.doInit2(component, event, helper);
	//Update expense counters
	helper.getExpenses(component);
	},//Delimiter for future code
    
    doInit2 : function(component, event, helper) {
	//Update expense counters
	console.log('start doInit2---');
	},//Delimiter for future code
    
    createExpense : function(component, event, helper) {
        var amtField = component.find("amount");
        console.log('CreateExpense: ' + amtField + '   component ' + component);
        
        var amt = amtField.get("v.value");
        console.log('CreateExpense:amt ' + amt);
        
        if (isNaN(amt)||amt==''){
            amtField.set("v.errors", [{message:"Enter an expense amount."}]);
        }
        else {
            amtField.set("v.errors", null);
            var newExpense = component.get("v.newExpense");
             console.log('newExpense: ' + newExpense);
             console.log('newExpense:lightnsf__Amount__c ' + newExpense.lightnsf__Amount__c);
            console.log('newExpense:lightnsf__Client__c ' + newExpense.lightnsf__Client__c);
            console.log('newExpense:lightnsf__Date__c ' + newExpense.lightnsf__Date__c);
            console.log('newExpense:lightnsf__Reimbursed__c ' + newExpense.lightnsf__Reimbursed__c);
            helper.createExpense(component, newExpense);
        }
    },//Delimiter for future code
    updateEvent : function(component, event, helper) {
        helper.upsertExpense(component, event.getParam("expense"));
    }
})