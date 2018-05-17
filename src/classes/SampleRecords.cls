public class SampleRecords{

    public string val;
    @AuraEnabled
    public static Account getSampleRecords(){
        Account v = new Account();
        v.Name = ' name FROM CODE';
        v.Description = ' Locat and val=> ';
        return v;
    }
    
    
}