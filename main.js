let boy = document.querySelector('.boy');
let block = document.querySelector('.block');
function jump() {
    if(boy.classList != 'jump'){
    boy.classList.add('jump');
    }
    setTimeout(() => {
       boy.classList.remove('jump')
    }, 500)
}

let tekshiruv = setInterval(function(){
    let boyTop = perceInt(window.getComputedStyle(boy).getPropertyValue('top'));
    let blockLeft = perceInt(window.getComputedStyle(block).getPropertyValue('left'));
    if(blockLeft < 20 && blockLeft > 0 && boyTop >= 130){
        boy.style.animation = 'none';
        block.style.animation = 'none';
        block.style.display = 'none';
        alert('GAME OVER!');
    }
}, 10)