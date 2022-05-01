// Created by: Jaejun Lee
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict";

/**
 * This function determines if an integer is negative or positive.
 */
function myButtonClicked() {
  const userInteger = parseInt(document.getElementById("integer").value);
  if (userInteger > 0) {
    document.getElementById("answer").innerHTML =
      "The integer is positive.";
  }
  else {
    document.getElementById("answer").innerHTML =
      "The integer is negative.";
  }
}

