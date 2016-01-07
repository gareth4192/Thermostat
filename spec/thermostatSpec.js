describe('Thermostat', function(){

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.getTemp()).toEqual(20);
  });

  it('temp can be increased', function(){
    thermostat.hotter();
    expect(thermostat.getTemp()).toEqual(21);
  });

  it('temp can be decreaded', function(){
    thermostat.colder();
    expect(thermostat.getTemp()).toEqual(19);
  });

  it('has minimum temp', function() {
    for (i=0; i < 10; i++) {
        thermostat.colder();
    }
    expect(function(){thermostat.colder();}).toThrow(new Error("Minimum Temp reached."));

  });

  it('has max temp', function() {
    for (i=0; i < 5; i++) {
        thermostat.hotter();
    }
    expect(function(){thermostat.hotter();}).toThrow(new Error("Maximum Temp reached."));

  });

});
