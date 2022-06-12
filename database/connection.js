import mongoose from 'mongoose';

//Connection with mongo with Mongoose.
const dbConnection = () => {
    // try {
    //   const connect = mongoose.connect(process.env.DATABASE_URI, {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //   });
    //   console.log('mongodb connected' + connect.connection.host);
    // } catch (err) {
    //   console.log(err);
    //   process.exit(1)
    // }
    mongoose.connect(process.env.DATABASE_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,})   
      .then(() => console.log("Database connected!"))
      .catch(err => console.log(err));
  }


  export { dbConnection };