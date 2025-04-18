import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('connected successfully!'))
  .catch((error) => console.log(error));

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use an async function to dynamically import routes
(async () => {
  try {
    const userRouter = (await import('./Routes/userRoute.js')).default;
    const cartRouter = (await import('./Routes/cartRouter.js')).default;
    const productRouter = (await import('./Routes/productRouter.js')).default;

    app.use('/api/user', userRouter);
    app.use('/api/cart', cartRouter);
    app.use('/api/product', productRouter);

    // Start the server after routes are loaded
    app.listen(process.env.PORT, () =>
      console.log(`Server is running on port ${process.env.PORT}`)
    );
  } catch (error) {
    console.error('Error loading routes:', error);
  }
})();