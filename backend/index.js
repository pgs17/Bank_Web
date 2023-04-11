const express = require("express");
const app = express();
const UserModel = require('./Models/users');
const TransactionModel = require('./Models/Transactions');
const cors= require("cors");
app.use(cors());

app.use(express.json())

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://sarangipriyanshu:Kanha%402003@cluster0.sjnqg5k.mongodb.net/BANKINGSYSTEM?retryWrites=true&w=majority");

app.get("/getusers", async(request , response)=> {
  try{
    const users= await UserModel.find();
    response.send(users);
  }
  catch( err){
    console.log(err)
    response.status(500).json();

  }
});


app.post('/adduser', async( request,response) => {
 const{Name,Phone,Address,Email,Gender,Account_Type,Amount,Employment}= request.body;
 if(!Name || !Phone || !Address || !Email || !Gender || !Account_Type || !Amount || !Employment){
  response.status(400).json({msg:"Kindly fill all the details"});
 }
 const NewUser= new UserModel({Name,Phone,Address,Email,Gender,Account_Type,Amount,Employment});
 await NewUser.save();
});


app.get('/getusers/:id', async(request,response) => {
      try{
        const userbyid = await UserModel.findById(request.params.id);
        if(userbyid){
        response.send(userbyid);
        }
      }
      catch(err){
        console.log(err);
        response.status(500).json();
      }
});


app.get('/get_transactions', async(request, response) => {
try{
  const transactions = await TransactionModel.find()
  response.send(transactions)
}
catch(err){
  console.log(err);
  response.status(500).json();
}
});


app.post('/transactions', async(request,response) => {
  try{
  const{ id1,money,id2}= request.body;
  const user1= await UserModel.findById(id1);
  const user2= await UserModel.findById(id2);

  const newtransaction= new TransactionModel({
    Sender: user1.Name,
     Reciever :user2.Name,
    Amount:money
  })
  await newtransaction.save();
  }
  catch (err){
       console.log(err);
       response.status(500).json();
  }
})


app.put('/user/money', async(request, response) => {
         try{
          const{id1,money,id2}= request.body;
          const user1 = await UserModel.findById(id1);
          const user2=await UserModel.findById(id2);
           user1.Amount= Amount-money;
           user2.Amount= Amount + money;
            await user1.save();
            await user2.save()
            response.send('Sucessfully sent Money');

         }
         catch(err){
           console.log(err);
           response.status(500).json({msg:"Transaction Unsuccessful"});
         }
})



app.listen(3001,() => {
    console.log("SERVER RUNS PERFECTLY");
});