const banner = document.getElementById('banner-geracao');

const batAdam =document.getElementById('adam-west');
const batMichael =document.getElementById('michael-keaton');
const batVal =document.getElementById('val-kilmer');
const batGeorge =document.getElementById('george-clooney');
const batBale =document.getElementById('christian-bale');
const batBen =document.getElementById('ben-afleck');
const batRobert =document.getElementById('robert-pattinson');

const classRemove = [
    batAdam,
    batMichael,
    batVal,
    batGeorge,
    batBale,
    batBen,
    batRobert
]

function adamBanner(){
    banner.style.backgroundImage = geracoes.adam;
    batAdam.classList.add('checked-out');
}
function michaelBanner(){
    banner.style.backgroundImage = geracoes.michael;
    batMichael.classList.add('checked-out');
}

function valBanner(){   
    banner.style.backgroundImage = geracoes.val;
    batVal.classList.add('checked-out');
}

function georgeBanner(){
    banner.style.backgroundImage = geracoes.george;
    batGeorge.classList.add('checked-out');
}

function baleBanner(){
    banner.style.backgroundImage = geracoes.bale;
    batBale.classList.add('checked-out');
}

function benBanner(){
    banner.style.backgroundImage = geracoes.ben;
    batBen.classList.add('checked-out');
}

function robertBanner(){
    banner.style.backgroundImage = geracoes.robert;
    batRobert.classList.add('checked-out');
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