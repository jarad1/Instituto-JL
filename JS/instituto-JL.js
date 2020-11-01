var xt11 = 'Pedro'
var xt12 = 'Laura'
var xt13 = 'Thiago'
var xt14 = 'Alana'
var xt15 = 'Filipe'
var xt16 = 'Matheus'

var media = 7;
var faltasMaximas = 15;

var turma = prompt('Digite a turma para cadastro: ')

if (turma  == 'xt') {

    var nomeAluno = prompt('Digite o código do aluno: ')
    if (nomeAluno == 'xt11'  ) {
        nomeAluno =xt11 
    } else if (nomeAluno == 'xt12'  ) {
        nomeAluno =xt12
    }else if (nomeAluno == 'xt13'  ) {
        nomeAluno =xt13 
    }else if (nomeAluno == 'xt14'  ) {
        nomeAluno =xt14 
    }else if (nomeAluno == 'xt15'  ) {
        nomeAluno =xt15 
    }


    if (nomeAluno == xt11 || nomeAluno == xt12 || nomeAluno == xt13 || nomeAluno == xt14 || nomeAluno == xt15 || nomeAluno == xt16 ){
        
        var nota = prompt('Digite a nota de '+ nomeAluno +': ');

        while (nota > 10){
            nota = prompt('Digite a nota do aluno: ');
        }
        
        var faltas = prompt('Digite o número de faltas de '+ nomeAluno +': ');
        while (faltas < 0) {
            
            var faltas = prompt('Digite o número de faltas de '+ nomeAluno +': ');
        }

        document.getElementById('nome').textContent = nomeAluno;
        document.getElementById('quant').textContent = faltas + (' dias' );
        document.getElementById('nota').textContent = nota;
    
        if (nota >= media && faltas <= faltasMaximas ) {

            
            document.getElementById('texto').textContent = ('Que bom que '+ nomeAluno +' foi aprovado');

        } else if(faltas > faltasMaximas && nota >= media) {

            document.getElementById('texto').textContent =('Infelizmente '+ nomeAluno +' foi reprovado por '+ faltas +' faltas')

        } else if(nota < media && faltas <= faltasMaximas ) {

            document.getElementById('texto').textContent =('Infelizmente '+ nomeAluno +' foi reprovado por '+ (media - nota) +' pontos')

        }
        else {

            document.getElementById('texto').textContent =(''+ nomeAluno +' provavelmente desistiu pois reprovou por nota e falta')

        }
    }else {
        alert('aluno não encontrado ou invalido' )
    }
    

}else {
    alert('turma não encontrada ou invalida')
}


function displayTime() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    let clock = (time);
    document.getElementById('demo').textContent = clock;
 }
 
 const createClock = setInterval(displayTime, 1000)
