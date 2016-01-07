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

});