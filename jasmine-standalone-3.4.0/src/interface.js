
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

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temperature').text(Math.round(data.main.temp));
  })

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#city').text(data.name);
  })

  function CheckUsage(){
    var status = thermostat.checkEnergyUsage();
    console.log(status)
  $('#energy-usage-status').text(status)
    }
  })
