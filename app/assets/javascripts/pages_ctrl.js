(function() {
  "use strict"
  angular.module("app").controller("pagesCtrl", function($scope) {
    $scope.people = [
      {
        name: "Finn 2187",
        bio: "Taken as a baby by the First Order, he abandoned as a storm trooper and joined the Resistance.",
        bioVisible: false
      },
      {
        name: "Ben Solo",
        bio: "Born into a tumultuous family, he became a corrupted jedi under the influence of Snoke.",
        bioVisible: false
      },
      {
        name: "Poe Dameron",
        bio: "Ace pilot of the Resistance, he embarked on a journey with his droid, BB-8.",
        bioVisible: false
      }
    ];

    $scope.showInfo = function(person) {
      person.bioVisible = !person.bioVisible;
    };

    $scope.addPerson = function(newPersonName, newPersonBio) {
      console.log(newPersonName + newPersonBio);
      $scope.people.push(
        {
          name: newPersonName,
          bio: newPersonBio,
          bioVisible: false
        }
      );
    }

    $scope.deletePerson = function(person) {
      $scope.people.splice(person, 1);
    }

    window.$scope = $scope;
  });
})();