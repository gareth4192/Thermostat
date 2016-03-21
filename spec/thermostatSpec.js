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

  it('has max temp of 32 when psm is off', function() {
    thermostat.psmOff()
    expect(thermostat.isPsmOn()).toBe(false)
    for (i=0; i < 12; i++) {
        thermostat.hotter();
    }
    expect(function(){thermostat.hotter();}).toThrow(new Error("Maximum Temp reached."));
  });

  it('has max temp of 25 when psm is on', function() {
    for (i=0; i < 5; i++) {
        thermostat.hotter();
    }
    expect(function(){thermostat.hotter();}).toThrow(new Error("Maximum Temp reached."));
  });

  it('if current temp > 25, psm sets it to 25', function() {
    thermostat.psmOff();
    for (i=0; i < 8; i++) {
        thermostat.hotter();
    }
    thermostat.psmOn();
    expect(thermostat.temp).toEqual(25)
  });

  it('if current temp <= 25, it does not change', function(){
    thermostat.psmOff();
    thermostat.hotter();
    thermostat.psmOn();
    expect(thermostat.temp).toEqual(21)
  });

  it('has power saving mode', function(){
    expect(thermostat.isPsmOn()).toBe(true)
  });

  it('power saving mode can be turned off', function(){
    thermostat.psmOff();
    expect(thermostat.isPsmOn()).toBe(false)
  });

  it('power saving mode can be turned back on', function(){
    thermostat.psmOff();
    thermostat.psmOn();
    expect(thermostat.isPsmOn()).toBe(true)
  });

  it('can be reset to starting temp', function(){
    thermostat.hotter();
    thermostat.resetTemp();
    expect(thermostat.getTemp()).toEqual(20);
  });


  describe('displaying usage levels', function() {

    describe('when the temperature is below 18 degrees', function() {
      it('it is considered low-usage', function() {
        for (var i = 0; i < 3; i++) {
          thermostat.colder();
        }
        expect(thermostat.energyUsage()).toEqual('low-usage');
      });
    });

    describe('when the temperature is between 18 and 25 degrees', function() {
      it('it is considered medium-usage', function() {
        expect(thermostat.energyUsage()).toEqual('medium-usage');
      });
    });

    describe('when the temperature is anything else', function() {
      it('it is considered high-usage', function() {
        thermostat.psmOff();
        for (var i = 0; i < 6; i++) {
          thermostat.hotter();
        }
        expect(thermostat.energyUsage()).toEqual('high-usage');
      });
    });
  });



});
