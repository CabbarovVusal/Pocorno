import React, { useState, useEffect, useContext } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import "../css/navbar.css";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
  MdOutlineShoppingBag,
} from "react-icons/md";
import { FaSearch, FaRegUser } from "react-icons/fa";
import CartModal from "../mui/CartModal";
import SearchSection from "../mui/SearchSection";
import axios from "axios";
import { CartContext } from "../Context/CartContext";

const navigation = [
  { name: "Create Your Own", href: "/create-your-own", current: true },
  { name: "Shop Popcorn", href: "/shop", current: false },
  { name: "Shop By Occasion", href: "#", current: false },
  { name: "Explore", href: "/explore", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavbarHeader = () => {
  const { cartCount } = useContext(CartContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openSearchModal, setOpenSearchModal] = useState(false);
  const [showShopSection, setShowShopSection] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  const handleShopPopcornClick = () => {
    setShowShopSection((prevState) => !prevState);
  };

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  const handleOpenSearchButton = () => setOpenSearchModal(true);
  const handleCloseSearchButton = () => setOpenSearchModal(false);

  const handleDisclosureToggle = (isOpen) => {
    setIsDropdownOpen(isOpen);

    if (isOpen) {
      document.body.classList.add("body-no-scroll");
    } else {
      document.body.classList.remove("body-no-scroll");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && isDropdownOpen) {
        document.body.classList.remove("body-no-scroll");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isDropdownOpen]);

  return (
    <>
      <div className={classNames(isScrolled ? "h-24" : "h-0")}></div>

      <Disclosure
        as={motion.nav}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={classNames(
          isScrolled
            ? "fixed top-0 left-0 w-full bg-white shadow-lg z-10 transition-all duration-300"
            : "bg-transparent fixed top-0 left-0 w-full bg-white shadow-lg z-10 transition-all duration-300"
        )}
      >
        {({ open }) => (
          <>
            <div
              className={classNames(
                "mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 wrapper",
                open ? "bg-white" : "bg-transparent"
              )}
            >
              <div className="relative flex items-center justify-between nav-container">
                <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                  <DisclosureButton
                    className="relative inline-flex group mobile-menu items-center justify-center rounded-full outline-none text-white p-2"
                    onClick={() => handleDisclosureToggle(!open)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon
                      aria-hidden="true"
                      className="block h-6 w-6 group-data-[open]:hidden"
                    />
                    <XMarkIcon
                      aria-hidden="true"
                      className="hidden h-6 w-6 group-data-[open]:block"
                    />
                  </DisclosureButton>
                </div>
                <div className="flex flex-1 items-center justify-center lg:justify-start sm:items-stretch md:justify-center sm:justify-center">
                  <motion.div
                    className="flex flex-shrink-0 items-center"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {open ? (
                      <>
                        <div className="search-icon lg:hidden">
                          <FaSearch
                            className={`text-lg mr-4 cursor-pointer search-item ${
                              isScrolled ? "scroll-icon" : ""
                            }`}
                            onClick={handleOpenSearchButton}
                          />
                        </div>

                        <div className="user-icon lg:hidden">
                          <FaRegUser
                            className={`text-lg cursor-pointer user-item ${
                              isScrolled ? "scroll-icon" : ""
                            }`}
                          />{" "}
                        </div>
                      </>
                    ) : (
                      <a href="/">
                        <img
                          width={200}
                          height={88}
                          alt="Your Company"
                          src="https://www.popcornopolis.com/wp-content/themes/popcornopolis/assets/images/logo.svg"
                          className="nav-img"
                        />
                      </a>
                    )}
                  </motion.div>
                </div>

                <motion.div
                  className="nav-right flex flex-col items-end"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <div
                    className={`upper flex flex-row justify-between hidden ${
                      isScrolled ? "hidden" : "lg:flex"
                    }`}
                  >
                    <motion.p
                      className="nav-right-item sofia-sans-condensed"
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7 }}
                    >
                      Fundraising
                    </motion.p>
                    <motion.p
                      className="sofia-sans-condensed"
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      Corporate Gifting
                    </motion.p>
                  </div>

                  <div className="down flex flex-row items-center">
                    <div className="hidden sm:ml-6 sm:block flex flex-row">
                      <div className="flex hidden lg:flex space-x-4 relative">
                        {navigation.map((item) => (
                          <div
                            key={item.name}
                            className="icon-list flex flex-row items-center relative group"
                          >
                            <a
                              href={item.href}
                              aria-current={item.current ? "page" : undefined}
                              className={classNames(
                                item.current ? "nav-link" : "nav-link",
                                item.name === "Shop Popcorn"
                                  ? "nav-link-shop"
                                  : "nav-link"
                              )}
                              onMouseEnter={() => {
                                item.name === "Shop Popcorn"
                                  ? handleShopPopcornClick()
                                  : () => set;
                              }}
                              onMouseLeave={() =>
                                setShowShopSection(!showShopSection)
                              }
                            >
                              {item.name}
                            </a>
                            {item.name === "Shop Popcorn" && (
                              <MdKeyboardArrowDown
                                onClick={handleShopPopcornClick}
                              />
                            )}
                            {item.name === "Shop Popcorn" && (
                              <div className="category__product absolute flex-row flex justify-around hidden group-hover:flex">
                                <div className="flavors-box">
                                  <h4 className="h1">Flavors.</h4>
                                  <div className="product-list-2 flex flex-row">
                                    <ul className="product-list__item flex flex-col">
                                      <li className="category-item">
                                        <img
                                          src="https://www.popcornopolis.com/wp-content/uploads/2021/09/Zebra_Kernel.png"
                                          alt="Chocolate Flavor"
                                          className="list-image"
                                        />
                                        <p className="category-name-flavor">
                                          Chocolate
                                        </p>
                                        <b></b>
                                      </li>
                                      <li className="category-item">
                                        <img
                                          src="https://www.popcornopolis.com/wp-content/uploads/Kernels_CaramelKettle_CYO_Step3_Silo_01-1.png"
                                          alt="Kettle Flavor"
                                          className="list-image"
                                        />
                                        <p className="category-name-flavor">
                                          Kettle
                                        </p>
                                        <b></b>
                                      </li>
                                      <li className="category-item">
                                        <img
                                          src="https://www.popcornopolis.com/wp-content/uploads/2021/09/Kernel_Unicorn_CYO_Step3_Silo_01.png"
                                          alt="Sweet Flavor"
                                          className="list-image"
                                        />
                                        <p className="category-name-flavor">
                                          Sweet
                                        </p>
                                        <b></b>
                                      </li>
                                    </ul>
                                    <ul className="product-list__item flex flex-col">
                                      <li className="category-item">
                                        <img
                                          src="https://www.popcornopolis.com/wp-content/uploads/Kernel_CinnamonToast_CYO_Step3_Silo_01.png"
                                          alt=""
                                          className="list-image"
                                        />
                                        <p className="category-name-flavor">
                                          Caramel
                                        </p>
                                        <b></b>
                                      </li>
                                      <li className="category-item">
                                        <img
                                          src="https://www.popcornopolis.com/wp-content/uploads/2021/07/cheddar-kernel-1.png"
                                          alt=""
                                          className="list-image"
                                        />
                                        <p className="category-name-flavor">
                                          Cheese
                                        </p>
                                        <b></b>
                                      </li>
                                      <li className="category-item">
                                        <img
                                          src="https://www.popcornopolis.com/wp-content/uploads/HP_E3_FUEGO_Kernels_105x105_01.png"
                                          alt=""
                                          className="list-image"
                                        />
                                        <p className="category-name-flavor">
                                          Spicy
                                        </p>
                                        <b></b>
                                      </li>
                                    </ul>
                                  </div>
                                  <button className="category-btn">
                                    All Flavors <FaArrowRightLong />
                                  </button>
                                </div>
                                <div className="catt flex flex-col">
                                  <div className="category-boxes flex">
                                    <div className="types-box">
                                      <h4 className="h1">TYPES.</h4>
                                      <div className="category-right">
                                        <div className="category-right__inner">
                                          <div className="product-list-2">
                                            <ul className="product-list__item">
                                              <li className="types-name">
                                                Cones
                                                <b></b>
                                              </li>
                                              <li className="types-name">
                                                Tins
                                                <b></b>
                                              </li>
                                              <li className="types-name">
                                                Gift Baskets
                                                <b></b>
                                              </li>
                                              <li className="types-name">
                                                Bags
                                                <b></b>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="collection-box">
                                      <h4 className="h1">Collections.</h4>
                                      <div className="category-right">
                                        <div className="category-right__inner">
                                          <div className="product-list-2">
                                            <ul className="product-list__item">
                                              <li className="category-name">
                                                <a href="">
                                                  <em>Nearly Naked</em>
                                                  <b></b>
                                                </a>
                                              </li>
                                              <li className="category-name">
                                                <a href="">
                                                  <em>Zebra® Popcorn</em>
                                                  <b></b>
                                                </a>
                                              </li>
                                              <li className="category-name">
                                                <a href="">
                                                  <em>Takis Fuego®</em>
                                                  <b></b>
                                                </a>
                                              </li>
                                              <li className="category-name">
                                                <a href="">
                                                  <em>Double Drizzle</em>
                                                  <b></b>
                                                </a>
                                              </li>
                                              <li className="category-name">
                                                <a href="">
                                                  <em>Unicorn Popcorn®</em>
                                                  <b></b>
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <button className="category-btn-2">
                                    Shop All <FaArrowRightLong />
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                      <motion.button
                        type="button"
                        className="relative rounded-full p-3 flex justify-center items-center text-white outline-none search-btn hidden lg:flex"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleOpenSearchButton}
                      >
                        <FaSearch className="text-lg search-icon" />
                      </motion.button>

                      <motion.button
                        type="button"
                        className="hidden lg:flex relative rounded-full p-3 flex justify-center items-center text-white outline-none user-btn"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaRegUser className="text-lg user-icon" />
                      </motion.button>
                      <motion.button
                        type="button"
                        className="relative rounded-full p-3 flex justify-center items-center text-white outline-none basket-btn"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleOpen}
                      >
                        <MdOutlineShoppingBag className="basket-icon" />
                        <p className="count">{cartCount}</p>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <DisclosurePanel className="lg:hidden relative dropdown-menu-nav navbar-scroll">
              <div className="space-y-1 px-2 pb-3 pt-2 dropdown-menu__inner">
                {navigation.map((item) => (
                  <div
                    className="flex justify-between dropdown-nav-list items-center"
                    key={item.name}
                  >
                    <DisclosureButton
                      as="a"
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        "rounded-md  py-2 text-base font-medium dropdown-nav-item"
                      )}
                    >
                      {item.name}
                    </DisclosureButton>
                    {item.name === "Shop Popcorn" && (
                      <div className="relative">
                        <div onClick={handleShopPopcornClick}>
                          {showShopSection ? (
                            <MdKeyboardArrowUp className="arrow-icon" />
                          ) : (
                            <MdKeyboardArrowDown className="arrow-icon" />
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                <div className="dropdown-menu__about flex justify-between">
                  <ul className="list">
                    <li className="list-item">Customer Care</li>
                    <li className="list-item">FAQs</li>
                    <li className="list-item">About Popcorn</li>
                    <li className="list-item">Bulk Orders</li>
                    <li className="list-item">Fundraising</li>
                  </ul>
                  <ul className="list">
                    <li className="list-item">Our Story</li>
                    <li className="list-item">Tastings</li>
                    <li className="list-item">Shopping and Returns</li>
                    <li className="list-item">Contact</li>
                    <li className="list-item">Corporate Gifting</li>
                  </ul>
                </div>
                <div className="social-media flex justify-center">
                  <ul className="social-media-list flex justify-between">
                    <li>
                      <a href="" className="facebook-icon"></a>
                    </li>
                    <li>
                      <a href="" className="insta-icon"></a>
                    </li>
                    <li>
                      <a href="" className="twitter-icon"></a>
                    </li>
                  </ul>
                </div>
                <div className="mobile-navi-copyright flex flex-col items-center">
                  <p>
                    <strong>© 2024 Barcel USA, LLC</strong>
                  </p>
                  <a
                    className="mobile-navi-created last-focusable-element-menu external"
                    href="https://isadoradigitalagency.com/"
                    target="_blank"
                  >
                    Site by
                    <b> Isadora Agency</b>
                  </a>
                </div>
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>

      {openModal && <CartModal open={openModal} handleClose={handleClose} />}
      {openSearchModal && (
        <SearchSection
          open={openSearchModal}
          handleCloseSearchButton={handleCloseSearchButton}
        />
      )}
    </>
  );
};

export default NavbarHeader;
