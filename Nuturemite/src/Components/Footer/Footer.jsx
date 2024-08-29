import React from 'react'

const Footer = () => {

    function FacebookIcon(props) {
        return (
          <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        )
      }
      
      
      function InstagramIcon(props) {
        return (
          <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        )
      }
      
      
      function LinkedinIcon(props) {
        return (
          <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        )
      }
      
      
      function MapPinIcon(props) {
        return (
          <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        )
      }
      
      
      function TwitterIcon(props) {
        return (
          <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
          </svg>
        )
      }
      
      
      function YoutubeIcon(props) {
        return (
          <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
            <path d="m10 15 5-3-5-3z" />
          </svg>
        )
      }

  return (

    <footer className="card2 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        <div>
          <h3 className="font-bold mb-4 ml-5">Get In Touch</h3>
          <div className="flex items-start mb-2">
            <MapPinIcon className="h-5 w-5 text-yellow-400 mr-2" />
            <div>
              <p>Plot No. 37/Part S.No376/A</p>
              <p>2nd Floor, Rajiv Ganghi Nagar, IDA Kukatpally - 500072</p>
              <p>Telangana, India</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-bold mb-4">Customer Service</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Help & FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Order Tracking
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Shipping & Delivery
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Orders History
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Advanced Search
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Login
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">About Us</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Our Stores
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Corporate Sales
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Popular categories</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Antioxidants
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Ayurvedic
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Digestive Health
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                General Health
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Herbal, Specialty Supplements
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Immune Health
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Men Health
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Women Health
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Personal Care
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Vitamins & Minerals
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Newsletter</h3>
          <p className="mb-4">Get all the latest information on Events, Sales and Offers.</p>
          <div className="flex mb-4">
            <input type="email" placeholder="Your Email Address" className="mr-2" />
            <button className="bg-yellow-500 text-white">Sign Up</button>
          </div>
          <h4 className="font-bold mb-2">Follow Us</h4>
          <div className="flex space-x-2">
            <FacebookIcon className="h-6 w-6 text-yellow-400" />
            <TwitterIcon className="h-6 w-6 text-yellow-400" />
            <YoutubeIcon className="h-6 w-6 text-yellow-400" />
            <InstagramIcon className="h-6 w-6 text-yellow-400" />
            <LinkedinIcon className="h-6 w-6 text-yellow-400" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
