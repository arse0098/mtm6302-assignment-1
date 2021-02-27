const $emojis = document.getElementById("emojis")

let num = 127789;

function addThing() {
    const $emoji = document.createElement("p");
    $emoji.innerHTML = '<span style="font-size: 3rem;">&#'+num+';</span><br><code>'+num+'</code>'
    $emoji.style.textAlign = "center"
    $emojis.appendChild($emoji)
    num++;
}

for(let grid = 0; grid < 600; grid++ ) {
    addThing()
}
