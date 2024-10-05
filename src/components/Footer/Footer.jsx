import React, { useEffect, useState } from "react";
import "../Footer/footer.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

const Footer = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    setShowAnimation(true);
  }, []);

  const slideUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <>
      <section>
        <div className="benefits cleared benefits-show " bis_skin_checked="1">
          <div className="inner flex mb-0 mt-0" bis_skin_checked="1">
            <div
              className="benefits__guarantee wow fadeInUpS"
              data-wow-duration="0.5s"
              data-wow-delay="0s"
              style={{ visibility: "visible" }}
              bis_skin_checked="1"
            >
              <p className="flex items-center guarantee-paragraph">
                <em className="strong">100%</em>{" "}
                <em className="em">
                  Satisfaction <br /> Guarantee
                </em>
              </p>
            </div>

            <div
              className="benefits__rating flex justify-center flex-col"
              data-wow-duration="0.5s"
              data-wow-delay="0.2s"
              style={{ visibility: "visible" }}
              bis_skin_checked="1"
            >
              <span className="benefits__rating-stars">
                Rating 4.8 out of 5 stars
              </span>
              <p className="rating-paragraph">
                Our customers <br />
                recommend us
              </p>
              <strong className="strong-paragraph">
                Based on 735 verified customer reviews
              </strong>
            </div>
          </div>
        </div>
      </section>

      <motion.section
        className="subscribe-section"
        initial={{ background: "transparent" }}
        animate={{
          background:
            "url(//www.popcornopolis.com/wp-content/themes/popcornopolis/assets/css/../images/bg-newsletter.jpg) no-repeat 100% 100% / cover",
        }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="newsletter cleared wow fadeIn"
          data-wow-duration="0.3s"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            visibility: "visible",
          }}
        >
          <div className="inner inner_slim flex justify-center items-center">
            <motion.div
              className="newsletter__inner flex"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
            >
              <h2 className="h2 text-white ml-30">
                Sign up to receive exclusive offers and discounts<span>.</span>
              </h2>
              <form action="#" className="flex items-center relative">
                <input
                  placeholder="Your e-mail address"
                  type="text"
                  id="your-email-subscribe"
                  autoComplete="email"
                />
                <button
                  type="submit"
                  className="circle-btn circle-btn-yellow next outline-none absolute flex justify-center items-center"
                >
                  <FaArrowRightLong />
                </button>
              </form>
            </motion.div>
          </div>
          <span
            className="newsletter-deco absolute"
            style={{ background: "transparent" }}
          >
            <img
              src="https://www.popcornopolis.com/wp-content/uploads/2021/09/callout-accent-image.png"
              alt=""
              width={220}
              height={100}
            />
          </span>
        </motion.div>
      </motion.section>

      <motion.footer
        className="bg-gray-900 text-white py-8 footer"
        initial="hidden"
        animate="visible"
        variants={slideUp}
      >
        <div className="container mx-auto flex flex-col md:flex-row justify-between">
          <div className="img-box mb-4 md:mb-0 lg:flex md:flex hidden lg:flex-col flex-col md:flex-col">
            <a href="#">
              <img
                src="https://www.popcornopolis.com/wp-content/themes/popcornopolis/assets/images/footer-logo.svg"
                alt=""
              />
            </a>
          </div>

          <ul className="lg:flex md:flex hidden lg:flex-col footer-nav-list flex-col md:flex-col font-bold justify-between">
            <li>
              <a href="#" className="hover:underline">
                Customer Care
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Tastings
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Bulk Orders
              </a>
            </li>
          </ul>

          <ul className="lg:flex md:flex footer-nav-list flex-col lg:flex-col hidden md:flex-col font-bold justify-between">
            <li>
              <a href="#" className="hover:underline">
                Our Story
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Popcorn
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>

          <ul className="lg:flex md:flex footer-nav-list flex-col hidden lg:flex-col md:flex-col font-bold justify-between">
            <li>
              <a href="#" className="hover:underline">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Shipping and <br /> Returns
              </a>
            </li>
          </ul>

          <div className="flex justify-center md:flex-col lg:flex-col sm:flex sm:flex-row sm:justify-center">
            <div className="icon-box flex flex-row items-center mr-2">
              <a
                href="#"
                className="flex flex-row rounded-full flex items-center justify-center icon mt-2 mr-2"
              >
                <FaFacebookF className="fb-icon flex items-center justify-center" />
              </a>
              <span className="text-sm font-extrabold pt-2 hover:text-underline">
                Facebook
              </span>
            </div>
            <div className="icon-box flex flex-row items-center mr-2">
              <a
                href="#"
                className="flex rounded-full flex items-center justify-center flex-row icon mt-2 mr-2"
              >
                <FaInstagram className="insta-icon-2" />
              </a>
              <span className="text-sm font-extrabold pt-2 hover:text-underline">
                Instagram
              </span>
            </div>
            <div className="icon-box flex flex-row items-center mr-2">
              <a
                href="#"
                className="flex rounded-full flex items-center justify-center flex-row icon mt-2 mr-2"
              >
                <FaXTwitter className="x-icon" />
              </a>
              <span className="text-sm font-extrabold pt-2 hover:text-underline">
                X
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-sm container">
          <div className="footer-paragraph flex justify-between sm:flex-wrap md:flex-nowrap">
            <div
              className="footer__copyright__left lg:text-md w-1/3 md:text-md sm:text-sm"
              bis_skin_checked="1"
            >
              <p className="text-white">
                <strong>© 2024 Barcel USA, LLC </strong>
                <a href="/terms-of-use/">Terms of use</a>{" "}
                <a href="/privacy-policy/">Privacy Policy</a>{" "}
                <a href="/ca-supply-chain/">CA Supply Chain</a>{" "}
                <a href="/privacy-preferences/">
                  Do Not Sell or Share My Personal Information
                </a>{" "}
                <a href="/about-our-ads/">About Our Ads</a>{" "}
                <a href="/accessibility/">Accessibility</a>{" "}
                <a href="/covid-19-response/">COVID-19 Response</a>{" "}
                <a
                  href="https://barcel-usa.com/careers"
                  target="_blank"
                  className="external hover:text-underline"
                >
                  Join Our Team
                  <b aria-hidden="true" className="fa fa-external-link"></b>
                </a>
              </p>
            </div>
            <div
              className="footer__copyright__right w-1/3 lg:text-md sm:text-sm md:text-md"
              bis_skin_checked="1"
            >
              <a
                className="lg:justify-end md:justify-end sm:justify-start footer-bottom-created text-white external flex"
                href="https://isadoradigitalagency.com/"
                target="_blank"
              >
                By{" "}
                <span className="text-bold ml-2 hover:text-underline">
                  {" "}
                  Isadora Digital Agency
                </span>
              </a>
            </div>
          </div>
        </div>
      </motion.footer>
    </>
  );
};

export default Footer;
