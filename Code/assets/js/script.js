
function show_square() { 
    var val = document.getElementById("text_box").value;
    for (var i = 0; i < val; i++)
    {
        var new_el = document.createElement("div");
        new_el.classList.add("square")
        
        var x = Math.random() * 1850;
        var y = Math.random() * 800;
        var size = Math.random() * Math.min(1900 - x, 850 - y);

        new_el.style.marginTop = y + "px";
        new_el.style.marginLeft = x + "px";
        new_el.style.width = size + "px";
        new_el.style.height = size + "px";
        const field = document.getElementById("field")
        field.appendChild(new_el);
    }
};


function show_trigon() {
    var val = document.getElementById("text_box").value;
    for (var i = 0; i < val; i++) {
        var new_el = document.createElement("div");
        new_el.classList.add("trigon")

        var x = Math.random() * 1850;
        var y = Math.random() * 800;
        var size = Math.random() * Math.min((1900 - x)/2, (850 - y)/2);

        new_el.style.marginTop = y + "px";
        new_el.style.marginLeft = x + "px";
        new_el.style.border = size + "px" + " solid transparent";
        new_el.style.borderBottom = size + "px"
            + " solid rgba(26, 26, 255, 0.8)";
        const field = document.getElementById("field")
        field.appendChild(new_el);
    }
};


function show_circle() {
    var val = document.getElementById("text_box").value;
    for (var i = 0; i < val; i++) {
        var new_el = document.createElement("div");
        new_el.classList.add("circle")

        var x = Math.random() * 1850;
        var y = Math.random() * 800;
        var size = Math.random() * Math.min(1900 - x, 850 - y);

        new_el.style.marginTop = y + "px";
        new_el.style.marginLeft = x + "px";
        new_el.style.width = size + "px";
        new_el.style.height = size + "px";
        const field = document.getElementById("field")
        field.appendChild(new_el);
    }
};


const element = document.getElementById('field');
element.addEventListener('click', function (elem_id) {
    var target = elem_id.target;
    if (target.className === 'square' || target.className === 'circle')
        target.style.backgroundColor = "yellow";
    else if (target.className === 'trigon')
        target.style.borderBottomColor = "yellow";
}, false);

element.addEventListener('dblclick', function (elem_id) {
    var target = elem_id.target;
    if (target.className === 'square' || target.className === 'trigon'
        || target.className === 'circle') target.remove();
}, false);