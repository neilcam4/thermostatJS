
'use strict'

// You can increase the temperature with an up function
// You can decrease the temperature with a down function
// The minimum temperature is 10 degrees
// If power saving mode is on, the maximum temperature is 25 degrees
// If power saving mode is off, the maximum temperature is 32 degrees
// Power saving mode is on by default
// You can reset the temperature to 20 with a reset function
// You can ask about the thermostat's current energy usage: < 18 is low-usage,
// < 25 is medium-usage, anything else is high-usage.
// (In the challenges where we add an interface, low-usage will
// be indicated with green, medium-usage indicated with black, high-usage
// indicated with red.)

describe('Thermostat', function(){
  // Thermostat starts at 20 degrees
  var thermostat;
  beforeEach(function(){
     thermostat = new Thermostat();
  });

  it('should have a starting teperature at 20 degrees', function(){
  expect(thermostat.temperature).toEqual(20)
});
  describe('up', function() {
    it('can increase the temperature', function() {
      thermostat.up()
      expect(thermostat.temperature).toBeGreaterThan(20)
    });
  });
  describe('down', function(){

    it('should reduce the temperature', function(){
      thermostat.down()
      expect(thermostat.temperature).toBeLessThan(20)
    });
    it('should not reduce the temperature below 10', function() {
      for ( var i = 11; i > 0 ; i-- ) {
        thermostat.down()
      }
      expect(thermostat.temperature).toEqual(10)
    });
    // it('should raise an error if the user tries to reduce the temperature below 10', function() {
    //   expect(function() { thermostat.down(); }).toThrowError('Target temp cannot be set below 10 degrees');
    // });

  });

});
