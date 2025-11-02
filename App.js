//  MOBILE MENU (OPEN/CLOSE)
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const closeBtn = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}



//  ADD TO CART + UPDATE CART NUMBER
let cartCount = 0;

document.querySelectorAll('.cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        cartCount++;
        updateCartCount();
    });
});

function updateCartCount() {
    const cartIcon = document.querySelector('#lg-bag i');
    cartIcon.setAttribute("data-count", cartCount);
    
}



//  NEWSLETTER SIGNUP BUTTON
const newsBtn = document.querySelector(".form button");

if (newsBtn) {
    newsBtn.addEventListener("click", () => {
        let email = document.querySelector(".form input").value;
        if (email === "") {
            alert("Please enter your email address!");
        } else {
            alert(" Thank you for subscribing!");
        }
    });
}



//  SECTION SCROLL ANIMATION
const animatedSections = document.querySelectorAll('.section-1');

window.addEventListener('scroll', () => {
    animatedSections.forEach(sec => {
        let position = sec.getBoundingClientRect().top;

        if (position < window.innerHeight - 150) {
            sec.classList.add("show");
        }
    });
});



// PRODUCT HOVER ZOOM (OPTIONAL)
document.querySelectorAll('.pro img').forEach(img => {
    img.addEventListener("mouseenter", () => {
        img.style.transform = "scale(1.05)";
    });
    img.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1)";
    });
});



//  BANNER BUTTONS
document.querySelectorAll(".white, .normal").forEach(button => {
    button.addEventListener("click", () => {
        alert("This feature is coming soon!");
    });
});