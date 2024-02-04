const filp1 = document.getElementById('filp1')
const filp2 = document.getElementById('filp2')
const filp3 = document.getElementById('filp3')
const ro = document.getElementById('ro')
const Button_filp = document.getElementById('Button_filp')

function reply_click(clicked_id) {
  const x = document.getElementById(clicked_id)
  if (x.style.backgroundColor == 'aqua') {
    x.style.backgroundColor = '#D15BFC'
    x.style.boxShadow = '0 0 10px #D15BFC, 0 0 21px #ffffff'
  } else {
    x.style.backgroundColor = 'aqua'
    x.style.boxShadow = '0 0 10px #4CFFF6,0 0 21px #4CFFF6,0 0 42px #ffffff'
  }
}

function filp_box() {
  random = Math.floor(Math.random() * 2) + 1;
  if (ro.style.transform == 'rotate(0deg)') {
    if (random == 1) {
      ro.style.transform = 'rotate(-180deg)'
      Button_filp.style.transform = 'rotate(180deg)'
    } else {
      ro.style.transform = 'rotate(180deg)'
      Button_filp.style.transform = 'rotate(-180deg)'
    }
    ro.style.top = '860px'
  } else {
    Button_filp.style.transform = 'rotate(0deg)'
    ro.style.transform = 'rotate(0deg)'
    ro.style.top = ''
  }
}