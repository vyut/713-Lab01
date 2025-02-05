const object = {
  name: "John",
  age: 30,
  city: "New York",
};

// console.log(object);

// console.log(object.name);

// const jsonStr = JSON.stringify(object);
// console.log(jsonStr);

const student = {
  name: "Yut",
  age: 35,
  gpa: 3.5,
};

const processStudent = (student) => {
  return student.gpa > 2
    ? JSON.stringify(student)
    : `คุณ ${student.firstName} พ้นสภาพ`;
};

console.log(processStudent(student));

console.log(processStudent({ firstName: "Tao", gpa: 1.99 }));
