
'use strict'

function Thermostat (){
  this.temperature = 20;
  this.isPowerSaving = true;
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
Thermostat.prototype.down = function(){
  if (this.temperature > 10) {
    this.temperature --;
  }
  return this.temperature
}
Thermostat.prototype.powerSavingOff = function(){
  this.isPowerSaving = false;
}
