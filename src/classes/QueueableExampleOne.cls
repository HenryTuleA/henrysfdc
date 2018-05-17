public class QueueableExampleOne implements Queueable, Database.AllowsCallouts {
    public Integer counter;
    public void execute(QueueableContext context){
        System.debug('Counter: '+counter);
        HttpRequest req = new HttpRequest();
        req.setEndpoint('callout:TestNamedCredential');
        //req.setEndpoint('http://requestb.in/14zujdx1');
        req.setMethod('GET');
        Http http = new Http();
        HttpResponse resp = http.send(req);
        String html = resp.getBody();
        System.debug('Request: ' + req.toString());
        System.debug('Body: ' + html);
        System.debug(' myDMLLimit ='+ Limits.getCallouts());
        QueueableExampleOne job = new QueueableExampleOne();
        job.counter = counter; 
        System.enqueueJob(job);
    }
}