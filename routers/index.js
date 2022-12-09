const express=require('express');
const router=express.Router();
// const app=express();
// app.use(express.urlencoded());
const homeController=require('../controllers/home');
const postController=require('../controllers/post');
router.get('/',homeController.home.key2);
router.post('/post_todo',postController.post);
 module.exports=router;