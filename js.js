const button_start = document.getElementById("button_start")
const text_start = document.getElementById("text_start")
const main_ask = document.getElementById("main_ask")
const ask = document.getElementById("ask")
const Choose_Ans = document.getElementById("Choose_Ans")
const Text_Ans1 = document.getElementById("Text_Ans1")
const Text_Ans2 = document.getElementById("Text_Ans2")
const score = document.getElementById("score")
const img = document.getElementById("imgtrue_false")
const number_ask = document.getElementById("number")
const number_img = document.getElementById("number_img")

var ask_number = 1
var ask_score = 0
var True_ask = 0

function start_ask(text_ask, anstrue, ansfalse) {
    if (button_start.style.display != "none") {
        button_start.style.display = "none"
        main_ask.style.display = "inline"
        Choose_Ans.style.display = "inline"
        text_start.innerHTML = "NEXT"
        img.style.display = "none"
        ask.innerHTML = text_ask
        number = Math.floor(Math.random() * (3 - 1) ) + 1;
        number_ask.innerHTML = ask_number
        number_img.innerHTML = ask_number
        if (number == 1) {
            True_ask = 1
            Text_Ans1.innerHTML = anstrue
            Text_Ans2.innerHTML = ansfalse
        } else {
            True_ask = 2
            Text_Ans2.innerHTML = anstrue
            Text_Ans1.innerHTML = ansfalse
        }
    }
}

function restart() {
    text_start.innerHTML = "START"
    img.src = ""
    ask_number = 1
    ask_score = 0
    score.innerHTML = ask_score
    if (Text_Ans1.style.fontSize > "32px") {
        img.style.width = "30%"
    }
}

function next() {
    if (ask_number == 1) {
        start_ask("จงหาคำตอบ [(1+1+1)(2+3)(1+1)(2X10¹)+30+(10-3)]","LEG","LOOK")
    } else if (ask_number == 2) {
        start_ask("จงหาคำตอบ 5!+173+4!","LIE","LINE")
    } else if (ask_number == 3) {
        start_ask("A={616,617,618} B={618,619,620} หาสมาชิกของ A∩B","BIG","SAD")
    } else if (ask_number == 4) {
        start_ask("กำหนดให้ประพจน์ p เป็นเท็จ q เป็นจริง และ r เป็นจริง<br> ก. (q∧p)↔[(rv~p)→q] มีค่าความจริงเป็นจริง ถ้าประพจน์นี้ถูก = 14 ถ้าผิด = 20 <br>ข. [pv(~q→p)]∧r มีค่าความจริงเป็นเท็จ ถ้าประพจน์นี้ถูก = 20 ถ้าผิด = 14 <br>หาคำตอบ ก+ข","HE","LIE")
    } else if (ask_number == 5) {
        start_ask("339 < x < 337 หาค่า x","BEE","FUN")
    } else if (ask_number == 6) {
        start_ask("จงหาค่าของ 1000-337","EGG","BEE")
    } else if (ask_number == 7) {
        start_ask("ลูกบอล 1 ลูก มีเส้นผ่านศูนย์กลางยาว 28 ซม. จงหารัศมีของลูกบอล","HI","OK")
    } else if (ask_number == 8) {
        start_ask("","OIL","OUT")
        img.src = "img/A.webp"
        img.style.display = "inline"
    } else if (ask_number == 9) {
        start_ask("","SHE","SON")
        img.src = "img/received_1699451127237795.webp"
    } else if (ask_number == 10) {
        start_ask("","SEE","SIR")
        img.src = "img/2.jpeg"
        img.style.display = "inline"
        text_start.innerHTML = "REGAME"
        text_start.style.fontSize = "400%"
    } else {
        restart()
    }
}

function click1() {
    if (True_ask == 1) {
        ask_number += 1
        ask_score += 1
        console.log(ask_score)
        button_start.style.display = "inline"
        main_ask.style.display = "none"
        Choose_Ans.style.display = "none"
        number_img.style.display = "none"
        img.style.display = "inline"
        img.src = "img/tick-icon-sign-symbol-design-free-png.webp"
        score.innerHTML = ask_score
        if (Text_Ans1.style.fontSize > "32px") {
            img.style.width = "30%"
        }
    } else {
        ask_number += 1
        console.log(ask_score)
        button_start.style.display = "inline"
        main_ask.style.display = "none"
        Choose_Ans.style.display = "none"
        number_img.style.display = "none"
        img.style.display = "inline"
        img.src = "img/red_prodpictxmark_2_1484336301-1.png"
        score.innerHTML = ask_score
        if (Text_Ans1.style.fontSize > "32px") {
            img.style.width = "30%"
        }
    }
}

function click2() {
    if (True_ask == 2) {
        ask_number += 1
        ask_score += 1
        console.log(ask_score)
        button_start.style.display = "inline"
        main_ask.style.display = "none"
        Choose_Ans.style.display = "none"
        number_img.style.display = "none"
        img.style.display = "inline"
        img.src = "img/tick-icon-sign-symbol-design-free-png.webp"
        score.innerHTML = ask_score
        if (Text_Ans1.style.fontSize > "32px") {
            img.style.width = "30%"
        }
    } else {
        ask_number += 1
        console.log(ask_score)
        button_start.style.display = "inline"
        main_ask.style.display = "none"
        Choose_Ans.style.display = "none"
        number_img.style.display = "none"
        img.style.display = "inline"
        img.src = "img/red_prodpictxmark_2_1484336301-1.png"
        score.innerHTML = ask_score
        if (Text_Ans1.style.fontSize > "32px") {
            img.style.width = "30%"
        }
    }
}
