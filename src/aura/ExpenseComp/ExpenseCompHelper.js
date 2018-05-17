({
  getExpenses: function(component) {
        var action = component.get("c.getExpenses");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                console.log('getExpense  ==>');
                component.set("v.expenses", response.getReturnValue());
                console.log('set expenses  ==>');
                this.updateTotal(component);
				console.log('after updateTotal  ==>' + component);                
            }
        });
        $A.enqueueAction(action);
  },
  updateTotal : function(component) {  
      console.log('start updateTotal***');
      var expenses = component.get("v.expenses");
      var total = 0;
      for(var i=0; i<expenses.length; i++){
          var e = expenses[i];

          //If you’re using a namespace, use e.myNamespace__Amount__c instead
          total += e.lightnsf__Amount__c;
      }
      //Update counters
      component.set("v.total", total);
      component.set("v.exp", expenses.length);
      console.log('end updateTotal***');
  },//Delimiter for future code
    createExpense: function(component, expense) {
        this.upsertExpense(component, expense, function(a) {
            var expenses = component.get("v.expenses");
            console.log('CreateExpense =>' + expenses);
            console.log('Createlightnsf__Amount__c =>' + expenses[0].lightnsf__Amount__c);
        
            expenses.push(a.getReturnValue());
            component.set("v.expenses", expenses);
            this.updateTotal(component);
          });
    },
    upsertExpense : function(component, expense, callback) {
        console.log('UpdateExpense =>' + expense);
        console.log('Updatelightnsf__Amount__c =>' + expense.lightnsf__Amount__c);
         
        var action = component.get("c.saveExpense");
        action.setParams({ 
            "expense": expense
        });
        if (callback) {
          action.setCallback(this, callback);
        }
        $A.enqueueAction(action);
    }

})