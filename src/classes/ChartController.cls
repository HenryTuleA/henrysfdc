public class ChartController {
    public List<opportunity> data {get;set;}
        
    public ChartController(){
      data = [SELECT Name, CloseDate, StageName from Opportunity where StageName IN ('Closed Won', 'Closed Lost') ORDER BY CloseDate ASC];  
    }
    
}