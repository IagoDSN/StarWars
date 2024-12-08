 function removerConteudo() {
     var container = document.getElementById("conteudo-container");
     while (container.firstChild) {
     container.removeChild(container.firstChild); 
    } 
}

        let pers = 0;
        function botao1(){ //Darth Maul
            pers = 1;
            removerConteudo();
var textos = [
    {content: "Darth Maul", top: "460px", left: "670px"},
    {content: "Darth Maul, conhecido por sua aparência intimidadora e habilidades em combate. Originário do planeta Dathomir, ele foi treinado como um Irmão da Noite antes de se tornar aprendiz de Darth Sidious. Maul é famoso por seu sabre de luz de duas lâminas e suas tatuagens faciais vermelhas e pretas.", top: "600px", left: "600px"},
    {content: "Sua principal arma(Sabre de luz Sith duplo):", top: "890px", left: "820px"},
    {content: "Planeta de Nascimento: Dathomir", top: "1290px", left: "350px"},
    {content: "Descrição: Um planeta sombrio e misterioso no universo de Star Wars, conhecido por suas florestas densas e ambiente hostil. É o lar dos Zabraks, incluindo Darth Maul, e das Irmãs da Noite, um clã de poderosas feiticeiras que usam a magia do Lado Sombrio da Força.", top: "1360px", left: "350px"}
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
     {src: "persoanes/Maul.png", top: "570px", left: "270px", width: "400px", height: "300"},
      {src: "persoanes/SabreDuplo.png", top: "950px", left: "950px", width: "250px", height: "auto"}
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
        function botao2(){ //StormTrooper
            pers = 2;
            removerConteudo();
var textos = [
    {content: "StormTrooper", top: "460px", left: "690px"},
    {content: "Os Stormtroopers são soldados de elite do Império Galáctico no universo de Star Wars. Reconhecíveis por suas armaduras brancas, eles são responsáveis por manter a ordem e executar a vontade do Imperador. Originalmente derivados dos clones do Exército Clone, os Stormtroopers se tornaram símbolos do poder militar do Império.", top: "600px", left: "555px"},
    {content: "Sua principal arma(Blaster E-11):", top: "890px", left: "850px"},
    {content: "Planeta de Nascimento: Diversos", top: "1290px", left: "320px"},
    {content: "O Império Galáctico e a Primeira Ordem recrutam soldados de várias espécies, mas predominantemente humanos. Esta preferência reflete os pontos de vista xenofóbicos do Império, que valoriza a uniformidade e a lealdade dos humanos.", top: "1360px", left: "320px"}
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
     {src: "persoanes/StormTrooper.png", top: "500px", left: "290px", width: "250px", height: "150"},
      {src: "persoanes/E-11.png", top: "980px", left: "900px", width: "350px", height: "auto"}
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
        function botao3(){//Comandante Cody
            pers = 3;
            removerConteudo();
var textos = [
    {content: "Comandante Cody", top: "460px", left: "690px"},
    {content: "Comandante Cody, cujo nome completo é CC-2224, é um personagem da franquia Star Wars. Ele é um soldado clone que lutou nas Guerras Clônicas ao lado do General Jedi Obi-Wan Kenobi", top: "600px", left: "555px"},
    {content: "Sua principal arma(DC-15):", top: "890px", left: "850px"},
    {content: "Planeta de Nascimento: Kamino", top: "1290px", left: "320px"},
    {content: "Descrição: Kamino é um planeta oceânico conhecido por suas tempestades que acontecem constantemente e mares agitados. É famoso por ser o local onde os Clones do Exército da República foram criados. Os habitantes de Kamino, conhecidos como Kaminoanos, são especializados em clonagem e engenharia genética.", top: "1360px", left: "320px"}
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
     {src: "persoanes/Comandante.png", top: "650px", left: "290px", width: "272px", height: "375"},
      {src: "persoanes/DC-15.png", top: "980px", left: "900px", width: "350px", height: "auto"}
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
        function botao4(){//Conde Dookan
            pers = 4;
            removerConteudo();
var textos = [
    {content: "Conde Dookan", top: "460px", left: "690px"},
    {content: "O Conde Dookan, também conhecido como Darth Tyranus, é um personagem central na franquia Star Wars, particularmente na trilogia prequela. Ele desempenha um papel crucial na saga ao se tornar um dos principais antagonistas que ajudam a iniciar as Guerras Clônicas e a queda da República.", top: "600px", left: "555px"},
    {content: "Sua principal arma(Sabre de luz Sith):", top: "890px", left: "850px"},
    {content: "Planeta de Nascimento: Serenno", top: "1290px", left: "320px"},
    {content: "Serenno é conhecido por seu clima temperado e diversas paisagens naturais. O planeta possui florestas densas, montanhas majestosas e vastas planícies. Essas características tornam Serenno um lugar visualmente impressionante e agradável para viver.", top: "1360px", left: "320px"}
            //Troque os textos para qual você desejar 'Basta apagar e escrever novamente'
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
     {src: "persoanes/conde.png", top: "680px", left: "240px", width: "352px", height: "975"}, //Nas funções a seguir alter o "src" da imagem para qual você deseja
      {src: "personagens/sabreVermelho.png", top: "980px", left: "900px", width: "350px", height: "auto"}
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
        function botao5(){//Basta copiar a função anterior e colar aqui, em seguida mude o local da imagem e coloque a sua escolha, Width é a largura e height a altura. Você também pode mudar a posção alterando os valores de top e left
            pers = 5;
        }
        function botao6(){
            pers = 6;
        }
        function botao7(){
            pers = 7;
        }
        function botao8(){
            pers = 8;
        }
        function botao9(){
            pers = 9;
        }
        function botao10(){
            pers = 10;
        }
        function botao11(){
            pers = 11;
        }
        function botao12(){
            pers = 12;
        }
        function botao13(){
            pers = 13;
        }
        function botao14(){
            pers = 14;
        }
        function botao15(){
            pers = 15;
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
         function avaliar() {
             document.getElementById('quardado').style.display = 'flex'
              document.getElementById('btnfechar').style.display = 'flex'
              document.getElementById('textin').style.display = 'flex'
              var squares = document.querySelectorAll('.square');
            squares.forEach(function(square) {
                 square.style.display = 'flex';
            });
         }  
         function fechar() {
            document.getElementById('quardado').style.display = 'none'
            document.getElementById('btnfechar').style.display = 'none'
            document.getElementById('textin').style.display = 'none'
            var squares = document.querySelectorAll('.square');
            squares.forEach(function(square) {
                 square.style.display = 'none';
            });
         }