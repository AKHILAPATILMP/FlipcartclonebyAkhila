
let currentIndex = 0;
const carousel = document.querySelector('.carousel ul');
const slides = document.querySelectorAll('.carousel li');

function slideCarousel(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = slides.length - 1;
  if (currentIndex >= slides.length) currentIndex = 0;
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(() => {
  slideCarousel(1);
}, 3000);


document.getElementById("searchBtn").addEventListener("click", () => {
  const query = document.getElementById("productSearch").value.toLowerCase();
  const items = document.querySelectorAll(".offerrow > div");

  items.forEach(item => {
    const name = item.querySelector(".offerimg-subtxt1").textContent.toLowerCase();
    const desc = item.querySelector(".offerimg-subtxt3").textContent.toLowerCase();
    item.style.display = (name.includes(query) || desc.includes(query)) ? "block" : "none";
  });
});


document.getElementById("Top-Deals").addEventListener("click", () => {
  alert("Redirecting to Top Deals page... (link not implemented)");
});
