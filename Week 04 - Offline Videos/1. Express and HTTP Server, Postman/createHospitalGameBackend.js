/*
Your logic is like a doctor
Learn by doing, lets create an in memory hospital

You need to create 4 routes (4 things that the hospital can do)

GET - User can check how many kidneys they have and their health
POST - User can add a new kidney
PUT - User can replace a kidney, make it healthy
DELETE - User can remove a kidney

1. What should happen if they try to delete when there are no kidneys?
2. What should happen if they try to make a kidney healthy when all are already healthy?
*/

const express=require("express");
const app=express();

app.use(express.json());

let users =[
    {
    name:"rohit",
    kidneys:[
        {
        healthy:false,
        },
      ],
    },
];

app.get("/",(req,res)=>{
    const rohikidneys=users[0].kidneys;
    const numberofkidneys=rohikidneys.length;
    const numberofhealthykidneys=rohikidneys.filter((kidneys)=>kidneys.healthy).length;
    const numberofunhealthykidneys=numberofkidneys-numberofhealthykidneys;
    res.json({
        numberofkidneys,
        numberofhealthykidneys,
        numberofunhealthykidneys,
    });
});

app.post("/",function(req,res){
    const ishealthy=req.body.ishealthy;
    users[0].kidneys.push({
        healthy:ishealthy,
    });
    res.json({
        message:"kidney added",
    });
});

app.put("/",function(req,res){
    if(isthereunhealthykidney()){
        for(let i=0;i<users[0].kidneys.length;i++){
            users[0].kidneys[i].healthy=true;
        }
        res.json({
            message:"all kidneys are now healthy",
        });
    }
    else{
        res.status(411).json({
            message:"there is no unhealthy kidney",
        })
    }

});

app.delete("/",(req,res)=>{
    if(isthereunhealthykidney()){
        users[0].kidneys = users[0].kidneys.filter((kidney) => kidney.healthy);

        res.json({
            message:"Unhealthy Kidney Removed Successfully!",
        });
    }
    else{
        res.status(411).json({
            message:"You have no unhealthy kidney to remove",
        })
    }
});
function isthereunhealthykidney(){
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            return true;
        }
    }
    return false;
}
app.listen(3000);
