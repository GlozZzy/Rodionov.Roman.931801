function open_open_(e){
    document.getElementById(e).style.display = 'block';
    document.querySelector('.transparent_block').style.display = 'block';
};

const a = document.querySelector('.transparent_block')
a.addEventListener('click', function () {
    document.getElementById('news1').style.display = 'none';
    document.getElementById('news2').style.display = 'none';
    document.getElementById('news3').style.display = 'none';
    document.querySelector('.transparent_block').style.display = 'none';})
