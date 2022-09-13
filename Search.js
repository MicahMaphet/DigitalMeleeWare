var keyPressed = new Array(20)
keyPressed["Enter"] = false
var searchReady = false
let input = ''
function Search() {
    if(searchReady) {
        input = document.getElementById('navsearch').value
        document.getElementById('navsearch').value = null
        console.log(input)
        document.getElementById('searchin').innerHTML=input
        searchReady = false
    }
}


document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        keyPressed["Enter"] = true
        Search()
    }
});
document.addEventListener("keyup", event => {
    if (event.key === "Enter") {
        keyPressed["Enter"] = false
    }
});