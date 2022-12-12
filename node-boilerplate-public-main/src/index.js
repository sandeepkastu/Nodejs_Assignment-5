var http = require("http");


const httpServer = http.createServer(handleServer);


function handleServer(req, res) {

    if(req.url=="/welcome")
    {
        
        res.setHeader("Content-type", "text/plain")
        res.write("Welcome to Dominos!")
        res.end()
       
    }
    else if(req.url=="/contact")
    {
        res.setHeader("Content-type","application/json")
        res.write(JSON.stringify({  
            
            'phone': '18602100000', 
                 'email': 'guestcaredominos@jublfood.com' 
           }))
    res.end()
    }
    

  else
  {
    res.setHeader("Content-type", "text/html")
 res.writeHead(404)
     res.write("<h1>page not found..</h1>")
      res.end()
  }

 
}
httpServer.listen(8081, console.log("server up at 8081"))
module.exports = httpServer;