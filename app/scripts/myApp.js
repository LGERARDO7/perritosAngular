'use strict';

var wapp=angular.module("proyecto4",[]);//Se crea un módulo De Angular y se llamará proyecto4, en los corchetes se colocan librerias externas.//
//Parametro 1: Función,Parametro 2: Ofuscaciones empezando por el scope o más.//
wapp.controller('controladorBasico',['$scope',
  function controladorBasico($scope)
  {
    var misDogs=
    [
    {nombre:'Saul',edad:12,foto:'1.jpg'},
    {nombre:'Raul',edad:2,foto:'2.jpg'},
    {nombre:'Memo',edad:14,foto:'3.jpg'},
    {nombre:'Luis',edad:7,foto:'4.jpg'}
    ];
    $scope.superDogs=misDogs;
  }
  ]);