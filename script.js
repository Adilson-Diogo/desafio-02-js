/*
    Exercicio 02
    
    Crie uma aplicacao que possui uma lista de estudantes 
    cada estudante dentro dessa lista devera conter os seguintes dados:
    
    nome; 
    nota da primeira prova; 
    nota da segunda prova; 

    Depois de criada a lista:

    Crie uma funcao que ira calcular a media das notas de cada aluno.
    Supondo que a media para esse concurso e 7, verifique se cada aluno 
    obteve sucesso ou nao em entrar no concurso e mostre uma mensagem na tela.
*/

let students = []
let studentName
let average



function calcularMedia(nota1, nota2) {
    studentName = prompt('Digite o nome do aluno ')
    nota1 = Number(prompt("Insira o valor da primeira prova"))
    nota2 = Number(prompt("Insira o valor da segunda prova"))
    average = (nota1 + nota2) / 2

    if(average < 7) {
        alert(`
        A media do(a) aluno(a) ${studentName} e: ${average}
        Nao foi dessa vez, ${studentName}! Tente novamente!
        `)
    } else if (average >= 7) {
        alert(`
        A media do(a) aluno(a) ${studentName} e: ${average}
        Parabens, ${studentName}! Voce foi aprovado(a) no concurso!
        `)
    }
}

calcularMedia()









        


    
    

