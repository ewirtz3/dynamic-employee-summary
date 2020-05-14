// TODO: Write code to define and export the Employee class
function Employee(name, id, email) {
  this.name = name;
  this.id = id;
  this.email = email;
}

Employee.prototype.getName = function (name) {};
Employee.prototype.getId = function (id) {};
Employee.prototype.getEmail = function (email) {};
Employee.prototype.getRole = function () {
  return "Employee";
  npm;
};

new Employee();

module.exports = Employee;
