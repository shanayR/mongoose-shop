import { dbConnection,ObjectId } from "../database/connection.js"

const homeView = (req,res) => {
    dbConnection().then((client) => {
        const usersCollection = client.db('store').collection('users');
        usersCollection.find({}).toArray((err, userData) => {
            res.render('read', { userData });
        });
    });
}

export {renderForm , createUser,updateUser,updateForm,homeView,deleteUser}