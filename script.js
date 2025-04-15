function handleJSON() {
  const output = document.getElementById("output");
  output.textContent = ""; // Clear old output

  // Step 1: TODO - Create a JavaScript object called `student` with:
  // - name: "Jordan"
  const studentName = "Naysa";
  age = 5;
  grade += 1;
  subjects = ["Reading", "Math", "History"];

  };

  // Step 2: Convert it into a JSON string
  let jsonString = JSON.stringify(student);

  // Step 3: Display the JSON string on the page
  document.getElementById("output").textContent = jsonString;

  // Step 4: Parse the string back into an object
  let parsedStudent = JSON.parse(jsonString);

  // Step 5: Display the data from the parsed object
  console.log("Parsed Student:", parsedStudent);

  // Extension Tasks
  parsedStudent.isEnrolled = true;
  parsedStudent.address = { city: "Statesville", zip: "28277" };
  parsedStudent.subjects.push("English", "Art");

  // Stringify and parse again
  let updatedJsonString = JSON.stringify(parsedStudent);
  let updatedStudent = JSON.parse(updatedJsonString);

  console.log("Updated Student:", updatedStudent);

  // - subjects: an array like ["Math", "English", "History"]

  // const student = ???;

  // Step 2: TODO - Convert the object to a JSON string using JSON.stringify()
  // const jsonString = ???;

  // Step 3: TODO - Display the JSON string using output.textContent
  // output.textContent = "JSON String:\n" + jsonString + "\n\n";

  // Step 4: TODO - Convert the JSON string back to an object using JSON.parse()
  // const parsedStudent = ???;

  // Step 5: TODO - Display the parsed object's properties using output.textContent +=
  // Example:
  // output.textContent += "Parsed Object:\n";
  // output.textContent += "Name: " + parsedStudent.name + "\n";

  // 🎉 EXTENSION TASKS - ONLY DO THESE AFTER THE ABOVE STEPS ARE COMPLETE 🎉

  // 1. Add a new property like isEnrolled = true
  // 2. Add a nested object for address (city and zip)
  // 3. Add more subjects to the subjects array

  // Then stringify, parse, and display again to see the updates!
}
