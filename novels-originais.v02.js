 jQuery(document).ready(function($) {
var dx = '</titulo_novel> </a></div> </div>';var novels = 
`	   
IMG > [/wp-content/uploads/2021/06/KOC_300px.jpg] 
LINK > [/koc-knight-of-chaos]
NOME > [Knight of Chaos] ${dx}

IMG > [/wp-content/uploads/2021/06/Kalui_300px.jpg]  
LINK > [/kalui]
NOME > [Kalui]${dx}

IMG > [/wp-content/uploads/2021/06/RAC-_300px.jpg] 
LINK > [/rac-rei-do-abismo-convocado]
NOME > [Rei do Abismo Convocado]${dx}

IMG > [/wp-content/uploads/2021/05/TOB-300px.jpg] 
LINK > [/tales-of-blood-tob]
NOME > [Tales of Blood]${dx}

IMG > [/wp-content/uploads/2021/04/08.jpg] 
LINK > [/creating-your-rebirth-cyr]
NOME > [Creating Your Rebirth]${dx}

IMG > [/wp-content/uploads/2021/04/10.jpg] 
LINK > [/tr-tower-ranker]
NOME > [Tower Ranker]${dx}

IMG > [/wp-content/uploads/2021/04/11.jpg] 
LINK > [/dt-dungeon-tale]
NOME > [Dungeon Tale]${dx}

IMG > [/wp-content/uploads/2021/05/CE-300px.jpg] 
LINK > [/ce-corvo-escarlate]
NOME > [Corvo Escarlate]${dx}

IMG > [/wp-content/uploads/2021/07/Jack1.jpg] 
LINK > [/jack-park-e-o-misterio-das-realidades-alternativas]
NOME > [Jack Park]${dx}

IMG > [/wp-content/uploads/2021/05/ROC.jpg] 
LINK > [/roc-return-of-chaos]
NOME > [Return of Chaos]${dx}

IMG > [/wp-content/uploads/2021/04/sws-300px.jpg] 
LINK > [/sws-sky-way-slides]
NOME > [Sky Way: Slides]${dx}

IMG > [/wp-content/uploads/2021/06/OUR-300px.jpg] 
LINK > [/our-o-ultimo-rei]
NOME > [O Último Rei]${dx}

IMG > [/wp-content/uploads/2021/06/LDD-300px.jpg] 
LINK > [/lenda-de-demonios-e-deidades-ldd]
NOME > [Lenda de Demônios e Deidades]${dx}


`
.replace(/NOME > \[/g,'"> <titulo_novel>')
.replace(/IMG > \[/g,'<div class="novel_bloco"> <div class="novel_cartao"> <img src="')
.replace(/LINK > \[/g,'" /> <a href="')
.replace(/\]/g, '');

$("#Originais_Rank")
.replaceWith(novels+dx)
	
	
 });
