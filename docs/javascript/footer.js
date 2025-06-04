const footer = document.getElementById('footer')
footer.innerHTML = `
    <footer class="px-5 pt-14 md:pt-20 bg-[#f7f7f7]">
        <div class="max-w-7xl w-full mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-20 gap-10 ">
            <div class="w-full">
                <h2 data-aos="fade-up" class="font-medium text-2xl  mb-3 text-[#214842]">About Us
                </h2>
                <p data-aos="fade-up" data-aos-delay="100" class="text-zinc-600 mt-5">We are supported with robust infrastructure, which is spread across a large area of land. We have fitted various advanced machines and tools in the unit that enable us in meeting customer demand on time.
                </p>
            </div>

            <div class="w-full lg:pl-16">
                <h2 data-aos="fade-up" class="font-medium text-2xl  mb-3 text-[#214842]">Quick Link</h2>
                <div class="mt-7">
                    <ul class="space-y-3 text-zinc-600">
                        <li data-aos="fade-up"><a class="transition-all duration-500 hover:text-[#214842]"
                                href="/index.html">Home</a>
                        </li>
                        <li data-aos="fade-up" data-aos-delay="100"><a
                                class="transition-all duration-500 hover:text-[#214842]" href="/about.html">About
                                Us </a></li>
                        <li data-aos="fade-up" data-aos-delay="200"><a
                                class="transition-all duration-500 hover:text-[#214842]" href="/products.html">Products
                            </a></li>
                        <li data-aos="fade-up" data-aos-delay="200"><a
                                class="transition-all duration-500 hover:text-[#214842]"
                                href="/testimonial.html">Testimonial </a></li>
                        <li data-aos="fade-up" data-aos-delay="200"><a
                                class="transition-all duration-500 hover:text-[#214842]" href="/contact.html">Contact Us
                            </a></li>
                    </ul>
                </div>
            </div>

            <div class="w-full">
                <h2 data-aos="fade-up" class="font-medium text-2xl  mb-3 text-[#214842]">Contact Information</h2>
                <div class="mt-7">
                    <a data-aos="fade-up" href="#"
                        class="flex items-start gap-3 transition-all mt-4 duration-500 hover:text-[#214842] text-zinc-600"><i
                            class="fa-solid fa-location-dot text-xl text-zinc-500 mt-1"></i>Office No - 26, K. B. Green Plaza,  Jagat Faram, Gama First, Greater Noida ( U. P. )</a>
                    <a data-aos="fade-up" href="mailto:kundalnaturalcare10@gmail.com"
                        class="flex items-start gap-3 transition-all mt-4 duration-500 hover:text-[#214842] text-zinc-600"><i
                            class="fa-solid fa-envelope text-xl text-zinc-500 mt-1"></i>kundalnaturalcare10@gmail.com</a>
                    <a data-aos="fade-up" href="tel:+01204992823"
                        class="flex items-center gap-3 transition-all mt-4 duration-500 hover:text-[#214842] text-zinc-600"><i
                            class="fa-solid fa-phone text-xl text-zinc-500 "></i>01204992823, 9506555510</a>
                    <div class="flex items-center gap-5 text-zinc-500 mt-8">
                        <a data-aos="fade-up" href=""><i
                                class="fa-brands transition-all duration-500 hover:text-[#214842] fa-facebook-f text-lg"></i></a>
                        <a data-aos="fade-up" data-aos-delay="100" href=""><i
                                class="fa-brands transition-all duration-500 hover:text-[#214842] fa-instagram text-xl"></i></a>
                        <a data-aos="fade-up" data-aos-delay="200" href=""><i
                                class="fa-brands transition-all duration-500 hover:text-[#214842] fa-youtube text-xl"></i></a>
                        <a data-aos="fade-up" data-aos-delay="200" href=""><i
                                class="fa-brands transition-all duration-500 hover:text-[#214842] fa-linkedin text-xl"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <p class="max-w-7xl md:mt-16 mt-5 text-zinc-600 w-full mx-auto py-5 text-white text-center"> Kundal © <span
                id="copyright"></span> All Rights
            Reserved.</p>
    </footer>
`

const year = new Date().getFullYear()
const copyright = document.getElementById('copyright').innerHTML = year