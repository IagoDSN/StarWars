function removerConteudo() {
var container = document.getElementById("conteudo-container");
while (container.firstChild) {
container.removeChild(container.firstChild); 
} 
}

let pers = 0;
function botao1(){ //Obi wan kenobi
    pers = 1;
    removerConteudo();
var textos = [
{content: "Obi-Wan Kenobi", top: "460px", left: "670px"},
{content: "Obi-Wan Kenobi foi um personagem que apareceu principalmente nos primeiros 3 filmes, mas não deixou de aparecer no 4°(Uma nova esperança), como Ben Kenobi. Ele é um personagem muito importante para triologia, tendo até mesmo sua própria série.", top: "600px", left: "600px"},
{content: "Sua principal arma(Sabre de luz):", top: "890px", left: "850px"},
{content: "Planeta de Nascimento: Stewjon", top: "1290px", left: "350px"},
{content: "Descrição: Não é muito explorado nos filmes, mas é mencionado em outros materiais canônicos.", top: "1360px", left: "350px"}
];

textos.forEach(function(texto) {
var div = document.createElement("div");
div.className = "texto";
div.style.top = texto.top; 
div.style.left = texto.left;
div.textContent = texto.content;
document.getElementById("conteudo-container").appendChild(div);
});

var imagens = [
{src: "personagens/Obiwan.png", top: "500px", left: "270px", width: "400px", height: "250"},
{src: "personagens/SabreAzul.png", top: "950px", left: "900px", width: "350px", height: "auto"}
];

imagens.forEach(function(imagem) {
var img = document.createElement("img");
img.src = imagem.src;
img.className = "imagem";
img.style.top = imagem.top;
 img.style.left = imagem.left;
  img.style.width = imagem.width;
   img.style.height = imagem.height;
    document.getElementById("conteudo-container").appendChild(img); 
});
}
function botao2(){ //Darth Vader
    pers = 2;
    removerConteudo();
var textos = [
{content: "Darth Vader", top: "460px", left: "690px"},
{content: "Darth Vader, um dos vilões mais conhecidos do cinema, com sua masca intimidadora ele aparece pela primeira vez no episódio IV. Antes conhecido com Anakin Skywalker mas depois de uma manipulação cerebral de Darth Sidious, se torna Darth Vader.", top: "600px", left: "600px"},
{content: "Sua principal arma(Sabre de luz Sith):", top: "890px", left: "850px"},
{content: "Planeta de Nascimento: Tatooine", top: "1290px", left: "320px"},
{content: "Descrição: Um planeta desértico, conhecido por suas duras condições e por ser o lar de contrabandistas e comerciantes. Tatooine desempenha um papel significativo em várias partes da saga Star Wars.", top: "1360px", left: "320px"}
];

textos.forEach(function(texto) {
var div = document.createElement("div");
div.className = "texto";
div.style.top = texto.top; 
div.style.left = texto.left;
div.textContent = texto.content;
document.getElementById("conteudo-container").appendChild(div);
});

var imagens = [
{src: "personagens/darth.png", top: "500px", left: "260px", width: "400px", height: "250"},
{src: "personagens/SabreVermelho.png", top: "950px", left: "900px", width: "350px", height: "auto"}
];

imagens.forEach(function(imagem) {
var img = document.createElement("img");
img.src = imagem.src;
img.className = "imagem";
img.style.top = imagem.top;
 img.style.left = imagem.left;
  img.style.width = imagem.width;
   img.style.height = imagem.height;
    document.getElementById("conteudo-container").appendChild(img); 
});
}
function botao3(){ //Luke Skywalker
    pers = 3;
    removerConteudo();
var textos = [
{content: "Luke Skywalker", top: "460px", left: "690px"},
{content: "Luke Skywalker, um dos personagens mais conhecidos, Luke filho de Anakin Skyalker é um jedi treinado por Ben Kenobi e Yoda. No episódio V descobrimos que luke era filho de seu inimigo... Vader.", top: "600px", left: "600px"},
{content: "Sua principal arma(Sabre de luz):", top: "890px", left: "850px"},
{content: "Planeta de Nascimento: Polis Massa", top: "1290px", left: "320px"},
{content: "Descrição: Polis Massa é um pequeno planetoide remoto que serve como um centro médico de emergência, mas foi levado e cuidado em Tatooine.", top: "1360px", left: "320px"}
];

textos.forEach(function(texto) {
var div = document.createElement("div");
div.className = "texto";
div.style.top = texto.top; 
div.style.left = texto.left;
div.textContent = texto.content;
document.getElementById("conteudo-container").appendChild(div);
});

var imagens = [
{src: "personagens/Luke.png", top: "480px", left: "260px", width: "400px", height: "250"},
{src: "personagens/SabreVerde.png", top: "950px", left: "900px", width: "350px", height: "auto"}
];

imagens.forEach(function(imagem) {
var img = document.createElement("img");
img.src = imagem.src;
img.className = "imagem";
img.style.top = imagem.top;
 img.style.left = imagem.left;
  img.style.width = imagem.width;
   img.style.height = imagem.height;
    document.getElementById("conteudo-container").appendChild(img); 
});
}
function botao4(){//Leia Organa
    pers = 4;
    removerConteudo();
var textos = [
{content: "Leia Organa", top: "460px", left: "690px"},
{content: "Leia Organa, irmã de Luke foi apresentada pela primeira vez no começo do episódio IV, ela é uma personagem feminina que representa as mulheres, mostrando como uma mulher pode ser iteligente e forte.", top: "600px", left: "585px"},
{content: "Sua principal arma(Blaster DH-17):", top: "890px", left: "850px"},
{content: "Planeta de Nascimento: Polis Massa", top: "1290px", left: "320px"},
{content: "Descrição: Polis Massa é um pequeno planetoide remoto que serve como um centro médico de emergência, mas foi levada para Alderaan, onde foi adotada pela Família Real de Alderaan.", top: "1360px", left: "320px"}
];

textos.forEach(function(texto) {
var div = document.createElement("div");
div.className = "texto";
div.style.top = texto.top; 
div.style.left = texto.left;
div.textContent = texto.content;
document.getElementById("conteudo-container").appendChild(div);
});

var imagens = [
{src: "personagens/Leia.png", top: "570px", left: "220px", width: "500px", height: "450"},
{src: "personagens/dh-17.png", top: "950px", left: "900px", width: "350px", height: "auto"}
];

imagens.forEach(function(imagem) {
var img = document.createElement("img");
img.src = imagem.src;
img.className = "imagem";
img.style.top = imagem.top;
 img.style.left = imagem.left;
  img.style.width = imagem.width;
   img.style.height = imagem.height;
    document.getElementById("conteudo-container").appendChild(img); 
});
}
function botao5(){//Hansolo
    pers = 5;
    removerConteudo();
var textos = [
{content: "Han Solo", top: "460px", left: "690px"},
{content: "Han Solo, um dos personagens mais querido de toda franquia, Han Solo é um mercenário e contrabandista que acaba ajudando Luke e Ben Kenobi a salvar Leia. Se tornando um herói.", top: "600px", left: "600px"},
{content: "Sua principal arma(Blaster DL-44):", top: "890px", left: "850px"},
{content: "Planeta de Nascimento: Corellia.", top: "1290px", left: "305px"},
{content: "Descrição: Corellia é conhecida por sua cultura de pilotos e naves estelares. É um dos planetas centrais e tem uma grande influência na política e economia da galáxia. Han Solo cresceu em um ambiente difícil e cheio de contrabandistas, o que moldou sua personalidade audaciosa", top: "1360px", left: "305px"}
];

textos.forEach(function(texto) {
var div = document.createElement("div");
div.className = "texto";
div.style.top = texto.top; 
div.style.left = texto.left;
div.textContent = texto.content;
document.getElementById("conteudo-container").appendChild(div);
});

var imagens = [
{src: "personagens/HanSolo.png", top: "480px", left: "260px", width: "400px", height: "250"},
{src: "personagens/DL-44.png", top: "950px", left: "900px", width: "350px", height: "auto"}
];

imagens.forEach(function(imagem) {
var img = document.createElement("img");
img.src = imagem.src;
img.className = "imagem";
img.style.top = imagem.top;
 img.style.left = imagem.left;
  img.style.width = imagem.width;
   img.style.height = imagem.height;
    document.getElementById("conteudo-container").appendChild(img); 
});
}
function botao6(){//Chewbbaca
    pers = 6;
    removerConteudo();
var textos = [
{content: "Chewbbaca", top: "460px", left: "690px"},
{content: "Mesmo Chewbbaca sendo um Wookie, Chewbacca é o leal e forte co-piloto da Millennium Falcon, companheiro de Han Solo. Conhecido por sua grande força e rugidos característicos, ele é um guerreiro formidável e um símbolo de amizade e lealdade.", top: "600px", left: "600px"},
{content: "Sua principal arma(Bowcaster):", top: "890px", left: "850px"},
{content: "Planeta de Nascimento: Kashyyyk", top: "1250px", left: "320px"},
{content: "Descrição: Kashyyyk é um planeta repleto de florestas densas e exuberantes, lar dos Wookiees. É conhecido por suas árvores imensas e vida selvagem diversa. Chewbacca, ou Chewie, como é carinhosamente chamado, nasceu e cresceu neste ambiente natural e se tornou um guerreiro e engenheiro respeitado entre seu povo.", top: "1330px", left: "320px"}
];

textos.forEach(function(texto) {
var div = document.createElement("div");
div.className = "texto";
div.style.top = texto.top; 
div.style.left = texto.left;
div.textContent = texto.content;
document.getElementById("conteudo-container").appendChild(div);
});

var imagens = [
{src: "personagens/Chewbbaca.png", top: "507px", left: "260px", width: "400px", height: "250"},
{src: "personagens/arco.png", top: "900px", left: "950px", width: "350px", height: "auto"}
];

imagens.forEach(function(imagem) {
var img = document.createElement("img");
img.src = imagem.src;
img.className = "imagem";
img.style.top = imagem.top;
 img.style.left = imagem.left;
  img.style.width = imagem.width;
   img.style.height = imagem.height;
    document.getElementById("conteudo-container").appendChild(img); 
});
}
function botao7(){ //C3PO
    pers = 7;
    removerConteudo();
var textos = [
{content: "C3PO", top: "460px", left: "690px"},
{content: "C-3PO é um droide de protocolo especializado em traduções e etiqueta, fluente em mais de seis milhões de formas de comunicação. Criado por Anakin Skywalker, ele é leal, ansioso e polido. Frequentemente visto ao lado de R2-D2.", top: "600px", left: "600px"},
{content: "Sua principal arma:", top: "890px", left: "850px"},
{content: "Planeta de Nascimento: Tatooine", top: "1250px", left: "320px"},
{content: "Descrição: Um planeta desértico, conhecido por suas duras condições e por ser o lar de contrabandistas e comerciantes. Tatooine desempenha um papel significativo em várias partes da saga Star Wars.", top: "1330px", left: "320px"}
];

textos.forEach(function(texto) {
var div = document.createElement("div");
div.className = "texto";
div.style.top = texto.top; 
div.style.left = texto.left;
div.textContent = texto.content;
document.getElementById("conteudo-container").appendChild(div);
});

var imagens = [
{src: "personagens/c3PO.png", top: "507px", left: "290px", width: "300px", height: "150"},
{src: "personagens/nada.png", top: "950px", left: "910px", width: "200px", height: "auto"}
];

imagens.forEach(function(imagem) {
var img = document.createElement("img");
img.src = imagem.src;
img.className = "imagem";
img.style.top = imagem.top;
 img.style.left = imagem.left;
  img.style.width = imagem.width;
   img.style.height = imagem.height;
    document.getElementById("conteudo-container").appendChild(img); 
});
}
function botao8(){//R2D2
    pers = 8;
    removerConteudo();
var textos = [
{content: "R2D2", top: "460px", left: "690px"},
{content: "R2-D2 é um droide astromecânico corajoso e inteligente, conhecido por sua lealdade e habilidades técnicas. Ele desempenha papéis cruciais ao longo da saga Star Wars, desde reparos de naves até salvar vidas. R2-D2 é o companheiro constante de C-3PO e participa de muitas aventuras importantes na história da galáxia", top: "600px", left: "600px"},
{content: "Sua principal arma:", top: "890px", left: "850px"},
{content: "Planeta de Nascimento: Naboo", top: "1250px", left: "320px"},
{content: "Descrição: Naboo é um planeta majestoso conhecido por suas paisagens exuberantes, cidades aquáticas e arquitetura elegante. O planeta tem dois principais habitats: as planícies verdejantes e colinas onde residem os humanos conhecidos como Naboo, e as cidades subaquáticas habitadas pelos Gungans.", top: "1330px", left: "320px"}
];

textos.forEach(function(texto) {
var div = document.createElement("div");
div.className = "texto";
div.style.top = texto.top; 
div.style.left = texto.left;
div.textContent = texto.content;
document.getElementById("conteudo-container").appendChild(div);
});

var imagens = [
{src: "personagens/R2D2.png", top: "700px", left: "330px", width: "300px", height: "150"},
{src: "personagens/nada.png", top: "950px", left: "910px", width: "200px", height: "auto"}
];

imagens.forEach(function(imagem) {
var img = document.createElement("img");
img.src = imagem.src;
img.className = "imagem";
img.style.top = imagem.top;
 img.style.left = imagem.left;
  img.style.width = imagem.width;
   img.style.height = imagem.height;
    document.getElementById("conteudo-container").appendChild(img); 
});
}
function botao9(){//Yoda
    pers = 9;
    removerConteudo();
var textos = [
{content: "Yoda", top: "460px", left: "690px"},
{content: "Yoda é um dos Jedi mais sábios e poderosos de todos os tempos. Mestre Jedi por centenas de anos, ele é conhecido por sua sabedoria profunda, habilidades no uso da Força e destreza com o sabre de luz. Yoda desempenha um papel crucial na formação de muitos Jedi, incluindo Luke Skywalker. Pequeno em estatura, mas imenso em influência, Yoda é um símbolo de sabedoria, paciência e força no universo de Star Wars.", top: "600px", left: "600px"},
{content: "Sua principal arma(Sabre de luz):", top: "890px", left: "850px"},
{content: "Planeta de Nascimento: Desconhecido.", top: "1250px", left: "320px"},
{content: "Espécie: Desconhecido.", top: "1330px", left: "320px"}
];

textos.forEach(function(texto) {
var div = document.createElement("div");
div.className = "texto";
div.style.top = texto.top; 
div.style.left = texto.left;
div.textContent = texto.content;
document.getElementById("conteudo-container").appendChild(div);
});

var imagens = [
{src: "personagens/Yoda.png", top: "700px", left: "310px", width: "300px", height: "150"},
{src: "personagens/SabreVerde.png", top: "950px", left: "910px", width: "200px", height: "auto"}
];

imagens.forEach(function(imagem) {
var img = document.createElement("img");
img.src = imagem.src;
img.className = "imagem";
img.style.top = imagem.top;
 img.style.left = imagem.left;
  img.style.width = imagem.width;
   img.style.height = imagem.height;
    document.getElementById("conteudo-container").appendChild(img); 
});
}
function botao10(){//Qui-Gon-Jin
    pers = 10;
    removerConteudo();
var textos = [
{content: "Qui-Gon Jin", top: "460px", left: "690px"},
{content: "Qui-Gon Jinn é um Mestre Jedi conhecido por sua sabedoria, habilidade no combate e visão independente. Ele treinou Obi-Wan Kenobi e acreditava fortemente na vontade da Força Viva, muitas vezes desafiando o Conselho Jedi. Qui-Gon descobriu Anakin Skywalker em Tatooine e acreditava que ele era o Escolhido destinado a trazer equilíbrio à Força.", top: "600px", left: "600px"},
{content: "Sua principal arma(Sabre de luz):", top: "890px", left: "850px"},
{content: "Planeta de Nascimento: Coruscant", top: "1250px", left: "320px"},
{content: "Descrição: Coruscant é um planeta urbano e a capital da galáxia em muitos períodos. Conhecido como o centro político, cultural e econômico da galáxia, Coruscant é coberto por uma vasta cidade que se estende por toda a sua superfície.", top: "1330px", left: "320px"}
];

textos.forEach(function(texto) {
var div = document.createElement("div");
div.className = "texto";
div.style.top = texto.top; 
div.style.left = texto.left;
div.textContent = texto.content;
document.getElementById("conteudo-container").appendChild(div);
});

var imagens = [
{src: "personagens/QuiGon.png", top: "527px", left: "290px", width: "350px", height: "200"},
{src: "personagens/SabreVerde.png", top: "950px", left: "910px", width: "250px", height: "auto"}
];

imagens.forEach(function(imagem) {
var img = document.createElement("img");
img.src = imagem.src;
img.className = "imagem";
img.style.top = imagem.top;
 img.style.left = imagem.left;
  img.style.width = imagem.width;
   img.style.height = imagem.height;
    document.getElementById("conteudo-container").appendChild(img); 
});
}
function botao11(){//Lando
    pers = 11;
    removerConteudo();
var textos = [
{content: "Lando Calrissian", top: "460px", left: "690px"},
{content: "Lando Calrissian é um charmoso contrabandista, jogador e empresário, conhecido por sua lábia e habilidades estratégicas. Ele originalmente possuía a Millennium Falcon antes de perdê-la para Han Solo em um jogo de sabacc. Lando eventualmente se torna o administrador de Cloud City em Bespin e desempenha um papel crucial na Aliança Rebelde, ajudando a derrubar o Império.", top: "600px", left: "600px"},
{content: "Sua principal arma(Blaster X-8 Night Sniper):", top: "890px", left: "780px"},
{content: "Planeta de Nascimento: Socorro", top: "1250px", left: "320px"},
{content: "Descrição: Socorro é um planeta desértico localizado nas Terras Ermas do Borde Exterior. É conhecido por seu ambiente árido e por ser um refúgio para contrabandistas e aventureiros. A superfície do planeta é marcada por vastas extensões de areia negra e rochas vulcânicas.", top: "1330px", left: "320px"}
];

textos.forEach(function(texto) {
var div = document.createElement("div");
div.className = "texto";
div.style.top = texto.top; 
div.style.left = texto.left;
div.textContent = texto.content;
document.getElementById("conteudo-container").appendChild(div);
});

var imagens = [
{src: "personagens/Lando.png", top: "527px", left: "290px", width: "250px", height: "100"},
{src: "personagens/blasterloco.png", top: "980px", left: "910px", width: "250px", height: "auto"}
];

imagens.forEach(function(imagem) {
var img = document.createElement("img");
img.src = imagem.src;
img.className = "imagem";
img.style.top = imagem.top;
 img.style.left = imagem.left;
  img.style.width = imagem.width;
   img.style.height = imagem.height;
    document.getElementById("conteudo-container").appendChild(img); 
});
}
function botao12(){//Darth Sidious
    pers = 12;
    removerConteudo();
var textos = [
{content: "Darth Sidious", top: "460px", left: "690px"},
{content: "Darth Sidious, também conhecido como Imperador Palpatine, é um dos Sith Lords mais poderosos e malignos da galáxia. Ele começou sua carreira como Senador de Naboo, mas secretamente treinava como Sith. Palpatine manipulou eventos galácticos para ascender ao poder, destruindo a República Galáctica e estabelecendo o Império Galáctico. Ele foi o mentor de Darth Maul, Conde Dookan e Darth Vader.", top: "600px", left: "600px"},
{content: "Sua principal arma(Sabre de luz Sith):", top: "890px", left: "780px"},
{content: "Planeta de Nascimento: Naboo", top: "1250px", left: "320px"},
{content: "Descrição: Naboo é um planeta majestoso conhecido por suas paisagens exuberantes, cidades aquáticas e arquitetura elegante. O planeta tem dois principais habitats: as planícies verdejantes e colinas onde residem os humanos conhecidos como Naboo, e as cidades subaquáticas habitadas pelos Gungans.", top: "1330px", left: "320px"}
];

textos.forEach(function(texto) {
var div = document.createElement("div");
div.className = "texto";
div.style.top = texto.top; 
div.style.left = texto.left;
div.textContent = texto.content;
document.getElementById("conteudo-container").appendChild(div);
});

var imagens = [
{src: "personagens/Sidious.png", top: "557px", left: "300px", width: "270px", height: "120"},
{src: "personagens/SabreVermelho.png", top: "980px", left: "910px", width: "250px", height: "auto"}
];

imagens.forEach(function(imagem) {
var img = document.createElement("img");
img.src = imagem.src;
img.className = "imagem";
img.style.top = imagem.top;
 img.style.left = imagem.left;
  img.style.width = imagem.width;
   img.style.height = imagem.height;
    document.getElementById("conteudo-container").appendChild(img); 
});
}
function botao13(){//Boba Fett
    pers = 13;
    removerConteudo();
var textos = [
{content: "Boba Fett", top: "460px", left: "690px"},
{content: "Boba Fett é um dos caçadores de recompensas mais temidos da galáxia. Clonado do famoso caçador de recompensas Jango Fett, ele foi criado como seu filho e treinado desde cedo. Boba Fett é conhecido por sua armadura Mandaloriana distinta, seu capacete icônico e suas habilidades excepcionais em combate.", top: "600px", left: "580px"},
{content: "Sua principal arma(Blaster EE-3):", top: "910px", left: "800px"},
{content: "Planeta de Nascimento: Kamino", top: "1250px", left: "310px"},
{content: "Descrição: Kamino é um planeta oceânico conhecido por suas tempestades que acontecem constantemente e mares agitados. É famoso por ser o local onde os Clones do Exército da República foram criados. Os habitantes de Kamino, conhecidos como Kaminoanos, são especializados em clonagem e engenharia genética.", top: "1330px", left: "310px"}
];

textos.forEach(function(texto) {
var div = document.createElement("div");
div.className = "texto";
div.style.top = texto.top; 
div.style.left = texto.left;
div.textContent = texto.content;
document.getElementById("conteudo-container").appendChild(div);
});

var imagens = [
{src: "personagens/boba.png", top: "557px", left: "300px", width: "270px", height: "120"},
{src: "personagens/EE4.png", top: "980px", left: "880px", width: "350px", height: "auto"}
];

imagens.forEach(function(imagem) {
var img = document.createElement("img");
img.src = imagem.src;
img.className = "imagem";
img.style.top = imagem.top;
 img.style.left = imagem.left;
  img.style.width = imagem.width;
   img.style.height = imagem.height;
    document.getElementById("conteudo-container").appendChild(img); 
});
}
function botao14(){//Kylo Ren
    pers = 14;
    removerConteudo();
var textos = [
{content: "Kylo Ren", top: "460px", left: "690px"},
{content: "Kylo Ren, nascido Ben Solo, é filho de Leia Organa e Han Solo. Ele foi treinado como Jedi por seu tio, Luke Skywalker, mas acabou se voltando para o Lado Sombrio da Força, tornando-se aprendiz de Snoke e adotando o nome Kylo Ren. Conhecido por seu sabre de luz com guarda transversal, Kylo Ren luta constantemente entre sua herança familiar e sua ambição de poder.", top: "600px", left: "580px"},
{content: "Sua principal arma(Sabre de luz Sith guarda transversal):", top: "910px", left: "800px"},
{content: "Planeta de Nascimento: Chandrila", top: "1250px", left: "310px"},
{content: "Descrição: Chandrila é um planeta pacífico e próspero, localizado no Núcleo Galáctico. Conhecido por suas paisagens serenas e políticas progressistas, Chandrila desempenha um papel importante na história galáctica como um dos mundos fundadores da Nova República.", top: "1330px", left: "310px"}
];

textos.forEach(function(texto) {
var div = document.createElement("div");
div.className = "texto";
div.style.top = texto.top; 
div.style.left = texto.left;
div.textContent = texto.content;
document.getElementById("conteudo-container").appendChild(div);
});

var imagens = [
{src: "personagens/KyloRen.png", top: "557px", left: "280px", width: "300px", height: "150"},
{src: "personagens/SabreRen.png", top: "960px", left: "880px", width: "380px", height: "auto"}
];

imagens.forEach(function(imagem) {
var img = document.createElement("img");
img.src = imagem.src;
img.className = "imagem";
img.style.top = imagem.top;
 img.style.left = imagem.left;
  img.style.width = imagem.width;
   img.style.height = imagem.height;
    document.getElementById("conteudo-container").appendChild(img); 
});
}
function botao15(){//Rey Palpatine
    pers = 15;
    removerConteudo();
var textos = [
{content: "Rey Palpatine", top: "460px", left: "690px"},
{content: "Rey é a protagonista da trilogia sequela de Star Wars. Originalmente conhecida apenas como Rey, ela foi abandonada em Jakku e cresceu como catadora de sucata. Ao longo de sua jornada, Rey descobre que é extremamente sensível à Força e se torna aprendiz de Luke Skywalker e Leia Organa. Apesar de suas origens como neta de Palpatine, ela escolhe adotar o nome Skywalker para honrar seus mestres e heróis.", top: "600px", left: "565px"},
{content: "Sua principal arma(Sabre de luz):", top: "910px", left: "800px"},
{content: "Planeta de Nascimento: Jakku", top: "1250px", left: "310px"},
{content: "Descrição: Jakku é um planeta desértico, conhecido por seus vastos campos de sucata e paisagens áridas. Foi um campo de batalha significativo durante a Guerra Civil Galáctica, deixando para trás destroços de naves estelares e veículos, que agora são uma fonte de subsistência para muitos dos habitantes locais.", top: "1330px", left: "310px"}
];

textos.forEach(function(texto) {
var div = document.createElement("div");
div.className = "texto";
div.style.top = texto.top; 
div.style.left = texto.left;
div.textContent = texto.content;
document.getElementById("conteudo-container").appendChild(div);
});

var imagens = [
{src: "personagens/Rey.png", top: "517px", left: "300px", width: "300px", height: "150"},
{src: "personagens/SabreAzul.png", top: "960px", left: "880px", width: "385px", height: "auto"}
];

imagens.forEach(function(imagem) {
var img = document.createElement("img");
img.src = imagem.src;
img.className = "imagem";
img.style.top = imagem.top;
 img.style.left = imagem.left;
  img.style.width = imagem.width;
   img.style.height = imagem.height;
    document.getElementById("conteudo-container").appendChild(img); 
});
}
function next(){
window.open("http://127.0.0.1:5500/Secronds.html","_blank");
}
function trocarImagem() {
 var imagem = document.getElementById("imagem");
  var imagemOriginal = "personagens/darthvader.png";
   var gif = "personagens/luta.gif";
  imagem.src = gif;
  imagem.classList.add("aumentar");
setTimeout(function() {
     imagem.src = imagemOriginal;
     imagem.classList.remove("aumentar");
     }, 3000);
 }