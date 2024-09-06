function addStudent(name) {
    let studentItem = document.createElement('li');
    studentItem.textContent = name;
    document.getElementById('studentList').appendChild(studentItem);
  }
  addStudent('Murphy Smith');