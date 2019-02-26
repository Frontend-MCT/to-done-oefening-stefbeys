const todoModule=(function () {
      const addtodo=function (title,category) {
        const todo=new Todo({title:title,type:category});
        const id=dataAccess.addItem(todo);
        todoUI.appendTodo(todo.generateDomNode(id));
    };
      const loadtodos=function () {
          let index=1;
            for (let todo of dataAccess.getAllItems()){
                todo=(new Todo({title:todo.title,type:todo.type}));
                todoUI.appendTodo(todo.generateDomNode(index));
                index++;
            }
      };

    return{
        addtodo:addtodo,
        loadtodos:loadtodos
    }
})();