angular.module('antp')
    .controller('TodoController', function ($scope) {
        function getTodos() {
            let todos = [];
            let found = true;
            let index = 1;
            while (found) {
                if (localStorage.getItem('todo-' + index) !== null) {
                    todos.push({ id: index, text: localStorage.getItem('todo-' + index), done: false });
                    index++;
                } else {
                    found = !found;
                }
            }
            return todos;
        }
        $scope.editTargetTodo = null;
        $scope.targetTodoId = null;
        $scope.container = 'todo.html';
        $scope.todoText = '';
        $scope.todos = localStorage.getItem(`todo-1`) == null ? [] : getTodos();
        $scope.saveTodo = function () {
            if ($scope.todoText !== '') {
                $scope.todos.push({
                    id: $scope.todos.length,
                    text: $scope.todoText,
                    done: false
                });
                localStorage.setItem(`todo-${$scope.todos.length}`, $scope.todoText);
                $scope.todoText = '';
            }
        }
        $scope.openTodoEditor = function (id) {
            $scope.targetTodoId = id;
            $scope.editTargetTodo = $scope.todos[id - 1].text;
            document.querySelector('#new-todo-text').addEventListener('keyup', k => { if (k.key == "Enter") { $scope.editTodo(id) } });
            document.querySelector('#todo-editor-container').style.display = "block";
        }
        $scope.editTodo = function (id) {
            if ($scope.editTargetTodo !== '' && $scope.editTargetTodo !== null) {
                $scope.todos[id - 1].text = $scope.editTargetTodo;
                localStorage.setItem(`todo-${$scope.targetTodoId}`, $scope.editTargetTodo);
                $scope.editTargetTodo = null;
                $scope.targetTodoId = null;
                document.querySelector('#todo-editor-container').style.display = "none";
            }
        }
        $scope.closeTodoEditor = function () {
            document.querySelector('#todo-editor-container').style.display = "none";
        }
        $scope.removeTodo = function (target) {
            $scope.todos.splice(target - 1, 1);
            localStorage.removeItem('todo-' + target);
            $scope.todos.forEach(function (todo, index) {
                todo.id = index + 1;
            });
        }
    });