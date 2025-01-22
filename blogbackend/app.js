const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const blogRoutes = require('./routes/blogRoutes');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
// app.use(morgan('dev'));


app.use('/blog', blogRoutes);
app.use('/user', userRoutes); 

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(5000, () => console.log(`Server running on port http://localhost:5000`));
})
.catch(err => console.error(err));