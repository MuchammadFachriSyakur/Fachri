const toggle = document.getElementById('toggle');
toggle.addEventListener("click", (e)=>{
  const grid2 = document.querySelector(".fullcontainer .navbar .grid2");
  grid2.classList.toggle('aktif');
});

let i = 0;
const text = "Front-end web developer";
const speed = 100;

function typed(){
  if(i < text.length){
    const profesi = document.getElementById('profesi');
    profesi.innerHTML += text.charAt(i);
    i++;
    setTimeout(typed, speed);
  }
}
window.onload = typed;

const tema = document.querySelector(".fullcontainer .navbar .grid1 .tema");

tema.addEventListener("click", (e)=>{
  const html = document.querySelector("html");
  const gelap = document.querySelector(".fullcontainer .navbar .grid1 .dark");
  const light = document.querySelector(".fullcontainer .navbar .grid1 .light");
  const input_color = document.querySelectorAll(".container .education .grid1 .item2 form input");
  
  if(e){
    light.classList.toggle('d-none');
    gelap.classList.toggle('d-none');
    html.classList.toggle('aktif');
  }
  
  input_color.forEach((e)=>{
    e.classList.toggle('aktif');
  });
});

const scroll_up = document.getElementById('scroll-up');
const home = document.querySelector(".container .home");

window.addEventListener("scroll", (e)=>{
  const tinggi_layar = window.innerHeight;
  const title_page_about = document.querySelector(".container .about .title_page");
  const desk_page_about = document.querySelector(".container .about .des_page");
  const picture_page_about = document.querySelector(".container .about .grid1 img");
  const item_about = document.querySelectorAll(".container .about .grid1 .intro .grid1 .item");
  const desk_about = document.querySelector(".container .about .grid1 .intro .des_intro");
  const about_button_cv = document.querySelector(".container .about .grid1 .intro .my_cv");
  const title_page_skils = document.querySelector(".container .skils .title_page");
  const des_page_skils = document.querySelector(".container .skils .des_page");
  const skills_item = document.querySelector(".container .skils .grid1 .item");
  const title_page_project = document.querySelector(".container .project .title_page");
  const desk_page_project = document.querySelector(".container .project .des_page");
  const item_project = document.querySelectorAll(".container .project .grid1 .item");
  const title_page_contact = document.querySelector(".container .education .title_page");
  const desk_page_contact = document.querySelector(".container .education .des_page");
  const item_contact = document.querySelectorAll(".container .education .grid1 .item1 .card");
  const item_form = document.querySelectorAll(".container .education .grid1 .item2 form .item");
  
  const animasi_1 = tinggi_layar > title_page_about.getBoundingClientRect().top ? title_page_about.classList.add('aktif') : title_page_about.classList.remove('aktif');
  
  const animasi_2 = tinggi_layar > desk_page_about.getBoundingClientRect().top ? desk_page_about.classList.add('aktif') : desk_page_about.classList.remove('aktif');
  
  const animasi_3 = tinggi_layar > picture_page_about.getBoundingClientRect().top ? picture_page_about.classList.add('aktif') : picture_page_about.classList.remove('aktif');
  
  const animasi_4 = tinggi_layar > desk_about.getBoundingClientRect().top ? desk_about.classList.add('aktif') : desk_about.classList.remove('aktif');
  
  const animasi_5 = tinggi_layar > about_button_cv.getBoundingClientRect().top ? about_button_cv.classList.add('aktif') : about_button_cv.classList.remove('aktif');
 
  const animasi_6 = tinggi_layar > title_page_skils.getBoundingClientRect().top ? title_page_skils.classList.add('aktif') : title_page_skils.classList.remove('aktif');
  
  const animasi_7 = tinggi_layar > des_page_skils.getBoundingClientRect().top ? des_page_skils.classList.add('aktif') : des_page_skils.classList.remove('aktif');
  
  const animasi_8 = tinggi_layar > skills_item.getBoundingClientRect().top ? skills_item.classList.add('aktif') : skills_item.classList.remove('aktif');
  
  const animasi_9 = tinggi_layar > title_page_project.getBoundingClientRect().top ? title_page_project.classList.add('aktif') : title_page_project.classList.remove('aktif');
  
  const animasi_10 = tinggi_layar > desk_page_project.getBoundingClientRect().top ? desk_page_project.classList.add('aktif') : desk_page_project.classList.remove('aktif');
  
  const animasi_11 = tinggi_layar > title_page_contact.getBoundingClientRect().top ? title_page_contact.classList.add('aktif') : title_page_contact.classList.remove('aktif');
  
  const animasi_12 = tinggi_layar > desk_page_contact.getBoundingClientRect().top ? desk_page_contact.classList.add('aktif') : desk_page_contact.classList.remove('aktif');
  
  const animation_unc_scroll_up = tinggi_layar > home.getBoundingClientRect().bottom ? scroll_up.classList.add('aktif') : scroll_up.classList.remove('aktif');
  
  item_about.forEach((e)=>{
    const top = e.getBoundingClientRect().top;
    const animasi = tinggi_layar > top ? e.classList.add('aktif') : e.classList.remove('aktif');
  });
  
  item_project.forEach((e)=>{
    const top = e.getBoundingClientRect().top;
    const animasi = tinggi_layar > top ? e.classList.add('aktif') : e.classList.remove('aktif');
  });
  
  item_contact.forEach((e)=>{
    const top = e.getBoundingClientRect().top;
    const animasi = tinggi_layar > top ? e.classList.add('aktif') : e.classList.remove('aktif');
  });
  
  item_form.forEach((e)=>{
    const top = e.getBoundingClientRect().top;
    const animasi = tinggi_layar > top ? e.classList.add('aktif') : e.classList.remove('aktif');
  });
  
});

scroll_up.addEventListener("click", (e)=>{
  window.scrollTo({
    top: home.offsetTop,
    left: 0,
  });
});

const more_skills = document.querySelector(".container .skils .grid1 .item .more");

more_skills.addEventListener("click", (e)=>{
  const div = document.createElement('div');
  div.className = "more_skils";
  div.innerHTML = `
    <div class="more_skils_content">
    <span class="close" onclick="tutup_more()">
      &times;
    </span>
    <p class="title_item">Front-end Web Developer</p>
    <p class="des_item">I am a Front-end Web Developer who is currently studying the CSS framework, namely Tailwind, and in the future I will upgrade myself. The following are the technologies that I have studied:</p>
    
    <ul>
      <li>
        <i class="ph ph-check"></i>
        <p>html</p>
      </li>
      <li>
        <i class="ph ph-check"></i>
        <p>css</p>
      </li>
      <li>
        <i class="ph ph-check"></i>
        <p>javascript</p>
      </li>
    </ul>
  </div>
  `;
  document.body.appendChild(div);
});

function tutup_more(){
  const div = document.querySelector(".more_skils");
  document.body.removeChild(div);
}

const footer = document.getElementById('copy');
const tahun = new Date().getFullYear();
footer.innerHTML =`
    &#169; ${tahun} Muchammad Fachri Syakur. All rights reserved.
`;
