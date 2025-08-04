// Student bio data object

const studentBioData = {

    name: "Thapa Technical",

    age: 25,

    gender: "male",

    education: "B.Tech",

    address: {

        city: "Mumbai",

        state: "Maharashtra",

        country: "India"
    }
};

// Output container

const output = document.getElementById("output");

// Helper: Print styled message to output

const showMessage = (message, type = "info") => {

    const emojis = {

        success: "✅",

        error: "⚠️",

        info: "ℹ️"
    };

    output.textContent = `${emojis[type] || "ℹ️"} ${message}`;
};

// Add data to localStorage

const addData = () => {

    // Use JSON.stringify() to convert object to string and store in localStorage

    localStorage.setItem("student", JSON.stringify(studentBioData));

    // Show success message

    showMessage("Student data has been added successfully!", "success");
};

// Get data from localStorage

const getData = () => {

    // Use getItem() to get data from localStorage

    const data = localStorage.getItem("student");

    // If no data found, show error message

    if (!data) {

        showMessage("No student data found in local storage.", "error");

        return;
    }

    // Use JSON.parse() to convert string to object

    const student = JSON.parse(data);

    // Show student data

    const formatted = `Name: ${student.name}\nAge: ${student.age}\nGender: ${student.gender}\nEducation: ${student.education}\nAddress: ${student.address.city}, ${student.address.state}, ${student.address.country}`;

    // Show formatted student data

    output.textContent = formatted;
};

// Delete data from localStorage

const deleteData = () => {

    // Use getItem() to get data from localStorage

    if (!localStorage.getItem("student")) {

        showMessage("No data to delete.", "error");

        return;
    }

    // Use removeItem() to delete data from localStorage

    localStorage.removeItem("student");

    showMessage("Student data has been deleted.", "success");
};

// Event listeners

document.getElementById("add-data").addEventListener("click", addData);

document.getElementById("get-data").addEventListener("click", getData);

document.getElementById("delete-data").addEventListener("click", deleteData);