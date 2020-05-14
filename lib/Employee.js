// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name, id, email) {
    this.name = name;
    if (!name) {
      throw new Error("Must provide name");
    }
    this.id = id;
    if (!id) {
      throw new Error("Must provide id");
    }
    this.email = email;
    if (!email) {
      throw new Error("Must provide email");
    }
  }
  getName() {
    return name;
  }
  getId() {
    return id;
  }
  getEmail() {
    return email;
  }
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
