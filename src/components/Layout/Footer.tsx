import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faMedium,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/logo.svg";

const footer = () => {
  return (
    <footer className="text-center lg:text-left bg-metal-dark text-gray-600">

      {/* Destination links */}
      <section className="mx-6 py-10 text-center md:text-left">
        <div className="grid   grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Logo */}
          <div>
            <img src={logo.src} alt="logo" />
          </div>

          <div>
            <h6 className="uppercase text-grey font-semibold mb-4 flex justify-center md:justify-start">
              Community
            </h6>
            <p className="mb-4 text-white">
              <a href="#!" className="">
                Lexir for Brands
              </a>
            </p>
            <p className="mb-4 text-white">
              <a href="#!">Business Buyers</a>
            </p>
            <p className="mb-4 text-white">
              <a href="#!">Sales Affiliates</a>
            </p>
          </div>

          <div>
            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
              Platform
            </h6>
            <p className="mb-4 text-white">
              <a href="#!">Resources</a>
            </p>
            <p className="mb-4 text-white">
              <a href="#!">Pricing</a>
            </p>
            <p className="mb-4 text-white">
              <a href="#!">Get Started</a>
            </p>
          </div>

          <div>
            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
              Company
            </h6>
            <p className="mb-4 text-white">
              <a href="#!">About</a>
            </p>
            <p className="mb-4 text-white">
              <a href="#!">Contact</a>
            </p>
            <p className="mb-4 text-white">
              <a href="#!">Legal</a>
            </p>
          </div>

          <div>
            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
              Lexir Shop
            </h6>
            <p className="mb-4 text-white">
              <a href="#!">Brands</a>
            </p>
            <p className="mb-4 text-white">
              <a href="#!">Spirits</a>
            </p>
            <p className="mb-4 text-white">
              <a href="#!">Wine</a>
            </p>
            <p className="mb-4 text-white">
              <a href="#!">Blog</a>
            </p>
          </div>

          <div>
            <ul className="flex justify-center md:justify-end">
              <li className="mr-5">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://medium.com/lexir"
                >
                  <FontAwesomeIcon icon={faMedium} color="#fff" />
                </a>
              </li>
              <li className="mr-5">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/company/lexir"
                >
                  <FontAwesomeIcon icon={faFacebook} color="#fff" />
                </a>
              </li>
              <li className="mr-5">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/LexirOfficial"
                >
                  <FontAwesomeIcon icon={faInstagram} color="#fff" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/lexirofficial"
                >
                  <FontAwesomeIcon icon={faLinkedin} color="#fff" />
                </a>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* Copy right section */}

      <section className="flex justify-center items-center lg:justify-between p-6 border-t border-gray-500">
        <div className='mr-12 lg:block"'>
          <span className="text-white">© 2022 Lexir Inc.</span>
        </div>
        <div>
          <span className="mr-5 text-white">Privacy</span>
          <span className="text-white">Terms of service</span>
        </div>
      </section>

    </footer>
  );
};

export default footer;
