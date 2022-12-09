var todolist=[
    {
        "todo":"I have to finish it by today",
        "category":"Personal",
        "duedate":"9/12/2022"
    }
];
module.exports.home={
key1:todolist,
key2:function(req,res){
  return  res.render('home',{
        title:"TODO App",
        todo_list:todolist
    })
}
}