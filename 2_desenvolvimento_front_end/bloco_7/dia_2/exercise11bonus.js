const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

const countMathStudents = () => {
  let totalStudent = 0;
  for (let key in allLessons) {
    const discipline = allLessons[key].materia;
    const student = allLessons[key].numeroEstudantes;
    if (discipline === 'Matemática') totalStudent += student      
  }
  return totalStudent;
}

console.log(countMathStudents());