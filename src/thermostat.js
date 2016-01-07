
Thermostat = function(){
  this.STARTING_TEMP = 20;
  this.temp = this.STARTING_TEMP;
  this.MINIMUM_TEMP = 10;
  this.MAXIMUM_TEMP = 32;
}
Thermostat.prototype.getTemp = function(){
  return this.temp;
};

Thermostat.prototype.hotter = function(){
  if (this.temp === this.MAXIMUM_TEMP) {
    throw new Error("Maximum Temp reached.");
  }
  this.temp += 1;
};

Thermostat.prototype.colder = function(){
if (this.temp === this.MINIMUM_TEMP) {
  throw new Error("Minimum Temp reached.");
 }
  this.temp -= 1;
};
