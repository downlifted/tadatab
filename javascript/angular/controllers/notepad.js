angular.module('antp')
    .controller('NotepadController', function($scope) {

        $scope.container = 'notepad.html';
        $scope.noteTitle = localStorage.getItem('noteTitle') !== null && localStorage.getItem('noteTitle') !== '' ? localStorage.getItem('noteTitle') : 'Untitled note';

        $scope.noteText = localStorage.getItem($scope.noteTitle) == null ? '' : localStorage.getItem($scope.noteTitle);
        $scope.message = 'Hello';
        $scope.info = {};
        $scope.infoBox = document.querySelector('#info-box');
        $scope.saveNote = function () {
            let openRequest = indexedDB.open('anguloNotes', 1);

            openRequest.onupgradeneeded = function () {
                //
            }

            openRequest.onerror = function () {
                $scope.info = {
                    title: 'Error Saving your note',
                    body: `There was an error trying to save your note.
					${openRequest.error}`,
                    showActions: true,
                    actions: [
                        {
                            title: 'Try again',
                            method: function () {
                                $scope.saveNote();
                            }
                        }
                    ]
                }
                $scope.openInfoBox();
            }

            openRequest.onsuccess = function () {
                let db = openRequest.result;
                db.createObjectStore('noteTitle');
                db.createObjectStore('noteText');
            }
        }
        $scope.saveTempNoteTitle = function () {
            localStorage.clear();
            localStorage.setItem('noteTitle', $scope.noteTitle);
        }
        $scope.saveTempNote = function () {
            localStorage[$scope.noteTitle] = $scope.noteText;
            console.log(localStorage.getItem($scope.noteText));
        }
        $scope.openInfoBox = function () {
            $scope.infoBox.style.display = 'block';
        }
        $scope.closeInfoBox = function () {
            $scope.infoBox.style.display = 'none';
        }
    });