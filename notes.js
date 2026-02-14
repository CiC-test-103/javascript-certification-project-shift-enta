case "add":
  // ...
  if (!name || !year || !email || !specialization) {
    console.log("Error: Please provide all required arguments (name year email specialization)");
    break;
  }
  const newStudent = new Student(name, year, email, specialization);
  studentManagementSystem.add(newStudent);
  console.log("Student added successfully.");
  studentManagementSystem.display();
  break;

case "remove":
  // ...
  const removed = studentManagementSystem.remove(removeEmail);   // ← assume it returns removed node or null
  if (removed) {
    console.log(`Student with email ${removeEmail} removed.`);
  } else {
    console.log(`No student found with email ${removeEmail}.`);
  }
  studentManagementSystem.display();
  break;

case "find": 
  console.log("Finding student...");
  const findEmail = args[0];
  if (!findEmail) {
    console.log("Please provide an email to find.");
    break;
  }

  const student = studentManagementSystem.find(findEmail);       // ← change to .find()
  if (student) {
    student.display();
  } else {
    console.log("Student does not exist.");
  }
  break;

case "save": 
  console.log("Saving data...");
  const saveFileName = args[0];
  if (!saveFileName) {
    console.log("Please provide a filename to save.");
    break;
  }
  studentManagementSystem.save(saveFileName);                    // ← most likely name
  console.log(`Data saved to ${saveFileName}`);
  break;

case "load":
  console.log("Loading data...");
  const loadFileName = args[0];
  if (!loadFileName) {
    console.log("Please provide a filename to load.");
    break;
  }
  studentManagementSystem.load(loadFileName);                    // ← most likely name
  console.log(`Data loaded from ${loadFileName}`);
  studentManagementSystem.display();
  break;