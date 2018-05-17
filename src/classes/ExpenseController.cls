public with sharing class ExpenseController {
	@AuraEnabled
	public static List<Expense__c> getExpenses() {
		// Perform isAccessible() check here
		return [SELECT Id, Name, lightnsf__Amount__c, lightnsf__Client__c, lightnsf__Date__c,lightnsf__Reimbursed__c, CreatedDate FROM lightnsf__Expense__c ];
	}
    
    
    @AuraEnabled
    public static Expense__c saveExpense(Expense__c expense) {
    	System.debug(expense);
        // Perform isUpdateable() check here
        upsert expense;
        return expense;
    }
}