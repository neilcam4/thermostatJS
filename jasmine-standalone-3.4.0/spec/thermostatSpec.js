'use strict'

describe('Thermostat', function () {
  // Thermostat starts at 20 degrees
  var thermostat;
  beforeEach(function () {
     thermostat = new Thermostat();
  });

  it('should have a starting temperature at 20 degrees', function(){
  expect(thermostat.getCurrentTemperature()).toEqual(20)
});
  describe('up', function() {
        // You can increase the temperature with an up function
    it('can increase the temperature', function() {
      thermostat.up()
      expect(thermostat.getCurrentTemperature()).toBeGreaterThan(20)
    });
    // If power saving mode is off, the maximum temperature is 32 degrees
    it('it prevents temperature going above 32 if power mode is off', function(){
      thermostat.powerSavingOff()
      for (var i = 0; i < 14; i++){
        thermostat.up()
      }
      expect(thermostat.getCurrentTemperature()).toEqual(32)

    })
  });
  describe('down', function(){
    // You can decrease the temperature with a down function
    it('should reduce the temperature', function(){
      thermostat.down()
      expect(thermostat.getCurrentTemperature()).toBeLessThan(20)
    });
    it('should not reduce the temperature below 10', function() {
      for ( var i = 0; i < 12; i++ ) {
        thermostat.down()
      }
      expect(thermostat.getCurrentTemperature()).toEqual(10)
    });

  });
  describe('power saving mode', function(){
    // Power saving mode is on by default
    it('sets power save mode to be on by default', function(){
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });

    it('can be switched off', function() {
      thermostat.powerSavingOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
    });

    it('can be switched on', function() {
      thermostat.powerSavingOff();
      thermostat.powerSavingOn();
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });
    // If power saving mode is on, the maximum temperature is 25 degrees
    it('when power saving is on, temp cannot be increased above 25', function() {
      for (var i = 0; i < 6; i++) {
        thermostat.up()
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25)
    });
  })
  // You can reset the temperature to 20 with a reset function
  describe('reset', function() {
    it('can reset the temperature back to 20', function() {
      thermostat.up();
      thermostat.reset();
      expect(thermostat.getCurrentTemperature()).toEqual(20)
    });
  });
    // You can ask about the thermostat's current energy usage: < 18 is low-usage,
    // < 25 is medium-usage, anything else is high-usage.
  describe('Checking Energy Usage', function(){
    it('returns low usage when below 18', function(){
      for (var i = 0; i < 4; i++){
        thermostat.down()
      }
      expect(thermostat.checkEnergyUsage()).toEqual('Low')
    });
    it('returns medium usage when temperature less than 25 but greater than 18', function(){
      expect(thermostat.checkEnergyUsage()).toEqual('Medium')
    });
    it('returns high usage when temperature greater than 25', function() {
      thermostat.powerSavingOff();
      for (var i = 0; i < 5; i++) {
        thermostat.up();
      }
      expect(thermostat.checkEnergyUsage()).toEqual('High')
    });
  });
});
