
function print_z(z) {
    var inp = document.getElementById('input_grey').textContent.split(' ')
    if (inp[inp.length - 1][0]) {
        document.getElementById('input_grey').textContent += " " + z + " ";
        document.getElementById('input_black').textContent = " " + z + " ";
    }
    else {
        document.getElementById('input_grey').textContent = document.getElementById('input_grey').textContent.slice(0, -2) + z + " ";
        document.getElementById('input_black').textContent = document.getElementById('input_black').textContent.slice(0, -2) + z + " ";
    }
}


function print_n(n) {


    var inp = document.getElementById('input_grey').textContent.split(' ');
    if (inp[inp.length - 1].length == 1 && inp[inp.length - 1][0] === '0') {
        document.getElementById('input_grey').textContent = document.getElementById('input_grey').textContent.slice(0, -1) + n;
        document.getElementById('input_black').textContent = document.getElementById('input_black').textContent.slice(0, -1) + n;
    }
    else {
        if (document.getElementById('input_black').textContent[0] == ' ') {
            document.getElementById('input_black').textContent = document.getElementById('input_black').textContent.slice(2, -1);
        }
        document.getElementById('input_grey').textContent += n;
        document.getElementById('input_black').textContent += n;
 
    }
}


function print_t() {
    var inp = document.getElementById('input_grey').textContent.split(' ')
    if (inp[inp.length - 1].indexOf('.') == -1 && inp[inp.length - 1][0]) {
        document.getElementById('input_grey').textContent += '.';
        document.getElementById('input_black').textContent += '.';
    } 
}


function clear_(elem) {
    document.getElementById('input_grey').textContent = '0';
    document.getElementById('input_black').textContent = '0';
}


function cancel_() {
    if (document.getElementById('input_grey').textContent.length != 1) {
        if (document.getElementById('input_grey').textContent[document.getElementById('input_grey').textContent.length - 1] == ' ') {
            document.getElementById('input_grey').textContent = document.getElementById('input_grey').textContent.slice(0, -3);
            document.getElementById('input_black').textContent = document.getElementById('input_black').textContent.slice(0, -3);
        }
        else {
            document.getElementById('input_grey').textContent = document.getElementById('input_grey').textContent.slice(0, -1);
            document.getElementById('input_black').textContent = document.getElementById('input_black').textContent.slice(0, -1);
        }
    }
    else {
        document.getElementById('input_grey').textContent = '0';
        document.getElementById('input_black').textContent = '0';
    }

    let t = document.getElementById('input_grey').textContent.split(' ');
    if (document.getElementById('input_black').textContent == '') {
        document.getElementById('input_black').textContent = t[t.length - 1];
    }
}


function solve_() {
    var inp = document.getElementById('input_grey').textContent.split(' ');
    if (inp[inp.length - 1]) {
        var result = eval(document.getElementById('input_grey').textContent)

        document.getElementById('input_grey').textContent = (parseInt(result * 10000)) / 10000;
        document.getElementById('input_black').textContent = (parseInt(result * 10000)) / 10000;
    }
    else {
        var result = eval(document.getElementById('input_grey').textContent.slice(0, -3))

        document.getElementById('input_grey').textContent = (parseInt(result * 10000)) / 10000;
        document.getElementById('input_black').textContent = (parseInt(result * 10000)) / 10000;
    }
}



cl.addEventListener('mousedown', event => {
    interval = setInterval(() => {
        cancel_();
    }, 150)
})

cl.addEventListener('mouseup', event => {
    clearInterval(interval)
})