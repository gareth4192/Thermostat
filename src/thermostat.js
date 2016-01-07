
Thermostat = function(){
  this.temp = 20;
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
