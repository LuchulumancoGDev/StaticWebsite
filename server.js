const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

//MIddleware
app.use(express.static('public'));

app.get('/', (req,res)=>{
    res.sendFile(__dirname + 'public/index.html');
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})
