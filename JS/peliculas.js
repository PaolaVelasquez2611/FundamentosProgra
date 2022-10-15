const contenedorReco = document.getElementById('contenedorReco')
const contenedorTrend =document.getElementById('contenedorTrend')
const idBanner = document.getElementById('idBanner')
const title = document.getElementById('title')
const descrip = document.getElementById('descrip') 

class Peliplu {
    constructor(fotoBanner, fotoTarjeta, fotoRating, title, description,id) {
        this.fotoBanner=fotoBanner
        this.fotoTarjeta=fotoTarjeta
        this.fotoRating=fotoRating
        this.title=title
        this.description=description
        this.id=id
    }

}
//test

let strangerThings = new Peliplu('./assets/st2.jpg','./assets/ST1.jpg','./assets/fivestars.png', 'STRANGER THINGS','lol niños & hell I guess','stranger')
let monsterHigh = new Peliplu('./assets/mhb.jpg','./assets/MH.jpg','./assets/fivestars.png', 'MONSTER HIGH','cool monsters with high clothes budget','monster')
let myLittlePony = new Peliplu('./assets/mlpb.webp','./assets/MLP.jpg','./assets/fivestars.png', 'MY LITTLE PONY','The Power of Friendship >','my')
let friends = new Peliplu('./assets/friendsb.webp','./assets/friendst.webp','./assets/fivestars.png', 'FRIENDS','A bunch of guys drinking coffee and talking about life','friends')
let bigBangTheory = new Peliplu('./assets/bbtb.jpg','./assets/bbtt.jpg','./assets/fivestars.png', 'BIG BANG THEORY','Science is Fun','bbt')
let gameofThrones = new Peliplu('./assets/gotb.jpg','./assets/gott.png','./assets/fivestars.png', 'GAME OF THRONES','Everyone hates Joffrey','got')
let avatar = new Peliplu('./assets/avtb.jpg','./assets/avtt.jpg','./assets/fivestars.png', 'AVATAR','Long ago the fire nation attacked','avatar')
let myHeroAcademia = new Peliplu('./assets/mhab.jpg','./assets/mhat.webp','./assets/fivestars.png', 'MY HERO ACADEMIA','Teenagers with Superpowers','myhero')
let haikyuu = new Peliplu('./assets/haikb.jpg','./assets/haikt.webp','./assets/fivestars.png', 'HAIKYU!!!','Sport Anime TM','haikyuu')
let shera = new Peliplu('./assets/sherab.jpg','./assets/sherat.webp','./assets/fivestars.png', 'SHE-RA','The Power of Friendship Part 2','shera')
let arcane = new Peliplu('./assets/arcb.jpg','./assets/arct.jpg','./assets/fivestars.png', 'ARCANE','The only time LOL is Valid','arcane')
let heartStopper = new Peliplu('./assets/hsb.jpg','./assets/hst.jpg','./assets/fivestars.png', 'HEARTSTOPPER','Nick Nelson gives golden retriver vibes.','heart')
let minions = new Peliplu('./assets/minionsb.jpg','./assets/minions.jpg','./assets/fivestars.png', 'MINIONS','“Banana!”-Stuart','minions')
let brooklyn99 = new Peliplu('./assets/bk99b.jpg','./assets/bk99.jpg','./assets/fivestars.png', 'BROOKLYN 99','Police man with an attitude','99')


let recommended = []
let trending = []


function loadNetflix(){
    recommended.push(strangerThings,monsterHigh,friends,bigBangTheory,gameofThrones,avatar,minions)
    trending.push(myLittlePony,myHeroAcademia,haikyuu,shera,arcane,heartStopper,brooklyn99)
    let opciones
    recommended.forEach((peli)=>{
        opciones= `
        <div class="pain">
            <img id=${peli.id} src=${peli.fotoTarjeta} class="serie1" onClick="yes(this)"/>
            <img id=${peli.id} src=${peli.fotoRating} class="rating"/>
        </div>
        `
       
        contenedorReco.innerHTML += opciones;
       
    })
    trending.forEach((peli)=>{
        opciones= `
        <div class="pain">
            <img id=${peli.id} src=${peli.fotoTarjeta} class="serie1" onClick="yes(this)"/>
            <img id=${peli.id} src=${peli.fotoRating} class="rating"/>
        </div>
        `
       
        contenedorTrend.innerHTML += opciones;
       
    })

    
   
}

function yes(foto){
    id = foto.id
    console.log(foto.id)
    for (let index = 0; index < recommended.length; index++) {
        if(id==recommended[index].id){
            idBanner.src=recommended[index].fotoBanner
            title.innerHTML=recommended[index].title
            descrip.innerHTML=recommended[index].description
        }
        
    }
    for (let index = 0; index < trending.length; index++) {
        if(id==trending[index].id){
            idBanner.src=trending[index].fotoBanner
            title.innerHTML=trending[index].title
            descrip.innerHTML=trending[index].description
        }
        
    }

}

window.addEventListener('load',loadNetflix)