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

const allLesson = Object.assign({}, {lesson1, lesson2, lesson3});

function countEstudent() {
  let totalEstudent = 0;
  for (let key in allLesson) {
    const estudent = allLesson[key].numeroEstudantes;
    totalEstudent += estudent;
  }
  return totalEstudent;
}

console.log(countEstudent());
