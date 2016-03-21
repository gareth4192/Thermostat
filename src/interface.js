
$(document).ready(function() {

  var thermostat = new Thermostat();
  updateTemperature();

  $('#temp-up').click(function() {
    thermostat.hotter();
    updateTemperature();
  });

  $('#temp-down').click(function() {
    thermostat.colder();
    updateTemperature();
  });

  $('#temp-reset').click(function() {
    thermostat.resetTemp();
    updateTemperature();
  });

  $('#psm-on').click(function() {
    thermostat.psmOn();
    $('#power-saving-status').text('on')
    updateTemperature();
  })

  $('#psm-off').click(function() {
    thermostat.psmOff();
    $('#power-saving-status').text('off')
    updateTemperature();
  })

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temp);
    $('h1').attr('class', thermostat.energyUsage());
  };

  function displayWeather(city) {
   var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
   var token = '&appid=bac8602652d7f1b1a2b31c1a8960e976';
   var units = '&units=metric';
   $.get(url + token + units, function(data) {
     $('#current-temp').text(Math.round(data.main.temp));
 })
};
});
