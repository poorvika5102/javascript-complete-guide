// Array example
let skills = ["HTML", "CSS", "JavaScript"];

// Access elements
console.log("First skill:", skills[0]);

// Add elements
skills.push("React");
console.log("Updated skills:", skills);

// Loop through array
skills.forEach(function (skill) {
  console.log("Skill:", skill);
});

// Object example
let user = {
  name: "Poorvika",
  role: "Frontend Developer",
  experience: "Beginner",
  skills: skills
};

// Access object properties
console.log("User name:", user.name);
console.log("User role:", user["role"]);

// Update object
user.experience = "Intermediate";
console.log("Updated user:", user);

// Loop through object properties
for (let key in user) {
  console.log(key + ":", user[key]);
}
