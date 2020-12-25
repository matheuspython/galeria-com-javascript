var listaUl = document.querySelector('ul#galeria')
var telaToda = document.querySelector('.img-tela-toda')


function criaElemento(img) {
    let newLi = document.createElement('li')
    let newImage = document.createElement('img')
    newImage.setAttribute('src', img)
    newImage.setAttribute('onclick', 'telatoda(' + '"' + img + '"' + ')')
    newLi.appendChild(newImage)
    listaUl.appendChild(newLi)
}

criaElemento('https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F-NacsFoNL0aQ%2FUDtxaeZSFqI%2FAAAAAAAAJbw%2F1slNXazTeKs%2Fs1600%2Fthe_great_saiyaman_by_qbatmanp-d49hjyr.jpg&f=1&nofb=1')
criaElemento('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F6f%2Fea%2F14%2F6fea1479cd872449c53603bc6b3ab1e9.jpg&f=1&nofb=1')
criaElemento('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.lolwot.com%2Fwp-content%2Fuploads%2F2015%2F04%2F20-of-the-best-anime-series-ever-created-3.jpg&f=1&nofb=1')
criaElemento('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FwQC0Fs0HhtL-8NXxcXx_-_5FBRs%3D%2F0x0%3A1280x670%2Ffit-in%2F1200x630%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F11488201%2F1445336432_df7db4737067ae17119da19c5e1027b3.jpeg&f=1&nofb=1')
criaElemento('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FAIJNLXW_QtI%2Fmaxresdefault.jpg&f=1&nofb=1')
criaElemento('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDsE0KmLyJM4%2Fmaxresdefault.jpg&f=1&nofb=1')
criaElemento('https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fs1.picswalls.com%2Fwallpapers%2F2015%2F09%2F20%2Fanime_061547368_272.jpg&f=1&nofb=1')
criaElemento('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2017%2F10%2F24%2F474681-solo-anime_girls-anime.jpg&f=1&nofb=1')
criaElemento('https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fhinhanhdep.net%2Fwp-content%2Fuploads%2F2017%2F05%2Fanh-anime-boy-dep-22.jpg&f=1&nofb=1')
criaElemento('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F0xMEdc2LKN4%2Fmaxresdefault.jpg&f=1&nofb=1')
criaElemento('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FLXZG-_9ybQ8%2Fmaxresdefault.jpg&f=1&nofb=1')
criaElemento('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg4.looper.com%2Fimg%2Fgallery%2Fanime-superpowers-ranked-worst-to-best%2Fintro-1576021246.jpg&f=1&nofb=1')
criaElemento('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hdwallpapers.in%2Fdownload%2Fanime_girl_2-1920x1080.jpg&f=1&nofb=1')
criaElemento('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F1c%2Fa2%2F04%2F1ca2048715d76a26ac0040264ce3e24c--charlotte-anime.jpg&f=1&nofb=1')
criaElemento('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2018%2F09%2F26%2F190753-Yuru_Yuri-anime-Toshinou_Kyouko-blonde-anime_girls.jpg&f=1&nofb=1')
criaElemento('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FtkCpsklOEKM%2Fmaxresdefault.jpg&f=1&nofb=1')

function telatoda(imageTela) {
    telaToda.style.display = 'block'
    telaToda.style.background = 'url(' + imageTela + ')'
}

function fechar() {
    telaToda.style.display = 'none'
}