
Thermostat = function(){
  this.STARTING_TEMP = 20;
  this.temp = this.STARTING_TEMP;
  this.MINIMUM_TEMP = 10;
  this.PSM_MAXIMUM_TEMP = 25;
  this.NO_PSM_MAXIMUM_TEMP = 32;
  this.psm = true;
  this.MEDIUM_USAGE = 18;
}


Thermostat.prototype.getTemp = function(){
  return this.temp;
};


Thermostat.prototype.hotter = function(){
  if (this.isPsmOn() && this.temp === this.PSM_MAXIMUM_TEMP)
      { throw new Error("Maximum Temp reached.");}

   else if (this.isPsmOn() === false && this.temp === this.NO_PSM_MAXIMUM_TEMP)

    { throw new Error("Maximum Temp reached.");}

  else
  { this.temp += 1; }
};

Thermostat.prototype.colder = function(){
if (this.temp === this.MINIMUM_TEMP) {
  throw new Error("Minimum Temp reached.");
 }
  this.temp -= 1;
};

Thermostat.prototype.isPsmOn = function(){
  return this.psm;
};

Thermostat.prototype.psmOff = function(){
  this.psm = false;
};

Thermostat.prototype.psmOn = function(){
  this.psm = true;
  if (this.temp > 25)
    { this.temp = 25 }
};

Thermostat.prototype.resetTemp = function(){
  this.temp = this.STARTING_TEMP;
};

Thermostat.prototype.energyUsage = function() {
  if (this.temp < this.MEDIUM_USAGE) {
    return 'low-usage';
  }
  if (this.temp >= this.MEDIUM_USAGE && this.temp <= this.PSM_MAXIMUM_TEMP) {
    return 'medium-usage';
  }
  return 'high-usage';
}
