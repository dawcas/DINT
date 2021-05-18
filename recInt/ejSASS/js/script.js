function redir(h) {
    window.location.href = h;
}

function videoInfo(videoArr) {
    for (let i = 0; i<videoArr.length; i++) {
        let horas = Math.trunc(videoArr[i].duration/(60*60));
        let minutos = Math.trunc(videoArr[i].duration/60 - horas*60);
        let segundos = Math.trunc(videoArr[i].duration%60);
        
        videoArr[i].nextElementSibling.innerHTML = '<ul><li>Título: '+videoArr[i].title+'.</li><li>Duración: '+horas+':'+minutos+':'+segundos+'</li><li>Dimensiones(ancho por alto): '+videoArr[i].videoWidth+'x'+videoArr[i].videoHeight+'</li><li>Formato: '+videoArr[i].currentSrc.split('.').pop()+'</li></ul>';
    }
}
