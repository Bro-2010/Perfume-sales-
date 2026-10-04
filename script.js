function order(product){
  const message = `Hello Aura Scents, I would like to order: ${product}. Please send me the available options and delivery details.`;
  window.open("https://wa.me/233000000000?text=" + encodeURIComponent(message), "_blank");
}
document.querySelector(".menu").addEventListener("click",()=>{
  const nav=document.querySelector("#nav");
  nav.classList.toggle("open");
});
