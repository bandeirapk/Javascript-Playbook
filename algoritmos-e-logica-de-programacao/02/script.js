let student = prompt('Digite o nome do(a) aluno(a): ');

let grade1 = Number(prompt('Digite a primeira nota: '));
let grade2 = Number(prompt('Digite a segunda nota: '));
let grade3 = Number(prompt('Digite a terceira nota: '));

let average = (grade1 + grade2 + grade3) / 3;

if (average >= 6) {
  alert(`O aluno ${student} foi aprovado com a média ${average.toFixed(1)}`);
} else {
  alert(
    `O aluno ${student} foi reprovado com a média ${average.toFixed(
      1
    )} e deverá fazer a recuperação!`
  );
}
