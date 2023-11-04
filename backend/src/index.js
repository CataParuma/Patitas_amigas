const express = require('express');
const bodyParser = require("body-parser");
const v1UserRouter = require("./v1/routes/userRoutes");
const v1PostRouter = require("./v1/routes/postRoutes");
const v1CommentRouter = require("./v1/routes/commentRoutes");

const app = express(); 
const PORT = 3000;

app.use(bodyParser.json());
app.use("/api/v1/users", v1UserRouter);
app.use("/api/v1/posts", v1PostRouter);
app.use("/api/v1/comments", v1CommentRouter);

app.listen(PORT, () =>{
    console.log(`API is listening on port ${PORT}`); 
});