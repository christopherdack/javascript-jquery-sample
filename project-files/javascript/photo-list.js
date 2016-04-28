/****
Date: 10/28/2015
Author: Christopher Dack
Class: CITW 165
Assignment: Assignment #8
****/

// Initialize variables
$showPrimesButton = $('#showPrimesButton');
$showZoomsButton = $('#showZoomsButton');
$restoreButton = $('#restoreButton');

$showPrimesButton.on('click', function() {
  $('li').show();
  $('li.zoom').hide();
  $('li').addClass('selected');
});

$showZoomsButton.on('click', function() {
  $('li').show();
  $('li.prime').hide();
  $('li').addClass('selected');
});

$restoreButton.on('click', function() {
  $('li').show();
  $('li').removeClass('selected');
});