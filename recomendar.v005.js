 jQuery(document).ready(function($) {
  
  var novels = [


'IMG > [/wp-content/uploads/2021/08/ADT-300x400-1.webp]'+
'LINK > [/adt-a-distopia-de-tykon/]'+
'NOME > [A Distopia de Tykon]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-52.webp]'+
'LINK > [/taf-eu-adicionei-todos-os-meus-atributos-em-forca/]'+
'NOME > [Adicionei Todos os Meus Atributos em Força]',

'IMG > [/wp-content/uploads/2021/08/SVG-3x4-1.webp]'+
'LINK > [/svg-a-segunda-vinda-da-gula/]'+
'NOME > [ A Segunda Vinda da Gula]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-19.webp]'+
'LINK > [ /ame-academia-dos-magos-de-elite/]'+
'NOME > [Academia dos Magos de Elite]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-20.webp]'+
'LINK > [/asc-ascencao-sem-classe/]'+
'NOME > [Ascensão Sem Classe]',

'IMG > [/wp-content/uploads/2021/08/BE-300.webp]'+
'LINK > [/bam-bella-a-eternum/]'+
'NOME > [Bella a Eternum: As Eternas Guerras de Outro Mundo]',

'IMG > [/wp-content/uploads/2021/08/BI-3x4-1.webp]'+
'LINK > [/bi-bruxo-inumano/]'+
'NOME > [Bruxo Inumano]',
 
'IMG > [/wp-content/uploads/2021/08/Capa-300x400-55.webp]'+
'LINK > [/coeus/]'+
'NOME > [Coeus?]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-21.webp]'+
'LINK > [/ce-corvo-escarlate]'+
'NOME > [Corvo Escarlate]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-7.webp]'+
'LINK > [/creating-your-rebirth-cyr/]'+
'NOME > [Creating Your Rebirth]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-30.webp]'+
'LINK > [/lgp-deixe-me-jogar-em-paz/]'+
'NOME > [Deixe-me Jogar em Paz]',

'IMG > [/wp-content/uploads/2021/08/DS3x4.webp]'+
'LINK > [/ds-destino-subvertido/]'+
'NOME > [Destino Subvertido]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-22.webp]'+
'LINK > [ /dcsd-divindade-contra-o-sistema-divino/]'+
'NOME > [Divindade: Contra o Sistema Divino]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-24.webp]'+
'LINK > [/dn-manga-dungeon-nursery/]'+
'NOME > [Dungeon Nursery]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-9.webp]'+
'LINK > [/dt-dungeon-tale/]'+
'NOME > [Dungeon Tale]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-1.webp]'+
'LINK > [/esqueleto-nv1/]'+
'NOME > [Esqueleto Nível 1]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-42.webp]'+
'LINK > [/erp-eu-reencarnei-como-um-peixinho/]'+
'NOME > [Eu Reencarnei Como Um Peixinho]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-12.webp]'+
'LINK > [/eu-reencarnei-em-uma-maquina-de-vendas-rmv/]'+
'NOME > [Eu Reencarnei em Uma Máquina de Vendas]',

'IMG > [/wp-content/uploads/2021/08/SUN-3x4-1.webp]'+
'LINK > [/sun-eu-sou-o-unico-necromante/]'+
'NOME > [Eu Sou o Único Necromante]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-17.webp]'+
'LINK > [/pto-exaltem-o-orc/]'+
'NOME > [Exaltem o Orc!]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-26.webp]'+
'LINK > [/gate-of-god-index/]'+
'NOME > [Gate of God]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-25.webp]'+
'LINK > [/gb-glutton-berserker-index/]'+
'NOME > [Glutton Berserker]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-18.webp]'+
'LINK > [/grimgar-de-fantasia-e-cinzas-gfc/]'+
'NOME > [Hai to Gensou no Grimgar]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-10.webp]'+
'LINK > [/hc-homicida-convocado/]'+
'NOME > [Homicida Convocado]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-27.webp]'+
'LINK > [/jack-park-e-o-misterio-das-realidades-alternativas/]'+
'NOME > [Jack Park e o Mistério das Realidades Alternativas]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-56.webp]'+
'LINK > [kalui]'+
'NOME > [Kalui]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-28.webp]'+
'LINK > [/koc-knight-of-chaos/]'+
'NOME > [Knight of Chaos]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-29.webp]'+
'LINK > [/lenda-de-demonios-e-deidades-ldd/]'+
'NOME > [Lendas de Demônios e Deidades]',

'IMG > [/wp-content/uploads/2021/08/Lovecraft.webp]'+
'LINK > [/lovecraft/]'+
'NOME > [Lovecraft]',

'IMG > [/wp-content/uploads/2021/08/Lucia-3x4-1.webp]'+
'LINK > [/lucia/]'+
'NOME > [Lucia]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-31.webp]'+
'LINK > [/mai-o-mago-do-arco-iris-retorna/]'+
'NOME > [Mago do Arco-Íris]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-32.webp]'+
'LINK > [/makai-hongi-mh/]'+
'NOME > [Makai Hongi]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-23.webp]'+
'LINK > [/dmd-e-dificil-se-misturar-com-demonios/]'+
'NOME > [Manhua: É Difícil se Misturar com Demônios]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-33.webp]'+
'LINK > [/m-mp-monster-paradise]'+
'NOME > [Manhua: Monster Paradise]',
 
'IMG > [/wp-content/uploads/2021/08/Capa-300x400-34.webp]'+
'LINK > [/mmpe-monster-pet-evolution/]'+
'NOME > [Manhua: Monster Pet Evoluiton]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-49.webp]'+
'LINK > [/m-shs-summoning-the-holy-sword/]'+
'NOME > [Manhua: Summoning the Holy Sword]',

'IMG > [/wp-content/uploads/2021/08/mck-3x4-1.webp]'+
'LINK > [/mck-mestre-cacador-k/]'+
'NOME > [Mestre Caçador K]',
'IMG > [/wp-content/uploads/2021/08/MSO-3x4-1.webp]'+
'LINK > [/mso-meu-sistema-ocioso/]'+
'NOME > [Meu Sistema Ocioso]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-2.webp]'+
'LINK > [/mp-monster-paradise-index/]'+
'NOME > [Monster Paradise]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-36.webp]'+
'LINK > [/mpe-monster-pet-evolution/]'+
'NOME > [Monster Pet Evolution]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-4.webp]'+
'LINK > [/my-dragon-system-mds/]'+
'NOME > [My Dragon System]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-58.webp]'+
'LINK > [/my-pick-up-artist-system-mps/]'+
'NOME > [My Pick Up Artist System]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-6.webp]'+
'LINK > [/nr-nanomancer-reborn-index/]'+
'NOME > [Nanomancer Reborn]',

'IMG > [/wp-content/uploads/2021/08/NED-3x4-1.webp]'+
'LINK > [/nascimento-da-espada-demoniaca-ned/]'+
'NOME > [Nascimento da Espada Demoníaca]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-40.webp]'+
'LINK > [/oz-odisseia-de-zett/]'+
'NOME > [Odisseia de Zett]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-35.webp]'+
'LINK > [/mo-o-mundo-online/]'+
'NOME > [O Mundo Online]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-13.webp]'+
'LINK > [/o-mundo-dos-sistemas-sbs/]'+
'NOME > [O Mundo dos Sistemas]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-37.webp]'+
'LINK > [/mrm-o-mundo-esta-repleto-de-monstros-e-eu-estou-curtindo-esta-vida/]'+
'NOME > [O Mundo Está Repleto de Monstro]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-16.webp]'+
'LINK > [/osi-o-sistema-incubo/]'+
'NOME > [O Sistema Íncubo]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-5.webp]'+
'LINK > [/ttd-o-tutorial-e-tao-dificil/]'+
'NOME > [O Tutorial é Tão Difícil]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-39.webp]'+
'LINK > [/our-o-ultimo-rei/]'+
'NOME > [O Ultimo Rei]',
'IMG > [/wp-content/uploads/2021/08/Capa-300x400-41.webp]'+
'LINK > [/pdd-paragon-da-destruicao/]'+
'NOME > [Paragon da Destruição]',
 
'IMG > [/wp-content/uploads/2021/08/Capa-300x400-59.webp]'+
'LINK > [/pd-plague-doctor/]'+
'NOME > [Plague Doctor]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-60.webp]'+
'LINK > [/rml-realm-of-myths-and-legends/]'+
'NOME > [Realm of Myths and Legends]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-45.webp]'+
'LINK > [/rvp-regressor-da-vida-passada/]'+
'NOME > [Regressor da Vida Passada]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-44.webp]'+
'LINK > [/rac-rei-do-abismo-convocado]'+
'NOME > [Rei do Abismo Convocado]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-47.webp]'+
'LINK > [/roc-return-of-chaos/]'+
'NOME > [Return of Chaos]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-46.webp]'+
'LINK > [/rise-of-the-godking-rgk/]'+
'NOME > [Rise of The Godking]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-61.webp]'+
'LINK > [/sistema-divino-a-evolucao-de-um-gatinho-sdeg/]'+
'NOME > [Sistema Divino: A Evolução de Um Gatinho]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-62.webp]'+
'LINK > [ /sea-sistema-de-evolucao-alienigena/]'+
'NOME > [Sistema de Evolução Alienígena]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-11.webp]'+
'LINK > [/sistema-de-tecnologia-avancada-do-estudioso/]'+
'NOME > [Sistema de Tecnologia Avançada do Estudioso]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-15.webp]'+
'LINK > [/o-sistema-do-ultimo-desejo-sud/]'+
'NOME > [Sistema do Último Desejo]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-51.webp]'+
'LINK > [/sws-sky-way-slides/]'+
'NOME > [Sky Way: Sides]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-63.webp]'+
'LINK > [/pare-fogo-amigo-sff/]'+
'NOME > [Stop Friendly Fire]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-48.webp]'+
'LINK > [/summoning-the-holy-sword-shs/]'+
'NOME > [Summoning the Holy Sword]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-50.webp]'+
'LINK > [ /sm-supreme-magus/]'+
'NOME > [Supreme Magus]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-53.webp]'+
'LINK > [/tob-tales-of-blood/]'+
'NOME > [Tales of Blood]',

'IMG > [ /wp-content/uploads/2021/08/Capa-300x400-54.webp]'+
'LINK > [ /the-avalon-of-five-elements-index/]'+
'NOME > [The Avalon Of Five Elements]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-3.webp]'+
'LINK > [/the-evolution-of-a-goblin-to-the-peak-egp/]'+
'NOME > [The Evolution of a Goblin to the Peak]',

'IMG > [/wp-content/uploads/2021/08/TLM-3x4-1.webp]'+
'LINK > [tlm-the-legendary-mechanic]'+
'NOME > [The Legendary Mechanic]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-43.webp]'+
'LINK > [/pt-the-paradise-tower/]'+
'NOME > [The Paradise Tower]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-8.webp]'+
'LINK > [/tr-tower-ranker/]'+
'NOME > [Tower Ranker]',

'IMG > [/wp-content/uploads/2021/08/virus-3x4-1.webp]'+
'LINK > [/tv-transmigrado-como-um-virus/]'+
'NOME > [Transmigrado Como Um Vírus]',

'IMG > [/wp-content/uploads/2021/08/Capa-300x400-38.webp]'+
'LINK > [/umv-um-monstro-voraz/]'+
'NOME > [Um Monstro Voraz]',
'IMG > [/wp-content/uploads/2021/08/UC-3x4-1.webp]'+
'LINK > [/uc-upando-comendo/]'+
'NOME > [Upando Comendo]
 ];
 
 Array.prototype.shuffle = function() {

    let indice = this.length;
    
    while(indice) {
        const indiceAleatorio = Math.floor(Math.random() * indice--);
        [this[indice], this[indiceAleatorio]] = 
            [this[indiceAleatorio], this[indice]];} return this;} 
novels.shuffle();


 var inici = '<div class="bloco_recomendar"> ';
  var inici1 = '<div class="novel_bloco"> ';
var xd = '<div class="novel_cartao rcm"> <img src="';var dx = '</titulo_novel> </a> </div>';
var ultimo =  novels[novels.length - 1];
var ultimo1 =  novels[novels.length - 2];
var ultimo2 =  novels[novels.length - 3];
var fim = '</div>';
var renome = 
ultimo.replace(/IMG > \[/g,xd).replace(/LINK > \[/g,'" /> <a href="').replace(/NOME > \[/g,'"> <titulo_novel>').replace(/\]/g, '') +dx+ 
ultimo1.replace(/IMG > \[/g,xd).replace(/LINK > \[/g,'" /> <a href="').replace(/NOME > \[/g,'"> <titulo_novel>').replace(/\]/g, '')+dx + 
ultimo2.replace(/IMG > \[/g,xd).replace(/LINK > \[/g,'" /> <a href="').replace(/NOME > \[/g,'"> <titulo_novel>').replace(/\]/g, '')+dx;

var renome1 = ultimo.replace(/IMG > \[/g,xd).replace(/LINK > \[/g,'" /> <a href="').replace(/NOME > \[/g,'"> <titulo_novel>').replace(/\]/g, '') +dx


  $("#Recomendar3").replaceWith(inici+renome+fim);
  $("#Recomendar").replaceWith(inici1+renome1).css("display", "block");$('#rcmdc').css('box-shadow','inset 0 0 15px black').css('background','#00000026');
  $(".bloco_recomendar")
  .css('display', 'flex')
  .css('justify-content','center')  ;});
