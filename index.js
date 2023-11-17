const express=require("express")
const app=express()
app.set('view engine','ejs')
app.get('/',(_,res)=>{
    const user={
        name:"ramandeep kaur",
        email:"raman@gmail.com",
        city:"delhi"
    }
    res.render('profile',{user})
})
app.listen(7000,()=>{
    console.log("app listen at port 5000")
})