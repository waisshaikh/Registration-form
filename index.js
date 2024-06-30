const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
const port = process.env.PORT || 3000;
// const username = process.env.MONGODB_USERNAME;
// const password = process.env.MONGODB_PASSWORD;

mongoose.connect(`mongodb://localhost:27017/RegistrationFormDB`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const registrationSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

const Registration = mongoose.model("Registration", registrationSchema);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/pages'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/pages/index.html');
});

app.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        
        
        // check for existing user 
        const existingUser = await Registration.findOne({email : email});
        if(!existingUser){
            const registrationData = new Registration({
                name,
                email,
                password,
            });
            await registrationData.save();
            res.redirect("/Success");

        }    
        else{
            console.log("User already exist");
            res.redirect("/error")
        } 
        
    


    } catch (error) {
        console.log(error);
        res.redirect("/Error");
    }
});

app.get("/Success", (req, res) => {
    res.sendFile(__dirname + '/pages/success.html');
});

app.get("/Error", (req, res) => {
    res.sendFile(__dirname + '/pages/error.html');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
