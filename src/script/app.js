(function () {

    document.addEventListener('DOMContentLoaded',function () {
        todoUI.setupTodoApp({
            titleClass:'.js-new-title',
            categoryClass:'.js-new-category',
            todoCounterClass:'.js-todos-count',
            todoHolderClass:'.js-todo-items',
            todoAddClass:'.js-new-add'
        });
    todoUI.handleNewTodo(function (title, category) {
        todoModule.addtodo(title,category);
    });
    todoModule.loadtodos();
    });

})();