const homeController=require('./home');

module.exports.post=function(req,res){
   homeController.home.key1.push(req.body);
   return res.redirect('back');

}