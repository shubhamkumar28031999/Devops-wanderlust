//import dotenv from 'dotenv';
import mongoose from 'mongoose';
//dotenv.config();
export default function connectDB() {
  const url = process.env.MONGODB_URI;

  try {
	  const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
	    user: process.env.DB_USERNAME,
	    pass: process.env.DB_PASSWORD,
        };
	  console.log(url)
    mongoose.connect(url,connectionParams);
  } catch (err) {
    console.error("Bhai abhi bhi nahi ho raha hai connect");
    process.exit(1);
  }
//  mongoose.connect(url, {
//    useNewUrlParser: true,
//    useUnifiedTopology: true,
//  });
	
  const dbConnection = mongoose.connection;
  
  dbConnection.on('error', (error) => {
    console.error('Error connecting to MongoDB:', error);
  });
  dbConnection.once('open', () => {
    console.log(`Database connected: ${url}`);
  });

  dbConnection.on('error', (err) => {
    console.error(`connection error: ${err}`);
  });
  return;
}
