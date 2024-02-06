const img = document.getElementById('img_test')
const text = document.getElementById('text')
x = ["a1.png","a2.png","a3.png","a4.png"]
t = ["1.แก้โจทย์ปัญหาที่ให้มา","2.คลิกที่ปุ่มบริเวณมุมขวาล่างแล้วใส่คำตอบที่คิดจากโจทย์","3.คลิกปุ่ม FLIP เพื่อกลับหัวคำตอบแล้วแปลงเป็นคำศัพท์อังกฤษ",""]
get = 0
sum = 0

for (let i = 0, len = x.length; i < len; i++) {
    sum = i
}

function cilcknext() {
    console.log(get)
    get += 1
    if (get > sum) {
        get = 0
    }
    if (get == sum) {
        window.location = "https://guythetwo.github.io/webgamedecodemath/Decodemath.html";    
    }
    img.src = 'img/' + x[get]
    text.innerHTML = t[get]
}