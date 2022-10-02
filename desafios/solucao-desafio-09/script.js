let option;
const students = [];

const getAverage = student => (student.firstTest + student.secondTest) / 2;

while(option !== 4) {
  option = Number(prompt(`
  1 - Inserir novo estudante
  2 - Visualizar alunos
  3 - Visualizar média dos alunos
  4 - Sair
`));

  switch(option) {
    case 1:
      const studentName = prompt('Qual o nome do aluno? ');
      const firstTest = Number(prompt('Qual a nota do primeiro teste? '));
      const secondTest = Number(prompt('Qual a nota do segundo teste? '));
      students.push({
        name: studentName,
        firstTest,
        secondTest
      });
      break;
    case 2:
      const studentsNames = [];
      for (const student of students) {
        studentsNames.push(student.name);
      }
      alert(studentsNames);
      break;

    case 3:
      for (const student of students) {
        const average = getAverage(student);
        
        if (average >= 7) {
          alert(`${student.name} obteve um aproveitamento maior que 7. Aprovado! Nota: ${average}`);
        } else {
          alert(`${student.name} não obteve a nota mínima para entrar no concurso. Siga tentando. Nota: ${average}`);
        }
      }
      break;
    case 4:
      alert('Bye');
      break;
    default:
      alert('Opção inválida.')
  }
}