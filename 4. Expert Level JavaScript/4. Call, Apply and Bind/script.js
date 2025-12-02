console.clear();

// 'userDetails' is an object that stores information about a user such as name, age and designation.

let userDetails = {

    name: "Ajay Suneja",

    age: 30,

    designation: "Software Engineer"
};

// 'printDetails' is a normal function (not inside an object). It takes two parameters: 'state' and 'country'.

// Inside the function, 'this' refers to the object that will be defined later using call/apply/bind.

let printDetails = function (state, country) {

    console.log(this.name + " " + state + " " + country);
};

// Another object similar to 'userDetails' but with different values.

let userDetails2 = {

    name: "Anshika Gupta",

    age: 25,

    designation: "Software Engineer"
};

// .call() is used to invoke a function immediately. First argument → the object to be used as 'this'.Remaining arguments → passed normally to the function.

// Here, 'this' = userDetails, state = "Delhi" and country = "India"

printDetails.call(userDetails, "Delhi", "India"); // Output: Ajay Suneja Delhi India

// Same function, but now 'this' refers to userDetails2.

printDetails.call(userDetails2, "Delhi", "India"); // Output: Anshika Gupta Delhi India

// .apply() is similar to .call(). Difference: parameters are passed as an ARRAY.

// Here, 'this' = userDetails2, state = "Uttar Pradesh" and country = "India"

printDetails.apply(userDetails2, ["Uttar Pradesh", "India"]); // Output: Anshika Gupta Uttar Pradesh India

// .bind() DOES NOT execute the function immediately. It returns a NEW function with 'this' permanently set.

// Here, 'this' will always point to userDetails2. Also "Uttar Pradesh" and "India" are pre-set arguments.The returned function is stored in 'printDetails2'.

let printDetails2 = printDetails.bind(userDetails2, "Uttar Pradesh", "India");


// The bound function is called here. Now it executes with the saved context and arguments.

printDetails2(); // Output: Anshika Gupta Uttar Pradesh India