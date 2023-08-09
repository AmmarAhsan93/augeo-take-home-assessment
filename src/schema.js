const { buildSchema } = require("graphql");

const schema = buildSchema(`
type Department {
  id: String!
  name: String!
}
type Person {
  id: String!
  firstName: String!
  lastName: String!
  jobTitle: String!
  departmentId: String!
  managerId: String
}
type Hierarchy {
  id: String!
  firstName: String!
  lastName: String!
  jobTitle: String!
  departmentId: String!
  managerId: String
  department: String!
}
type Query {
  departments: [Department!]!
  people: [Person!]!
  findUserById(id:ID):Person
  findSpecificDepartmentById(id:ID):Department
  updateUser(id:ID, firstName:String, lastName:String, jobTitle:String):Person
  userRelationship(id:ID):[Hierarchy!]!
}
schema {
  query: Query
}
`);

module.exports = schema;
