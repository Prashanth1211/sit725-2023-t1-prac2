var express = require("express")
var app = express()
var port = process.env.port || 3000;

app.use(express.static(__dirname+'/public'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get("/",function(req,res){
    res.render('index.html')
});

function mathematicalCalculations(choice,number1,number2){
    if (choice != null){
        switch(choice)
        {
            case 1:
                var resultCal = parseInt(number1)+parseInt(number2);
                return resultCal;
            case 2:
                var resultCal = parseInt(number1)-parseInt(number2);
                return resultCal;
            case 3:
                var resultCal = parseFloat(number1)*parseFloat(number2);
                return resultCal;
            case 4:
                var resultCal = parseFloat(number1)/parseFloat(number2);
                return resultCal;
            default:
                return null;
                
        }
    }
    
}
app.get("/addtwoNumbers",(req,res) =>{
    var number1 = req.query.number1
    var number2 = req.query.number2
    var choice = 1;

    var result = mathematicalCalculations(choice,number1,number2)

    res.json({statuscode:200,data:result,message:"success"})
})
app.get("/subtwoNumbers",(req,res) =>{
    var number1 = req.query.number1
    var number2 = req.query.number2

    var choice = 2;

    var result = mathematicalCalculations(choice,number1,number2);

    res.json({statuscode:200,data:result,message:"success"})
})
app.get("/multwoNumbers",(req,res) =>{
    var number1 = req.query.number1
    var number2 = req.query.number2

    var choice = 3;

    var result = mathematicalCalculations(choice,number1,number2);

    res.json({statuscode:200,data:result,message:"success"})
})
app.get("/dividetwoNumbers",(req,res) =>{
    var number1 = req.query.number1
    var number2 = req.query.number2

    var choice = 4;

    var result = mathematicalCalculations(choice,number1,number2);

    res.json({statuscode:200,data:result,message:"success"})
})
app.listen(port,()=>{
    console.log("App listening to: "+port)
})