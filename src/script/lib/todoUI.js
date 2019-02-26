const  todoUI=(function () {
    let newTodo = {
            title: null,
            category: null,
            status: null
        },
        todoholder = null,
        todocounter = null,
        todoaddbutton = null

    const setupTodoApp=function ({titleClass, categoryClass, todoHolderClass, todoCounterClass,todoAddClass}) {
        newTodo.title=document.querySelector(titleClass);
        newTodo.category=document.querySelector(categoryClass);
        todoholder=document.querySelector(todoHolderClass);
        todocounter=document.querySelector(todoCounterClass);
        todoaddbutton=document.querySelector(todoAddClass);
    };
    const handleNewTodo=function (callback) {
        todoaddbutton.addEventListener('click',function (e) {
            e.preventDefault();
            callback(newTodo.title.value,newTodo.category.value);
        });
    };
    const appendTodo=function (todo) {
      todoholder.append(todo);
    };
    const removeTodo=function (todo) {

    };
    return{
        setupTodoApp:setupTodoApp,
        handleNewTodo:handleNewTodo,
        appendTodo:appendTodo
    }
})();