// Task 1: Create the Profile
let userProfile = ["Lendell Williams", 31, true, { city: "Chicago" }, ["rock climbing", "traveling"]];

// Task 2: Access and Log Profile Details
console.log(userProfile[0]);    // "Lendell Williams"
console.log(userProfile[4][1]); // "traveling"

// Task 3: Modify the Profile
userProfile[1] = 31;            // update age
userProfile[4][2] = "gym";  // add a new hobby

// Task 4: Display the Updated Profile
console.log(userProfile);