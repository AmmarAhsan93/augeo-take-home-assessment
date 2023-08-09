const data = require("./data.json");

const resolvers = {

// Find a specific user by ID
  findUserById: (args) => {
    const { id } = args;
    return data.people.find((user) => user.id === id);
  },

  // Find All Persons from the data.json file
  people: () => {
    return data.people;
  },

  // Find all departments from the data.json file
  departments: () => {
    return data.departments;
  },

  // Find a specific Department by using ID
  findSpecificDepartmentById: (args) => {
    const { id } = args;
    return data.departments.find((dpt) => dpt.id === id);
  },

  // Update a specific User
  updateUser: (args) => {
    const { id, ...rest } = args;
    const requestedUser = data.people.find((user) => user.id === id);
    requestedUser.firstName = rest.firstName ? rest.firstName : requestedUser.firstName
    requestedUser.lastName = rest.lastName ? rest.lastName : requestedUser.lastName
    requestedUser.jobTitle = rest.jobTitle ? rest.jobTitle : requestedUser.jobTitle
    return requestedUser;
  },

  // Find a user with it's hierarchy
  userRelationship: (args)=>{
    const {id} = args;
    const requestedUser = data.people.find((user) => user.id === id);
    const userHierarchy = data.people.filter((user) => user.managerId === requestedUser.id);
    userHierarchy.unshift(requestedUser);
    const teamHierarchy = userHierarchy.map((user)=>{
      const dpt = data.departments.find((dpt) => dpt.id === user.departmentId);
      user.department = dpt.name;
      return user;
    });
    return teamHierarchy;
  }
};

module.exports = resolvers;
