# Augeo Take home assessment
This repository contains the code for APIs for the take home assessment to retrieve users and departments from the data.json file, we can retrieve a specific user or department by calling the respective resolver functions, we can update the user first name, last name and job title by using a query for updateUser, We can also get a specific user hierarchy and their relationship/department by using the userRelationship query.

### Getting Started:
- Clone the repository and run following commands inside the project directory to start the server
- npm install
- npm start
- visit http://localhost:4000/graphql in your browser

Note: If you face difficulty installing dependencies due to the recent updates in the npm , use yarn or add `--legacy-peer-deps` flag to npm install

### Technologies Used:
We are using following stacks in this project:
1. Node JS
2. Express JS
3. GraphQL Playground

### Node Packages being used:
- graphql
- express-grapghql
- jest

### Test-Cases
Use `npm test` to run the test coverage. 
Note : If you find any difficulty running test cases , just run `npm install --save-dev jest-cli` in the shell.

### Sample Queries Tested on Graphql Playground
<!-- Query to find user hierarchy and relationship with other users -->
- query{
  userRelationship(id: "d44390cd-b306-4e11-b7d5-a5e0e6fe1e3d") {
    id
    jobTitle
    firstName
    lastName
    departmentId
    managerId
    department
  }
} 

<!--Query to updateUser's first name , last name and jobtitle against a specific user id  -->
- query{
   updateUser(id:"fe265097-a16f-48d8-a378-2beba254cdbb" , firstName:"Ronaldo" ,lastName:"Mark", jobTitle:"Developer"){
    id
    jobTitle
    firstName
    lastName
    managerId
    departmentId
  }
}

<!-- Query to show all the departments -->
- query{
  departments{
    name
    id
  }
}

<!-- Query to show all the users -->
- query{
  people{
    jobTitle
    id
    firstName
    lastName
    departmentId
    managerId
  }
}

<!-- Query to find a specific user against a specific User Id -->
- query{
  findUserById(id:"2798c35b-5b8f-4a5d-9858-0a818d48cbef"){
    jobTitle
    id
    firstName
    lastName
    departmentId
    managerId
  }
}

<!-- Query to find a specific department against a specific department Id -->
- query{
  findSpecificDepartmentById(id:"e573dd1c-4cd4-451d-a844-a25210e91135"){
    id
    name
  }
}
