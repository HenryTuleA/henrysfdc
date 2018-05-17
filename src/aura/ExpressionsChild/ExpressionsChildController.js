({
	myAction : function(component, event, helper) {
		
	},
    testForm : function(cmp, evt, helper) {
		helper.doGetRecordsFromApex(cmp, helper);
	},
    submitForm : function(cmp, evt) {
        var cls =  cmp.find("colors");
        console.log("*************" +   cls[0].get("v.label") + " => " + cls[0].get("v.checked"));
		console.log("*************" +   cls[1].get("v.label") + " => " + cls[1].get("v.checked"));
        console.log("*************" +   cls[2].get("v.label") + " => " + cls[2].get("v.checked"));
		console.log("*************" +   cls[3].get("v.label") + " => " + cls[3].get("v.checked"));
		console.log("*************" +   cls[4].get("v.label") + " => " + cls[4].get("v.checked"));
        console.log("*************" +   cls[5].get("v.label") + " => " + cls[5].get("v.checked"));
        cls[0].set("v.label", "New Value");
        var isDefined = !$A.util.isUndefined(cmp.get("v.childAttr"));
		console.log(isDefined);
	},
    onChildAttrChange : function(cmp, evt) {
        console.log("childAttr has changed");
        console.log("childAttr old value: " + evt.getParam("oldValue"));
        console.log("childAttr current value: " + evt.getParam("value"));
        console.log("****************************");
    },
    /* childExprController.js */
    updateChildAttr: function(cmp) {
        console.log("Before Child Change => " + cmp.get("v.childAttr"));
        cmp.set("v.childAttr", "UPDATED: child attribute");
        console.log("After Child Change => " +cmp.get("v.childAttr"));
         console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
        //cmp.set("v.parentAttr", "WWWWWW child attribute");
    }
})