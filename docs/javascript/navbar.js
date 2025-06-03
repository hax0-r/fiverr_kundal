const navbar = document.getElementById("navbar");

navbar.innerHTML = `

    <nav class="absolute top-0 left-0 w-full z-40 transition-all duration-300">
        <div class="max-w-7xl mx-auto flex justify-between items-center w-full md:p-5 p-3 md:h-36 h-24">
            <a data-aos="fade-right" href="/index.html" class="flex items-center justify-center lg:justify-start">
                <img src="/docs/assets/images/LogoWhite.png" class="md:h-36 h-24" alt="logo">
            </a>
            <div data-aos="fade-left" class="md:flex hidden items-center gap-10">
                <div class="md:flex items-center gap-10 hidden">
                    <ul class="md:flex hidden items-center text-zinc-100 gap-10">
                        <li><a href="/index.html" class="hover:text-[#cbffb4] transition-all duration-500">Home </a>
                        </li>
                        <li><a href="/about.html" class="hover:text-[#cbffb4] transition-all duration-500">About Us</a>
                        </li>
                        <li><a href="/products.html"
                                class="hover:text-[#cbffb4] transition-all duration-500">Products</a></li>
                        <li><a href="/testimonial.html"
                                class="hover:text-[#cbffb4] transition-all duration-500">Testimonial</a></li>
                        <li><a href="/contact.html" class="hover:text-[#cbffb4] transition-all duration-500">Contact
                                Us</a></li>
                    </ul>
                </div>
            </div>
            <div class="md:flex items-center justify-center gap-3 hidden">
                <a href="https://login.kundalnaturalcare.com/Register.aspx"
                    class="block w-28 p-3 text-center rounded-full font-medium transition-all duration-500 hover:opacity-80  text-white bg-[#214842]">Register</a>
                <a href="https://login.kundalnaturalcare.com/login.aspx"
                    class="block p-3 text-center w-28 rounded-full font-medium transition-all duration-500 hover:opacity-80  text-white bg-[#214842]">Login</a>
            </div>

            <i data-aos="fade-left"
                class="fa-solid mobileMenuBtn text-zinc-200 fa-bars md:!hidden text-2xl cursor-pointer mr-2"></i>
        </div>
    </nav>


    <nav id="nav" class="fixed bg-white -translate-y-[6rem] overflow-hidden top-0 left-0 w-full z-40 flex items-center justify-center transition-all duration-300">
        <div class="max-w-7xl mx-auto flex justify-between items-center w-full md:p-5 p-3 md:h-24 h-20">
            <a data-aos="fade-right" href="/index.html" class="flex items-center justify-center lg:justify-start">
                <img src="/docs/assets/images/LogoBlack.png" class="md:h-20 h-16" alt="logo">
            </a>
            <div data-aos="fade-left" class="md:flex hidden items-center gap-10">
                <div class="md:flex items-center gap-10 hidden">
                    <ul  class="md:flex hidden items-center text-zinc-800 gap-10">
                        <li><a href="/index.html" class="hover:text-[#214842] transition-all duration-500">Home </a>
                        </li>
                        <li><a href="/about.html" class="hover:text-[#214842] transition-all duration-500">About Us</a>
                        </li>
                        <li><a href="/products.html"
                                class="hover:text-[#214842] transition-all duration-500">Products</a></li>
                        <li><a href="/testimonial.html"
                                class="hover:text-[#214842] transition-all duration-500">Testimonial</a></li>
                        <li><a href="/contact.html"
                                class="hover:text-[#214842] transition-all duration-500">Contact Us</a></li>
                    </ul>
                </div>
            </div>

             <div class="md:flex items-center justify-center gap-3 hidden">
                <a href="https://login.kundalnaturalcare.com/Register.aspx"
                    class="block w-28 p-3 text-center rounded-full font-medium transition-all duration-500 hover:opacity-80  text-white bg-[#214842]">Register</a>
                <a href="https://login.kundalnaturalcare.com/login.aspx"
                    class="block p-3 text-center w-28 rounded-full font-medium transition-all duration-500 hover:opacity-80  text-white bg-[#214842]">Login</a>
            </div>

            <i data-aos="fade-left" class="fa-solid mobileMenuBtn text-zinc-800 fa-bars md:!hidden text-2xl cursor-pointer mr-2"></i>
        </div>
    </nav>

    <div id="mobileMenu"
        class="fixed left-0 top-0 bg-white max-w-[30rem] w-0 overflow-hidden h-screen z-50 transition-all duration-500">
        <div class="flex items-end justify-end p-5">
            <i class="fa-solid mobileMenuCloseBtn fa-x z-50 text-zinc-700 text-xl cursor-pointer"></i>
        </div>
        <div class="p-6">
            <ul class="flex relative z-50 text-zinc-800 flex-col gap-7">
                <li><a href="/index.html"
                        class="hover:text-[#f5e474] mobileMenuCloseBtn text-nowrap transition-all duration-500">Home</a>
                </li>
                <li><a href="/about.html"
                        class="hover:text-[#f5e474] mobileMenuCloseBtn text-nowrap transition-all duration-500">About
                        Us</a></li>
                <li><a href="/products.html"
                        class="hover:text-[#f5e474] mobileMenuCloseBtn text-nowrap transition-all duration-500">Products</a>
                </li>
                <li><a href="/testimonial.html"
                        class="hover:text-[#f5e474] mobileMenuCloseBtn text-nowrap transition-all duration-500">Testimonial</a>
                </li>
                <li><a href="/contact.html"
                        class="hover:text-[#f5e474] mobileMenuCloseBtn text-nowrap transition-all duration-500">Contact Us</a>
                </li>
            </ul>
            <a href="https://login.kundalnaturalcare.com/Register.aspx"
                class="text-center block mobileMenuCloseBtn w-full p-3 border text-zinc-800 text-nowrap border-zinc-700 mt-5 rounded-lg cursor-pointer">Register</a>
            <a href="https://login.kundalnaturalcare.com/login.aspx"
                class="text-center block mobileMenuCloseBtn w-full p-3 border text-zinc-800 text-nowrap border-zinc-700 mt-4 rounded-lg cursor-pointer">Login</a>
        </div>
    </div>
`


const mobileMenuBtn = document.querySelectorAll(".mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const nav = document.getElementById("nav");
const mobileMenuCloseBtns = document.querySelectorAll(".mobileMenuCloseBtn");

mobileMenuCloseBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        mobileMenu.style.width = "0";
    });
});

mobileMenuBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        mobileMenu.style.width = "100%";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 500) {
            nav.style.transform = "translateY(0rem)";
            nav.classList.remove("-translate-y-[6rem]")
        } else {
            nav.style.transform = "translateY(-6rem)";
        }
    });
});