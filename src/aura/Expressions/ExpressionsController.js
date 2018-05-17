({
	onParentAttrChange : function(cmp, evt) {
        console.log("ParentAttr has changed");
        console.log("ParentAttr old value: " + evt.getParam("oldValue"));
        console.log("ParentAttr current value: " + evt.getParam("value"));
        console.log("-----------------------------");
    },
    updateParentAttr: function(cmp) {
        console.log("Before ParentAttr Change => " + cmp.get("v.parentAttr"));
        cmp.set("v.parentAttr", "UPDATED parent attribute");
        console.log("After ParentAttr Change => " +cmp.get("v.parentAttr"));
		console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&");
    },
    checkBrowser: function(component) {
        var device = $A.get("$Browser.formFactor");
        console.log("You are using a " + device);
    },
    likeIt:function(cmp) {
    	cmp.set("v.likeId", "I like");
         console.log("v.likeId I like"  +cmp.get("v.likeId"));
	},
    unlikeIt:function(cmp) {
    	cmp.set("v.likeId", "I DONT like");
        console.log("v.likeId I DONT like"  +cmp.get("v.likeId"));
		
    }
})