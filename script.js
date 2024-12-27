let barsIcon = document.querySelector('#bars-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a [href*=' + id + ' ]').classList.add('active')
      })
    }
  })
}

barsIcon.onclick = () => {
  barsIcon.classList.toggle('fa-x');
  navbar.classList.toggle('active');
}

const mixer = mixitup(".portfolio__grid");

function sendMessage(){
  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const nohp = document.getElementById("nohp").value;
  const subject = document.getElementById("subject").value;
  const pesan = document.getElementById("pesan").value;

  const url = "https://api.whatsapp.com/send?phone=6282178306679&text=Assalamualaikum%2C%0A%0ASaya%20*"+ nama +"*%2C%20ingin%20berkonsultasi%20mengenai%20pembuatan%20website%20untuk%20bisnis%20kami.%0A%0ASaya%20ingin%20mengetahui%20lebih%20lanjut%20mengenai%20portofolio%20projek-projek%20yang%20telah%20berhasil%20diselesaikan.%0A%0ABoleh%20tahu%20sedikit%20mengenai%20proses%20pembuatan%20website%20di%20sini%3F%0A%0ATerima%20kasih%20atas%20responnya.%0A%0AHormat%20kami%2C%0A%0A*"+ nama +"*%0A*"+ email +"*%0A*"+ nohp +"*%0A*"+ subject +"*%0A*"+ pesan +"*";

  window.open(url);
}
