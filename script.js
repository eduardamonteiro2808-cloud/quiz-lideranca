const perguntas = [

{
    pergunta: "1. Quando surge um problema em grupo, você:",

    alternativas: [
        "A) Resolve sozinho",
        "B) Conversa com todos",
        "C) Organiza as tarefas",
        "D) Tenta manter a calma"
    ],

    tipos: [
        "Decisiva",
        "Comunicativa",
        "Estratégica",
        "Empática"
    ]
},

{
    pergunta: "2. Em trabalhos em equipe você costuma:",

    alternativas: [
        "A) Assumir o controle",
        "B) Ouvir opiniões",
        "C) Dividir funções",
        "D) Ajudar quem está perdido"
    ],

    tipos: [
        "Decisiva",
        "Comunicativa",
        "Estratégica",
        "Empática"
    ]
},

{
    pergunta: "3. O que faz um líder ser bom?",

    alternativas: [
        "A) Autoridade",
        "B) Comunicação",
        "C) Estratégia",
        "D) Empatia"
    ],

    tipos: [
        "Decisiva",
        "Comunicativa",
        "Estratégica",
        "Empática"
    ]
},

{
    pergunta: "4. Quando alguém da equipe comete um erro, você:",

    alternativas: [
        "A) Corrige imediatamente",
        "B) Conversa para entender o que aconteceu",
        "C) Pensa em como evitar novos erros",
        "D) Tenta apoiar a pessoa emocionalmente"
    ],

    tipos: [
        "Decisiva",
        "Comunicativa",
        "Estratégica",
        "Empática"
    ]
},

{
    pergunta: "5. Em uma situação de pressão, você:",

    alternativas: [
        "A) Toma decisões rápidas",
        "B) Procura ouvir o grupo",
        "C) Cria um plano de ação",
        "D) Tenta manter todos tranquilos"
    ],

    tipos: [
        "Decisiva",
        "Comunicativa",
        "Estratégica",
        "Empática"
    ]
}

];

let atual = 0;

let pontos = {

    "Decisiva": 0,
    "Comunicativa": 0,
    "Estratégica": 0,
    "Empática": 0
};

const pergunta = document.getElementById("pergunta");

const botaoA = document.getElementById("botaoA");
const botaoB = document.getElementById("botaoB");
const botaoC = document.getElementById("botaoC");
const botaoD = document.getElementById("botaoD");

const resultado = document.getElementById("resultado");

function mostrarPergunta(){

    pergunta.innerText = perguntas[atual].pergunta;

    botaoA.innerText = perguntas[atual].alternativas[0];

    botaoB.innerText = perguntas[atual].alternativas[1];

    botaoC.innerText = perguntas[atual].alternativas[2];

    botaoD.innerText = perguntas[atual].alternativas[3];
}

function responder(letra){

    let indice;

    if(letra == "A"){
        indice = 0;
    }

    if(letra == "B"){
        indice = 1;
    }

    if(letra == "C"){
        indice = 2;
    }

    if(letra == "D"){
        indice = 3;
    }

    let tipo = perguntas[atual].tipos[indice];

    pontos[tipo]++;

    atual++;

    if(atual < perguntas.length){

        mostrarPergunta();
    }

    else{

        mostrarResultado();
    }
}

function mostrarResultado(){

    let vencedor = "Decisiva";

    if(pontos["Comunicativa"] > pontos[vencedor]){
        vencedor = "Comunicativa";
    }

    if(pontos["Estratégica"] > pontos[vencedor]){
        vencedor = "Estratégica";
    }

    if(pontos["Empática"] > pontos[vencedor]){
        vencedor = "Empática";
    }

    document.getElementById("quiz").style.display = "none";

    if(vencedor == "Decisiva"){

        resultado.innerHTML =
        "<h2>Liderança Decisiva</h2>" +
        "<p>Você tende a agir rapidamente diante dos desafios e assumir responsabilidades com facilidade. Líderes com esse perfil costumam ser firmes nas decisões e transmitem segurança para a equipe.</p>";
    }

    if(vencedor == "Comunicativa"){

        resultado.innerHTML =
        "<h2>Liderança Comunicativa</h2>" +
        "<p>Você valoriza o diálogo, a escuta e a troca de ideias. Pessoas com esse perfil costumam criar ambientes mais colaborativos e relações de confiança dentro da equipe.</p>";
    }

    if(vencedor == "Estratégica"){

        resultado.innerHTML =
        "<h2>Liderança Estratégica</h2>" +
        "<p>Você gosta de organização, planejamento e resolução de problemas. Líderes estratégicos conseguem enxergar objetivos de longo prazo e distribuir tarefas de forma eficiente.</p>";
    }

    if(vencedor == "Empática"){

        resultado.innerHTML =
        "<h2>Liderança Empática</h2>" +
        "<p>Você prioriza as relações humanas e o bem-estar da equipe. Pessoas com esse perfil costumam oferecer apoio emocional, acolhimento e criar ambientes mais saudáveis.</p>";
    }
}

mostrarPergunta();
