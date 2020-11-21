function add_element() {
    document.getElementById('elems_field').insertAdjacentHTML('beforeend', 
        `<div class="elem">
            <input>
            <input>
            <button onclick="up_(this)">&#8593;</button>
            <button onclick="down_(this)">&#8595;</button>
            <button onclick="this.parentNode.remove()">&#215;</button>
        </div>`)
}


function save_save() {
    var parent = document.querySelectorAll("#elems_field > .elem > input");
    var out = "{";
    for (var i = 0; i < parent.length; i += 2)
    {
        var key = parent[i].value;
        var value = parent[i + 1].value;
        out += '"' + key + '":"' + value + '"';
        if (i != parent.length - 2)
            out += ',';
    }
    out += "}";
    var answer = document.getElementById("output");
    answer.innerHTML = out;
}


function up_(el) {
    var elem = el.parentNode;
    var parent = elem.parentNode;
    var childs = parent.children;
    for (var i = 0; i < childs.length; i++)
    {
        if (childs[i] === elem && i != 0)
            parent.insertBefore(elem, childs[i - 1]);
    }
}


function down_(el) {
    var elem = el.parentNode;
    var parent = elem.parentNode;
    var childs = parent.children;
    for (var i = 0; i < childs.length; i++)
    {
        if (childs[i] === elem && i != (childs.length - 1)) {
            parent.insertBefore(childs[i + 1], elem);
            break;
        }
    }
}