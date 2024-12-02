let nav = document.getElementById("nav-button");
let navCLass = document.getElementsByClassName("link-display-border");

// Dapatkan semua elemen link dan kontainer
const links = document.querySelectorAll(".link-display-border");
const containers = document.querySelectorAll(".content-container");
const linkTexts = document.querySelectorAll(".link-display");

links.forEach((link, index) => {
  link.addEventListener("click", () => {
    // Hapus kelas aktif dari semua link dan teks
    links.forEach((l) => l.classList.remove("border-active"));
    linkTexts.forEach((text) => text.classList.remove("link-display-active"));

    // Tambahkan kelas aktif ke link dan teks yang diklik
    link.classList.add("border-active");
    const linkText = link.querySelector(".link-display");
    if (linkText) {
      linkText.classList.add("link-display-active");
    }

    // Sembunyikan semua kontainer
    containers.forEach((container) => container.classList.remove("active"));

    // Tampilkan kontainer yang sesuai dengan indeks link
    if (containers[index]) {
      containers[index].classList.add("active");
    }
  });
});
