// pages/index.js
import Image from 'next/image'
import Link from 'next/link'
import { FaLeaf, FaPlay, FaQuoteLeft, FaArrowRight } from 'react-icons/fa'
import { HiOutlineChevronRight } from 'react-icons/hi'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-green-800 text-white py-4 px-6 md:px-12">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">Smart Farm</div>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-yellow-300">Home</Link>
            <Link href="/about" className="hover:text-yellow-300">About Us</Link>
            <Link href="/services" className="hover:text-yellow-300">Our Services</Link>
            <Link href="/projects" className="hover:text-yellow-300">Projects</Link>
            <Link href="/gallery" className="hover:text-yellow-300">Gallery</Link>
            <Link href="/news" className="hover:text-yellow-300">News</Link>
            <Link href="/contact" className="hover:text-yellow-300">Contact Us</Link>
          </div>
          <div className="md:hidden">
            <button className="focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero-farm.png" 
            alt="Agricultural landscape" 
            layout="fill" 
            objectFit="cover" 
            priority 
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6 md:px-12 flex items-center h-full">
          <div className="max-w-xl text-white">
            <h2 className="text-yellow-400 font-semibold text-xl mb-3">Welcome to Smart Farm</h2>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Agriculture Matter<br />Good production</h1>
            <p className="mb-8">Providing the highest quality agricultural products and services to our customers while maintaining sustainable farming practices.</p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-8 rounded-md font-medium transition duration-300">
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="relative">
                <Image 
                  src="/images/agriculture-field.png" 
                  alt="Agriculture field" 
                  width={600} 
                  height={400} 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-green-800 text-3xl font-bold mb-6">Pure Agriculture and<br />Organic Farm</h2>
              <p className="text-gray-700 mb-6">We're Leader in Agricultural Market</p>
              <p className="text-gray-600 mb-8">
                Our commitment to sustainable farming practices and organic agriculture makes us a leading provider in the industry. We focus on producing high-quality products while preserving the environment.
              </p>
              <div className="flex items-center mb-4">
                <div className="mr-4 text-green-600">
                  <FaLeaf className="w-5 h-5" />
                </div>
                <p className="text-gray-700">Eco-friendly farming using modern technology</p>
              </div>
              <div className="flex items-center mb-8">
                <div className="mr-4 text-green-600">
                  <FaLeaf className="w-5 h-5" />
                </div>
                <p className="text-gray-700">Organic Food Production Standards</p>
              </div>
              <div className="bg-green-800 text-white p-4 rounded-lg inline-block">
                <span className="text-3xl font-bold">95,000</span>
                <span className="block text-sm">Hectares of land</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold mb-12">Quality Fruits & Vegetables</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Apple", icon: "🍎" },
              { name: "Blueberry", icon: "🫐" },
              { name: "Strawberry", icon: "🍓" },
              { name: "Eggplant", icon: "🍆" },
              { name: "Cabbage", icon: "🥬" },
              { name: "Carrot", icon: "🥕" }
            ].map((product, index) => (
              <div key={index} className="bg-green-700 p-6 rounded-lg hover:bg-green-600 transition duration-300">
                <div className="text-3xl mb-3">{product.icon}</div>
                <h3 className="font-medium">{product.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative h-80 md:h-96">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/farm-landscape.png" 
            alt="Farm landscape" 
            layout="fill" 
            objectFit="cover" 
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6 md:px-12 flex items-center justify-between h-full">
          <div className="max-w-xl text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Agriculture Matters to<br />the Future of Bangladesh</h2>
          </div>
          <div className="bg-white rounded-full p-4 hover:bg-yellow-400 transition duration-300 cursor-pointer">
            <FaPlay className="text-green-800 w-6 h-6" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center mb-12">Explore Our Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { image: "/images/project1.png", title: "Modern Farming", category: "Agriculture" },
              { image: "/images/project2.png", title: "Organic Vegetables", category: "Organic" },
              { image: "/images/project3.png", title: "Fresh Products", category: "Market" },
              { image: "/images/project4.png", title: "Smart Farming", category: "Technology" }
            ].map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={400} 
                  height={300} 
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <span className="text-sm bg-green-700 px-2 py-1 rounded">{project.category}</span>
                  <h3 className="text-xl font-bold mt-2">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              <span className="w-2 h-2 bg-green-800 rounded-full"></span>
              <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
              <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center mb-12">WHAT THEY'RE TALKING ABOUT</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/4 mb-8 md:mb-0 flex justify-center">
              <div className="w-32 h-32 relative overflow-hidden rounded-full">
                <Image 
                  src="/images/testimonial-person.png" 
                  alt="Testimonial person" 
                  layout="fill" 
                  objectFit="cover" 
                />
              </div>
            </div>
            <div className="md:w-3/4 md:pl-12">
              <FaQuoteLeft className="text-green-800 w-12 h-12 mb-6 opacity-20" />
              <p className="text-gray-700 text-lg mb-6">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              </p>
              <p className="font-bold text-green-800">Karim Abedi</p>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              <span className="w-2 h-2 bg-green-800 rounded-full"></span>
              <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
              <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-green-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="relative">
                <Image 
                  src="/images/family-farming.png" 
                  alt="Family farming" 
                  width={600} 
                  height={400} 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-green-800 text-3xl font-bold mb-8">Providing High Quality<br />Products</h2>
              
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <div className="flex items-start">
                  <div className="bg-green-700 rounded-full p-3 mr-4">
                    <FaLeaf className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Full Agriculture Growth</h3>
                    <p className="text-gray-600">We ensure the complete cycle of agricultural growth for maximum quality.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <div className="bg-green-700 rounded-full p-3 mr-4">
                    <FaLeaf className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Making Healthy Foods</h3>
                    <p className="text-gray-600">Our priority is to produce healthy foods without harmful chemicals.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center mb-12">News & Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                image: "/images/news1.png", 
                title: "Taking innovative Key institutions towards agriculture", 
                date: "June 15, 2023", 
                category: "Farming" 
              },
              { 
                image: "/images/news2.png", 
                title: "Scientist says digital divide with farmers", 
                date: "June 22, 2023", 
                category: "Research" 
              },
              { 
                image: "/images/news3.png", 
                title: "Agriculture Matters to the Future of Bangladesh", 
                date: "June 28, 2023", 
                category: "Economy" 
              }
            ].map((news, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative">
                  <Image 
                    src={news.image} 
                    alt={news.title} 
                    width={400} 
                    height={250} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 bg-yellow-500 text-white text-xs px-3 py-1">
                    {news.category}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-500 text-sm mb-2">{news.date}</p>
                  <h3 className="font-bold text-xl mb-4">{news.title}</h3>
                  <Link href="#" className="text-yellow-500 hover:text-yellow-600 flex items-center">
                    Read More <HiOutlineChevronRight className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center mb-12">GET IN TOUCH NOW</h2>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <p className="text-gray-600 mb-8">
                Have questions about our services? Contact us today for more information about our products and services.
              </p>
              <div className="mb-4">
                <h3 className="font-bold mb-2">Address:</h3>
                <p className="text-gray-600">123 Farm Road, Dhaka, Bangladesh</p>
              </div>
              <div className="mb-4">
                <h3 className="font-bold mb-2">Phone:</h3>
                <p className="text-gray-600">(+880) 123 456 789</p>
              </div>
            </div>
            <div className="md:w-2/3 md:pl-12">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <input 
                    type="text" 
                    placeholder="Subject" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <textarea 
                    placeholder="Your Message" 
                    rows={5}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-8 rounded-md font-medium transition duration-300">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="bg-yellow-100 py-6">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <div className="mr-4">
                <Image 
                  src="/images/logo-icon.png" 
                  alt="Logo" 
                  width={40} 
                  height={40} 
                />
              </div>
              <h3 className="text-xl font-bold">We are Leader in Agriculture Market</h3>
            </div>
          </div>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded-md font-medium transition duration-300">
            Contact Us
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white">
        <div className="container mx-auto px-6 md:px-12 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-6">Smart Farm</h3>
              <p className="text-gray-300 mb-6">
                We provide the highest quality agricultural products and services while maintaining sustainable farming practices.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-yellow-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-yellow-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-yellow-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Useful Links</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-yellow-300">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-300">Our Services</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-300">Projects</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-300">Our Team</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-300">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Newsletter</h3>
              <p className="text-gray-300 mb-6">
                Subscribe to our newsletter for the latest updates and offers.
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="p-3 bg-green-700 border border-green-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-500 flex-grow text-white"
                />
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-r-md transition duration-300">
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-green-700 py-6">
          <div className="container mx-auto px-6 md:px-12 text-center text-gray-300 text-sm">
            <p>© 2023 Smart Farm. All Rights Reserved | Design by Farm Group</p>
          </div>
        </div>
      </footer>
    </div>
  )
}