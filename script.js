const banner = document.getElementById('banner-geracao');
const bannerText = document.querySelector("#banner-geracao p")

const batAdam =document.getElementById('adam-west');
const batMichael =document.getElementById('michael-keaton');
const batVal =document.getElementById('val-kilmer');
const batGeorge =document.getElementById('george-clooney');
const batBale =document.getElementById('christian-bale');
const batBen =document.getElementById('ben-afleck');
const batRobert =document.getElementById('robert-pattinson');


function adamBanner(){
    banner.style.backgroundImage = geracoes.adam;
    bannerText.innerText = sinopseAge.adam
}
function michaelBanner(){
    banner.style.backgroundImage = geracoes.michael;
    bannerText.innerText = sinopseAge.michael;
}

function valBanner(){   
    banner.style.backgroundImage = geracoes.val;
    bannerText.innerText = sinopseAge.val;
}

function georgeBanner(){
    banner.style.backgroundImage = geracoes.george;
    bannerText.innerText = sinopseAge.george;
}

function baleBanner(){
    banner.style.backgroundImage = geracoes.bale;
    bannerText.innerText = sinopseAge.bale
}

function benBanner(){
    banner.style.backgroundImage = geracoes.ben;
    bannerText.innerText = sinopseAge.ben;
}

function robertBanner(){
    banner.style.backgroundImage = geracoes.robert;
    bannerText.innerText = sinopseAge.robert;
}

const geracoes = {
    adam: 'url("./assets/geracoes/batman-adam-west-1966_cke.webp")',
    michael: 'url("./assets/geracoes/batman-michael-keaton-1989_cke.webp")',
    val: 'url("./assets/geracoes/batman-val-kilmer-1995_cke.webp")',
    george: 'url("./assets/geracoes/batman-george-clooney-1997_cke.webp")',
    bale: 'url("./assets/geracoes/batman-christian-bale-2005_cke.webp")',
    ben: 'url("./assets/geracoes/batman-ben-afleck-2016.webp")',
    robert: 'url("./assets/geracoes/batman-robert-pattinson-2022.jpg")',
}

const sinopseAge = {
    adam: "Em Gotham City, Charada (Frank Gorshin), Pinguim (Burgess Meredith), Coringa (Cesar Romero) e Mulher-Gato (Lee Meriweather) roubam uma invenção secreta e planejam usá-la de forma maléfica. Além disto, planejam também destruir o Homem-Morcego e o Menino-Prodígio.",
    michael: "Em Gotham City o milionário Bruce Wayne (Michael Keaton), que quando jovem teve os pais assassinados por bandidos, resolve combater o crime como Batman, o Homem-Morcego. Mas chega o dia em que o vilão Coringa (Jack Nicholson) decide dominar a cidade e se torna um grande desafio para o super-herói.",
    val: "Duas-Caras (Tommy Lee Jones) e Charada (Jim Carrey), dois excêntricos bandidos, decidem descobrir a identidade do Homem-Morcego (Val Kilmer) para depois mata-lo. Este por sua vez recebe a ajuda de um jovem (Chris O'Donnell) que tem sede de vingança, por ter perdido a família em um acidente provocado exatamente pelo Duas-Caras.",
    george: "Batman e Robin (1997), o longa do Batman com George Clooney aborda a união entre o Homem-Morcego, o Robin e a Batgirl para combater a equipe de vilões formada por Bane, Senhor Frio e Hera Venenosa, cujo objetivo é dominar Gotham.",
    bale: "Após dois anos desde o surgimento do Batman (Christian Bale), os criminosos de Gotham City têm muito o que temer. Com a ajuda do tenente James Gordon (Gary Oldman) e do promotor público Harvey Dent (Aaron Eckhart), Batman luta contra o crime organizado. Acuados com o combate, os chefes do crime aceitam a proposta feita pelo Coringa (Heath Ledger) e o contratam para combater o Homem-Morcego.",
    ben: "Em Batman Vs Superman - A Origem Da Justiça, o confronto entre Superman (Henry Cavill) e Zod (Michael Shannon) em Metrópolis fez com que a população mundial se dividisse acerca da existência de extra-terrestres na Terra. Enquanto muitos consideram o Superman como um novo deus, há aqueles que consideram extremamente perigoso que haja um ser tão poderoso sem qualquer tipo de controle. Bruce Wayne (Ben Affleck) é um dos que acreditam nesta segunda hipótese. Sob o manto de um Batman violento e obcecado, ele investiga o laboratório de Lex Luthor (Jesse Eisenberg), que descobriu uma pedra verde que consegue eliminar e enfraquecer os filhos de Krypton.",
    robert: "Batman (The Batman, no original) segue o segundo ano de Bruce Wayne (Robert Pattinson) como o herói de Gotham, causando medo nos corações dos criminosos da sombria cidade. Com apenas alguns aliados de confiança - Alfred Pennyworth (Andy Serkis) e o tenente James Gordon (Jeffrey Wright) - entre a rede corrupta de funcionários e figuras importantes do distrito, o vigilante solitário se estabeleceu como a única personificação da vingança entre seus concidadãos. Durante uma de suas investigações, Bruce acaba envolvendo a si mesmo e Gordon em um jogo de gato e rato, ao investigar uma série de maquinações sádicas em uma trilha de pistas enigmáticas estabelecida pelo vilão Charada. Quando o trabalho acaba o levando a descobrir uma onda de corrupção que envolve o nome de sua família, pondo em risco a própria integridade e as memórias que tinha sobre seu pai, Thomas Wayne, as evidências começam a chegar mais perto de casa, precisando, Batman, forjar novos relacionamentos, para assim desmascarar o culpado e fazer justiça ao abuso de poder e à corrupção que há muito tempo assola Gotham City.",
}

function hideModal(){
    let modal = document.getElementById("modal");
    modal.style.visibility = "hidden";
}

function showModal(){
    let modal = document.getElementById("modal");
    modal.style.visibility = "visible";
    modal.style.opacity = 1

    const cardModal = document.getElementById("modal-content");
    cardModal.innerHTML = "";

    const modalBackG = document.createElement("div");
    modalBackG.style.backgroundImage = banner.style.backgroundImage;
    modalBackG.className = "modalBackG";

    const modalText = document.createElement("span");
    modalText.innerText = bannerText.textContent;
    modalText.className = "modalText";

    cardModal.appendChild(modalBackG);
    cardModal.appendChild(modalText);
};

 console.log(bannerText)