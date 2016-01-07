
Thermostat = function(){
  this.STARTING_TEMP = 20;
  this.temp = this.STARTING_TEMP;
}
Thermostat.prototype.getTemp = function(){
  return this.temp;
};

Thermostat.prototype.hotter = function(){
  this.temp += 1;
};

Thermostat.prototype.colder = function(){
  this.temp -= 1;
};
