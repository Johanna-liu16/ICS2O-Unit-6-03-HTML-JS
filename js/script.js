// Copyright (c) 2020 Johanna Liu All rights reserved
//
// Created by: Johanna Liu
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-PWA-Test/sw.js", {
    scope: "/ICS2O-PWA-Test/",
  })
}

;("use strict")
/**
 * This function calculates area of a parrallelogram.
 */
function calculate() {
  // input
  const length = parseInt(document.getElementById("length-of-pyramid").value)
  const width = parseInt(document.getElementById("width-of-pyramid").value)
  const height = parseInt(document.getElementById("height-of-pyramid").value)

  // process
  const volume = (length * width * height) / 3

  // output
  document.getElementById("answers").innerHTML =
    "Volume is: " + volume.toFixed(2) + " cm³"
}
