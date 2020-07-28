function workBackground(){
    const canvas = document.querySelector('#back')
    const conteiner = document.querySelector('.testBack')
    const ctx = canvas.getContext('2d')
    
    const cw = canvas.width = window.innerWidth
    const ch = canvas.height = 100

    for( let x = 0; x < cw; x++ ){
        for( let y = 0; y < ch; y++ ){
            ctx.fillStyle = 'hsl(0, 0%, ' + ( 100 - ( Math.random() * 15 ) ) + '%)';
            ctx.fillRect(x, y, 1, 1);
        }
    }
    
    conteiner.style.background = 'url(' + canvas.toDataURL() + ')';
}