/*
1 meter = 3.281 feet
1 foot = 0.305 meter
1 liter = 0.264 gallon
1 gallon = 3.785 liters
1 kilogram = 2.204 pound
1 pound = 0.454 kg 
*/

let convertBtn = document.getElementById("convert-btn")
let userInput = document.getElementById("user-input")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const meterToFeet = 3.281
const feetToMeter = 0.305
const literToGallon = 0.264
const gallonToLiter = 3.785
const kilogramToPound = 2.204
const poundToKilogram = 0.454

convertBtn.addEventListener("click", function() {
    let baseValue = userInput.value

    lengthEl.textContent = `${baseValue} meter = ${(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue * feetToMeter).toFixed(3)} meters`
    volumeEl.textContent = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} gallons | ${baseValue} gallons = ${(baseValue * gallonToLiter).toFixed(3)} liters`
    massEl.textContent = `${baseValue} kilos = ${(baseValue * kilogramToPound).toFixed(3)} pounds | ${baseValue} pounds = ${(baseValue * poundToKilogram).toFixed(3)} kilos`

})