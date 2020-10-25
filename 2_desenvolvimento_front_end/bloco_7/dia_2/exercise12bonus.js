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

const createReport = (object, teacher) => {
  let totalStudents = 0;
  const arrayDiscipline = [];
  for (let key in object) {    
    if(object[key].professor === teacher) {
      totalStudents += object[key].numeroEstudantes;
      arrayDiscipline.push(object[key].materia);
    }
  }
  const report = {
    professor: teacher,
    aulas: arrayDiscipline,
    estudantes: totalStudents
  } 
  return report; 
}

console.log(createReport(allLessons, 'Maria Clara'));