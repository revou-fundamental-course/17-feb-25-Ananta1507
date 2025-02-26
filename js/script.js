document.addEventListener("DOMContentLoaded", function() {
    let index = 0;
    const slides = document.querySelector(".slides");
    const totalSlides = document.querySelectorAll(".slide").length;

    function autoSlide() {
        index = (index + 1) % totalSlides;
        slides.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(autoSlide, 3000);
});

// Validasi Form & SweetAlert
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let valid = true;
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";

    if (name === "") {
        document.getElementById("nameError").textContent = "Nama tidak boleh kosong.";
        valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Email tidak valid.";
        valid = false;
    }

    if (message === "") {
        document.getElementById("messageError").textContent = "Pesan tidak boleh kosong.";
        valid = false;
    }

    if (valid) {
        Swal.fire({
            title: "Berhasil!",
            text: "Pesan Anda telah dikirim.",
            icon: "success"
        });
        document.getElementById("contactForm").reset();
    }
});

// Buat tombol Back to Top
const topButton = document.createElement("button");
topButton.id = "topButton";
topButton.innerText = "⬆️ Top";
document.body.appendChild(topButton);

// Tampilkan tombol saat scroll ke bawah
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};

// Smooth scroll ke atas saat tombol diklik
topButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah form terkirim secara default

    alert("Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.");  

    // Reset form setelah alert muncul
    document.getElementById("contactForm").reset();
});

let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;


function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
}


function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlide();
}


function updateSlide() {
    const slideWidth = slides[0].clientWidth;
    document.querySelector(".slides").style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}


setInterval(nextSlide, 3000);
