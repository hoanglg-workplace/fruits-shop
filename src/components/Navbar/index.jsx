import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { BiMenu } from "react-icons/bi";
import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const navbarMenuItems = [
  {
    id: 1,
    label: "Home",
    href: "/",
  },
  {
    id: 2,
    label: "Fruits",
    href: "/fruits",
  },
  {
    id: 3,
    label: "Services",
    href: "/services",
  },
  {
    id: 4,
    label: "Contact Us",
    href: "/contact",
  },
];

const NavItemContainer = () => {
  const cartState = useSelector((state) => state.cart);
  const [isNavItem, setIsNavItem] = useState(1)

  return (
    <>
      {navbarMenuItems.map((item, index) => (
        <li
          key={index}
          className="cursor-pointer px-6 md:border-none border-b border-gray-600"
          onClick={() => setIsNavItem(item.id)}
        >
          <Link className={`nav_label ${isNavItem === item.id ? 'nav_label_active' : ''}`} to={item.href}>
            {item.label}
          </Link>
        </li>
      ))}
      <div className="search">
        <div className>
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="buttons text-center">
        <NavLink to="/login" className="custom_black_outline-button py-1 m-1 md:w-20">
          <i className="fa fa-sign-in-alt mr-1"></i> Login
        </NavLink>
        <NavLink to="/register" className="custom_black_outline-button py-1 m-1 md:w-20">
          <i className="fa-solid fa-user-plus mr-1"></i> Register
        </NavLink>
        <NavLink to="/cart" className="custom_black_outline-button py-1 m-1 md:w-20">
          <i className="fa-solid fa-cart-shopping mr-1"></i> Cart (
          {cartState.length}){" "}
        </NavLink>
      </div>
      {/* <div className="custom_orange-button uppercase py-1">
      <a href="/#" >Get A quote</a>
    </div> */}
    </>
  );
};

const Navbar = () => {
  const [isNavMenuMobileOpen, setIsNavMenuMobileOpen] = useState(false);

  return (
    <nav className="w-full bg-background mx-auto">
      <div className="flex justify-between items-center h-24 max-w-[100%] w-full mx-auto px-4 text-black">
        <a className="flex justify-center items-center" href="/#">
          {/* <h1 className="w-full text-3xl font-bold text-primary">HLG.</h1> */}
          <img src={logo} alt="logo" className="w-11 mr-1" />
          <span className="font-bold text-xl uppercase">Fruits Shop</span>
        </a>

        <ul className="md:flex hidden justify-center items-center">
          <NavItemContainer />
        </ul>

        <div>
          <BiMenu
            className="cursor-pointer md:hidden"
            size={20}
            onClick={() => setIsNavMenuMobileOpen(!isNavMenuMobileOpen)}
          />
        </div>
        <div
          className={
            isNavMenuMobileOpen
              ? "fixed left-0 top-0 w-[80%] h-full border-r border-r-gray-900 ease-in-out duration-500 bg-white z-10"
              : "fixed left-[-100%] ease-in-out duration-500"
          }
        >
          <div className="flex mx-10">
            <img src={logo} alt="logo" className="w-11 object-contain mr-1" />
            <h1 className="w-full text-3xl font-bold text-primary m-4 pt-4">
              Fruits Shop
            </h1>
          </div>

          <ul className="uppercase p-4 ">
            <NavItemContainer />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
