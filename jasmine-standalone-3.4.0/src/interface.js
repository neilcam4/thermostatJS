
  $(document).ready(function(){
    var thermostat = new Thermostat();
    $('#temperature').text(thermostat.temperature);

  $('#temperature-up').click(function(){
    thermostat.up();
    $('#temperature').text(thermostat.temperature);
  CheckUsage();
  })

  $('#temperature-down').click(function(){
    thermostat.down();
    $('#temperature').text(thermostat.temperature)
    CheckUsage();
  })

  $('#temperature-reset').click(function(){
    thermostat.reset();
    $('#temperature').text(thermostat.temperature);
    CheckUsage();
  })

  $('#power-saving-on').click(function(){
    thermostat.powerSavingOn();
    $('#power-saving-status').text('On');
  })

  $('#power-saving-off').click(function(){
    thermostat.powerSavingOff();
    $('#power-saving-status').text('Off')
  })

  function CheckUsage(){
    var status = thermostat.checkEnergyUsage();
    console.log(status)
  $('#energy-usage-status').text(status)
    }
  })
