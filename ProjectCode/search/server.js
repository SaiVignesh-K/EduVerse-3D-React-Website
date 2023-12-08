const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const Map=require('./models/Map');
const port = process.env.PORT || 8100;

// Replace with your MongoDB Atlas connection string
const mongoURI = 'mongodb+srv://teleansh:hTOM4VRnT8Ne6sOE@cluster0.btkgibm.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(cors());
app.use(express.json());

app.post('/api/search', async (req, res) => {
  
  try {
    // Replace 'YourModel' with your actual Mongoose model
    const searchResults = await Map.find();
    let flag=true;
    var arr=[];
    for(let i=0;i<searchResults.length;i++)
    {
        let key=searchResults[i].keyword;
        let word='';
        let term = req.body.term.toLowerCase();
        let size = term.length;
        for(let j=0;j<key.length;j++)
        {
          
          if(key[j]===' ')
          {
            console.log(word);
            if(word.substring(0,size).toLowerCase()===req.body.term)
            {
              arr.push(searchResults[i]);
              flag=false;
              break;
            }
            word='';
          }
          else
          {
            word+=key[j];
          }
        }
    }
    if(flag)
    res.json(arr);
  else
    res.json(arr);
  } catch (error) {
    console.error('Error searching MongoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/searchpost',async(req,res)=>{
  const title=req.body.title;
  const keyword=req.body.keyword; 
  const subject=req.body.subject;
  const url=req.body.url;
  
  const savedmap= await Map.create({
    title:title,
    keyword:keyword,
    subject:subject,
    url: url,
  })
  res.json({savedmap});
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
