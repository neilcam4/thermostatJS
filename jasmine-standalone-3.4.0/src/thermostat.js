
'use strict'

function Thermostat (){
  this.temperature = 20;
  this.isPowerSaving = true;
}

Thermostat.prototype.up = function(){
  if (this.temperature < 25) {
    this.temperature++;
  }
  return this.temperature
}
Thermostat.prototype.down = function(){
  if (this.temperature > 10) {
    this.temperature --;
  }
  return this.temperature
}
