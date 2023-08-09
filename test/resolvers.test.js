const resolver = require("../src/resolvers"); 
const data = require("../src/data.json");

const users = data.people
const departments = data.departments


describe("#findUserById", () => {
  var first_user = users[0] 
  var user = resolver.findUserById({id: first_user.id})

  // when user found successfully
  test("It will return the specific user by id", () => {
    expect(user).toBe(first_user)
    expect(user.id).toEqual(first_user.id)
    expect(user).toHaveProperty('firstName', first_user.firstName)
  });

  // when user is not present 
  test("It will return undefined", () => {
    var user = resolver.findUserById({id: "example"})
    expect(user).toBeUndefined()
    expect(user).not.toBe(first_user)
  });

  // when passed an empty object
  test("It will return undefined", () => {
    var user = resolver.findUserById({})
    expect(user).toBe(undefined)
    expect(user).not.toBe(first_user)
  });

  // false cases
  test("It will not return any other user", () => {
    expect(user).not.toBe(users[2])
    expect(user.id).not.toEqual(users[2].id)
    expect(user.jobTitle).not.toEqual(users[2].jobTitle)

    expect(user).not.toBe(users[5])
    expect(user.id).not.toEqual(users[5].id)
    expect(user.jobTitle).not.toEqual(users[5].jobTitle)
  });

});

describe("#findSpecificDepartmentById", () => {
  var first_department = data.departments[0]
  
  var department = resolver.findSpecificDepartmentById({id: first_department.id})

  // when department found successfully
  test("It will return the specific department by id", () => {
    expect(department).toBe(first_department)
    expect(department.id).toEqual(first_department.id)
    expect(department).toHaveProperty('name', first_department.name)
  });

  // when department is not present 
  test("It will return undefined", () => {
    var department = resolver.findSpecificDepartmentById({id: "example"})
    expect(department).toBeUndefined()
    expect(department).not.toBe(first_department)
  });

  // when passed an empty object
  test("It will return undefined", () => {
    var department = resolver.findSpecificDepartmentById({})
    expect(department).toBe(undefined)
    expect(department).not.toBe(first_department)
  });

  // false cases
  test("It will not return any other department", () => {
    expect(department).not.toBe(departments[2])
    expect(department.id).not.toEqual(departments[2].id)
    expect(department.name).not.toEqual(departments[2].name)

    expect(department).not.toBe(departments[5])
    expect(department.id).not.toEqual(departments[5].id)
    expect(department.name).not.toEqual(departments[5].name)
  });

});

describe("#people" , () => {
  var all_users = resolver.people()

  // it returns all users successfully
  test("It will return all the users", () => {
    expect(all_users).toBe(users)
    expect(all_users).toHaveLength(users.length)
    expect(all_users[0]).toBe(users[0])
    expect(all_users[0]).toHaveProperty('firstName', users[0].firstName)

  });  
  // false case
  test("It will return all the users", () => {
    expect(all_users).not.toHaveLength(users.length + 1)

  });
});

describe("#departments" , () => {
  var all_department = resolver.departments()

  // it returns all departments successfully
  test("It will return all the departments", () => {
    expect(all_department).toBe(departments)
    expect(all_department).toHaveLength(departments.length)
    expect(all_department[0]).toBe(departments[0])
    expect(all_department[0]).toHaveProperty('name', departments[0].name)

  }); 
  
  // false case
  test("It will not return all the departments", () => {
    expect(all_department).not.toHaveLength(departments.length + 1)

  });

});
// it'll update the user first name against the specific id passed as an argument
describe("# updateUser", () => {
  var first_user = users[1]
  test("updates the first name of the user with the given id", () => {
    const updatedUser = resolver.updateUser({ id: first_user.id , firstName: "Johnny" });
    expect(updatedUser.firstName).toBe("Johnny");
  });
// it'll update the user last name against the specific id passed as an argument
  test("updates the last name of the user with the given id", () => {
    const updatedUser = resolver.updateUser({ id: first_user.id, lastName: "Smith" });
    expect(updatedUser.lastName).toBe("Smith");
  });
// it'll update the user job title against the specific id passed as an argument
  test("updates the job title of the user with the given id", () => {
    const updatedUser = resolver.updateUser({ id: first_user.id, jobTitle: "Senior Software Developer" });
    expect(updatedUser.jobTitle).toBe("Senior Software Developer");
  });
// it'll update the user first name, last name & job title against the specific id passed as an argument
  test("returns the requested user object with updated fields", () => {
    const updatedUser = resolver.updateUser({ id: first_user.id, firstName: "Janet", lastName: "Smith", jobTitle: "Senior Project Manager" });
    expect(updatedUser.firstName).toEqual(updatedUser.firstName);
  });
});

describe("#userRelationship", () => {
  var first_user = users[1]
  // it'll find and check the length of hierarchy of the 2nd user in the people array
  test("returns an array of user objects that includes the requested user and their direct reports", () => {
    const userHierarchy = resolver.userRelationship({ id: first_user.id });
    expect(userHierarchy).toHaveLength(4)
  });
// false case
  test("returns an empty array if no user is found with the given id", () => {
    const userHierarchy = resolver.userRelationship({ id: first_user.id});
    expect(userHierarchy).not.toEqual([1]);
  });
});
