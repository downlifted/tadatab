(function(){

    angular.module('antp')
        .controller('BehaviorController', function($scope, $timeout){
            $scope.openNotePad = function(){
                document.querySelector('#va-sidepanel').style.display = "block";
                document.querySelector('#va-note-pad').style.display = "block";
                $timeout(function(){
                    document.querySelector('#va-sidepanel-content').style.right = "0";
                }, 200);
            }
            $scope.openTodoList = function(){
                document.querySelector('#va-sidepanel').style.display = "block";
                document.querySelector('#va-todo-list').style.display = "block";
                $timeout(function () {
                    document.querySelector('#va-sidepanel-content').style.right = "0";
                }, 200);
            }
            function closeSidePanel() {
                document.querySelector('#va-todo-list').style.display = "none";
                document.querySelector('#va-note-pad').style.display = "none";
                document.querySelector('#va-sidepanel-content').style.right = "-40%";
                document.querySelector('#va-sidepanel').style.display = "none";
            }
            document.querySelector('#va-sidepanel-closer').addEventListener('click', closeSidePanel);
            document.querySelector('#va-sidepanel-empty').addEventListener('click', closeSidePanel);
        });

})();