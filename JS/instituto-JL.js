var xt11 = 'Pedro'
var xt12 = 'Laura'
var xt13 = 'Thiago'
var xt14 = 'Alana'
var xt15 = 'Filipe'
var xt16 = 'Matheus'

var xt111 = 'É do sexo Masculino'
var xt112 = 'Possui 10 anos'
var xt113 = 'Reside em torno de 3km da escola'
var xt114 = 'Vem de condução'
var xt115 = 'Estuda na casa a 2 anos'
var xt116 = 'Gosta de conversar na aula'

var xt121 = 'É do sexo Feminino'
var xt122 = 'Possui 9 anos'
var xt123 = 'Reside em torno de 1km da escola'
var xt124 = 'Vem com os pais'
var xt125 = 'Estuda na casa a 5 anos'
var xt126 = 'Extremamente reservada'

var xt131 = 'É do sexo Masculino'
var xt132 = 'Possui 11 anos'
var xt133 = 'Reside em torno de 4km da escola'
var xt134 = 'Vem de carona compartilhada com o Matheus em dias pares'
var xt135 = 'Estuda na casa a 5 anos'
var xt136 = 'Sonha em ser jogador'

var xt141 = 'É do sexo Feminino'
var xt142 = 'Possui 10 anos'
var xt143 = 'Reside em torno de 2km da escola'
var xt144 = 'Vem com sua mãe, a coordenadora Luciana'
var xt145 = 'Estuda na casa a 5 anos'
var xt146 = 'Bastante aplicada e bem tímida'

var xt151 = 'É do sexo Masculino'
var xt152 = 'Possui 10 anos'
var xt153 = 'Reside em torno de 1km da escola'
var xt154 = 'Vem de condução'
var xt155 = 'Estuda na casa a 3 anos'
var xt156 = 'Bastante tranquilo, ótimo aluno'

var xt161 = 'É do sexo Masculino'
var xt162 = 'Possui 9 anos'
var xt163 = 'Reside em torno de 3km da escola'
var xt164 = 'Vem de carona compartilhada com o Thiago em dias ímpares'
var xt165 = 'Estuda na casa a 5 anos'
var xt166 = 'um dos melhores em lógica'

var media = 7;
var faltasMaximas = 15;

var turma = prompt('Digite a turma para cadastro: ')

if (turma  == 'xt') {

    var nomeAluno = prompt('Digite o código do aluno: ')
    if (nomeAluno == 'xt11'  ) {
        nomeAluno =xt11
        document.getElementById('li1').textContent = xt111;
        document.getElementById('li2').textContent = xt112;
        document.getElementById('li3').textContent = xt113;
        document.getElementById('li4').textContent = xt114;
        document.getElementById('li5').textContent = xt115;
        document.getElementById('li6').textContent = xt116;

    } else if (nomeAluno == 'xt12' ) {
        nomeAluno =xt12
        document.getElementById('li1').textContent = xt121;
        document.getElementById('li2').textContent = xt122;
        document.getElementById('li3').textContent = xt123;
        document.getElementById('li4').textContent = xt124;
        document.getElementById('li5').textContent = xt125;
        document.getElementById('li6').textContent = xt126;

    }else if (nomeAluno == 'xt13' ) {
        nomeAluno =xt13
        document.getElementById('li1').textContent = xt131;
        document.getElementById('li2').textContent = xt132;
        document.getElementById('li3').textContent = xt133;
        document.getElementById('li4').textContent = xt134;
        document.getElementById('li5').textContent = xt135;
        document.getElementById('li6').textContent = xt136;

    }else if (nomeAluno == 'xt14' ) {
        nomeAluno =xt14
        document.getElementById('li1').textContent = xt141;
        document.getElementById('li2').textContent = xt142;
        document.getElementById('li3').textContent = xt143;
        document.getElementById('li4').textContent = xt144;
        document.getElementById('li5').textContent = xt145;
        document.getElementById('li6').textContent = xt146;

    }else if (nomeAluno == 'xt15' ) {
        nomeAluno =xt15
        document.getElementById('li1').textContent = xt151;
        document.getElementById('li2').textContent = xt152;
        document.getElementById('li3').textContent = xt153;
        document.getElementById('li4').textContent = xt154;
        document.getElementById('li5').textContent = xt155;
        document.getElementById('li6').textContent = xt156;

    }else if (nomeAluno == 'xt16' ) {
        nomeAluno =xt16
        document.getElementById('li1').textContent = xt161;
        document.getElementById('li2').textContent = xt162;
        document.getElementById('li3').textContent = xt163;
        document.getElementById('li4').textContent = xt164;
        document.getElementById('li5').textContent = xt165;
        document.getElementById('li6').textContent = xt166;
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
    

} else {
    alert('turma não encontrada ou invalida')
}


function displayTime() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    let clock = (time);
    document.getElementById('demo').textContent = clock;
 }
 
 const createClock = setInterval(displayTime, 1000)
