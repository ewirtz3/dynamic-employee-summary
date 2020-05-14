// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name, id, email) {
    if (!name) {
      throw new Error("Must provide name");
    }
    if (!id) {
      throw new Error("Must provide id");
    }
    if (!email) {
      throw new Error("Must provide email");
    }
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName(name) {
    return name;
  }
  getId(id) {
    return id;
  }
  getEmail(email) {
    return email;
  }
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
