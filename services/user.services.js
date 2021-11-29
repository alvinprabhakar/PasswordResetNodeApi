const mongo = require('../shared/mongo');

const {ObjectId} = require("mongodb");

const service = {

    async getUser(req,res){
        console.log("Get User Method Called");
        const data = await mongo.db.collection("users").find().toArray();
        console.log(data);
        res.send(data);
    },

    async getUserData(req,res){
        console.log("Get Single User Data Method Called");
        console.log(req.params);
        const data = await mongo.db.collection("users").find({'eMail': {$eq: req.params.id}}).toArray();
        console.log(data);
        res.send(data);
    },

    async createUser(req,res){

        try{
        console.log("Create User Method Called");
        console.log(req.body);
        const data = await mongo.db.collection("users").insertOne(req.body);
        console.log(data);
        res.send({...req.body , _id: data.insertedId});
        }
        catch(err){
            console.log("Error create Order Mentod" , err);
            res.sendStatus(500);
        }
    },

    // async deleteOrder(req,res){
    //     try{
    //         console.log("Delete Order Method Called");
    //         console.log(req.params);
    //         await mongo.db.collection("orders").deleteOne({_id: ObjectId(req.params.id)})
    //     }
    //     catch(err){
    //         console.log("Error Delete Order Method", err);
    //         res.sendStatus(500);
    //     }
    // },

    async updateUser(req,res){
        try{
            console.log("Update Password Order method Called");
            console.log(req.params);
            console.log(req.body);
            const data = await mongo.db.collection("users")
                         .findOneAndUpdate({ eMail: req.params.id} , {$set: {...req.body}});
            //res.send({...req.body , _id: data.insertedId});
            res.send(data);
            }catch(err){
                console.log("Error Updating -" , err);
                res.sendStatus(500);
            }
        }

}


module.exports = service;