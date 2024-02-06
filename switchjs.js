const main_score = document.getElementById("main_score")
const truemain = document.getElementById("truemain")
function checkme() {
    const checknow = document.getElementById("checkbox")
    if (checknow.checked == true) {
        main_score.style.display = 'inline'
        truemain.style.display = 'none'
    } else {
        main_score.style.display = 'none'
        truemain.style.display = 'inline'
    }
}