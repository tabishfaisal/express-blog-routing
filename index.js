const express = require('express');
const app = express();
 const postruoter = require('./ruotes/posts.js');

 app.use('/posts',postruoter);

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});