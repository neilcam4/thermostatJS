
'use strict'

function Thermostat (){
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.isPowerSaving = true;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
}

Thermostat.prototype.isPowerSaving = function() {
  return this.isPowerSaving === true; // does this need to be set to true?
}

Thermostat.prototype.up = function(){
if (this.isPowerSaving===false){
  if(this.temperature < 32){
    this.temperature ++ ;
  };
} else {
  if (this.temperature < 25){
    this.temperature ++;
  };
 };
};

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE
}

Thermostat.prototype.down = function(){
  if (this.isMinimumTemperature()) {
    return
  }
  this.temperature --;
}

Thermostat.prototype.powerSavingOff = function() {
  this.isPowerSaving = false;
}

Thermostat.prototype.powerSavingOn = function() {
  this.isPowerSaving = true;
}

Thermostat.prototype.reset = function() {
  this.temperature = 20
}

Thermostat.prototype.checkEnergyUsage = function(){
  if(this.temperature < 18){
    return 'Low';
  }
  else if (this.temperature > 18 && this.temperature < 25){
    return 'Medium';
  }
  else if (this.temperature >= 25) {
    return 'High'
  }
}
