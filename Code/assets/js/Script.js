function left_left_() {
    document.getElementById('blue').style.width = '740px';
    document.querySelector('#blue > img').style.display = 'block';
    document.querySelector('#blue > img').style.width = 'auto';
    document.getElementById('green').style.width = '20px';
    document.querySelector('#green > img').style.display = 'none';
}

function both_both_() {
    document.querySelector('#blue > img').style.display = 'block';
    document.querySelector('#green > img').style.display = 'block';
    document.getElementById('blue').style.removeProperty('width');
    document.getElementById('green').style.removeProperty('width');
    document.querySelector('#blue > img').style.removeProperty('width');
    document.querySelector('#green > img').style.removeProperty('width');

}

function right_right_() {
    document.getElementById('blue').style.width = '20px';
    document.querySelector('#blue > img').style.display = 'none';
    document.getElementById('green').style.width = '740px';
    document.querySelector('#green > img').style.display = 'block';
    document.querySelector('#green > img').style.width = 'auto';
}