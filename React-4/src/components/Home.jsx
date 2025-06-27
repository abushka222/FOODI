import React from "react";
import logo from "../assets/Group 20.svg";
import imageone from "../assets/Intersect.svg";
import { FaSearch } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa6";
import burger from "../assets/burger.svg";
import sandwich from "../assets/sandwich.svg";
import icecreame from "../assets/ice creame.svg";
import juice from "../assets/juice.svg";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Fattoush from "../assets/Fattoush salad.svg";
import { FaStar } from "react-icons/fa";
import Vegetable from "../assets/Vegetable salad.svg";
import Egg from "../assets/Egg salad.svg";
import kiz from "../assets/Mask group.svg";
import oila from "../assets/oila.png";
import salad from "../assets/fi-rr-salad.svg";
import fast from "../assets/fi-rr-time-fast.svg";

const Home = () => {
  return (
    <header className="font-bold ">
      <nav className="flex justify-between items-center m-5 ">
        <img src={logo} alt="" />

        <ul className="display flex gap-4 text-lg">
          <li>
            <a
              href="#"
              className=" hover:text-[#39DB4A] transition duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-[#39DB4A] transition duration-200"
            >
              Meny
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-[#39DB4A] transition duration-200"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-[#39DB4A] transition duration-200"
            >
              Offers
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <FaSearch />
          <p className="flex items-center gap-2 bg-[#39DB4A] p-2 rounded-2xl">
            <FaPhoneVolume />
            Contact
          </p>
        </div>
      </nav>

      <div className="flex justify-evenly items-center">
        <div>
          <h1 className="text-[50px]">
            Dive into Delights <br /> Of Delectable <span className="text-[#39DB4A]">Food</span>
          </h1>
          <p className="pt-2 text-[#4A4A4A]">
            Where Each Plate Weaves a Story of Culinary <br /> Mastery and
            Passionate Craftsmanship
          </p>
          <div className="flex items-center gap-5 pt-2">
            <button className="flex items-center gap-2 bg-[#39DB4A] p-2 rounded-2xl text-white">Order Now</button>
            <button className=" gap-5 text-[#4A4A4A] flex items-center">
              Watch Video <FaPlay className="text-black shadow-2xl shadow-black/70 rounded-full " />
            </button>
          </div>
        </div>

        <div>
          <img src={imageone} alt="" width={500} />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />

      <div>
        <h3 className="text-[#FF6868] flex justify-center">Customer Favorites</h3>
        <h2 className="flex justify-center text-[35px]">Popular Categories</h2>

        <div className="flex justify-evenly pt-10">

          <div className=" p-5 shadow-2xl rounded-2xl text-center items-center">
            <img src={burger} alt="" className=" w-25 h-25 bg-[#C1F1C6] p-1 rounded-full" />
            <h2 className="text-[22px]">Main Dish</h2>
            <p className="text-[#4A4A4A]">(86 dishes)</p>
          </div>

          <div className="p-5 shadow-2xl rounded-2xl text-center items-center">
            <img src={sandwich} alt="" className="w-25 h-25 bg-[#C1F1C6] p-1 rounded-full" />
            <h2 className="text-[22px]">Break Fast</h2>
            <p className="text-[#4A4A4A]">(12 break fast)</p>
          </div>

          <div className="p-5 shadow-2xl rounded-2xl text-center items-center">
            <img src={icecreame} alt="" className="w-25 h-25 bg-[#C1F1C6] p-1 rounded-full" />
            <h2 className="text-[22px]">Dessert</h2>
            <p className="text-[#4A4A4A]">(48 dessert)</p>
          </div>

          <div className="p-5 shadow-2xl rounded-2xl text-center items-center">
            <img src={juice} alt="" className="w-25 h-25 bg-[#C1F1C6] p-1 rounded-full" />
            <h2 className="text-[22px]">Browse All</h2>
            <p className="text-[#4A4A4A]">(255 Items)</p>
          </div>

        </div>
      </div>
      <br />
      <br />
      <br />
      <br />


      <div>
        <h3 className="text-[#FF6868] flex pl-[150px] justify-start text-[20px]">Customer Favorites</h3>
        <div className="flex justify-between items-center">
          <h1 className=" flex pl-[150px] justify-start text-[35px]">Standout Dishes <br /> From Our Menu </h1>
          <div className="flex gap-10">
            <button className=" text-black  bg-[#EFEFEF] shadow-2xl shadow-black/70 rounded-full w-10 h-10 flex justify-center items-center hover:bg-[#39DB4A] transition duration-200 "><FaChevronLeft /></button>
            <button className=" text-black  bg-[#EFEFEF] shadow-2xl shadow-black/70 rounded-full w-10 h-10 flex justify-center items-center hover:bg-[#39DB4A] transition duration-200 "><FaChevronRight /></button>
          </div>
        </div>
      </div>


      <div className="flex justify-evenly">
        <div className="p-5 shadow-2xl rounded-2xl  items-center">
          <img src={Fattoush} alt="" />
          <h2 className="text-[20px]">Fattoush salad</h2>
          <p className="text-[#555555]">Description of the item</p>
          <div className="flex justify-between pl-3 pr-3 items-center">
            <p><span className="text-[#FF6868]">$</span>24.00</p>
            <p className="items-center flex text-[#454545]"><FaStar className="text-[#FFE605]" />4.9</p>
          </div>
        </div>

        <div className="p-5 shadow-2xl rounded-2xl  items-center">
          <img src={Vegetable} alt="" />
          <h2 className="text-[20px]">Vegetable salad</h2>
          <p className="text-[#555555]">Description of the item</p>
          <div className="flex justify-between pl-3 pr-3 items-center">
            <p><span className="text-[#FF6868]">$</span>26.00</p>
            <p className="items-center flex text-[#454545]"><FaStar className="text-[#FFE605]" />4.6</p>
          </div>
        </div>

        <div className="p-5 shadow-2xl rounded-2xl  items-center">
          <img src={Egg} alt="" />
          <h2 className="text-[20px]">Egg vegi salad</h2>
          <p className="text-[#555555]">Description of the item</p>
          <div className="flex justify-between pl-3 pr-3 items-center">
            <p><span className="text-[#FF6868]">$</span>23.00</p>
            <p className="items-center flex text-[#454545]"><FaStar className="text-[#FFE605]" />4.5</p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />


      <div className="flex justify-evenly items-center">
        <div>
          <img src={kiz} alt="" width={400} />
        </div>

        <div>
          <h3 className="text-[#FF6868] flex  justify-start text-[20px]">Testimonials </h3>
          <h1 className="text-[50px]">
            What Our Customers <br /> Say About Us
          </h1>
          <p className="pt-2 text-[#4A4A4A]">
            “I had the pleasure of dining at Foodi last night, and <br /> I'm still raving about the experience! The attention to <br />  detail in presentation and service was impeccable”
          </p>
          <div className="flex items-center gap-5 pt-2">
            <div>
              <img src={oila} alt="" width={150} />
            </div>

            <div>
              <div>
                <h3>Customer Feedback</h3>
              </div>

              <div className="flex gap-5">
                <p className="items-center flex text-[#454545]"><FaStar className="text-[#FFE605]" />4.9</p>
                <p className="text-[#4A4A4A]">(18.6k Reviews)</p>
              </div>

            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />



      <div className="flex justify-evenly items-center">
        <div>
          <h3 className="text-[#FF6868] flex  justify-start text-[20px]">Our Story & Services</h3>
          <h1 className="text-[50px]">
            Our Culinary Journey <br /> And Services
          </h1>
          <p className="pt-2 text-[#4A4A4A]">
            Rooted in passion, we curate unforgettable dining <br /> experiences and offer exceptional services, <br /> blending culinary artistry with warm hospitality.
          </p>
          <div className="flex items-center gap-5 pt-2">
            <button className="flex items-center gap-2 bg-[#39DB4A] pl-5 pr-5 p-2 rounded-2xl text-white">Explore</button>
          </div>
        </div>

        <div>

          <div className="flex gap-20 justify-evenly">
            <div className=" p-5 shadow-2xl rounded-2xl text-center items-center">
            <img src={salad} alt="" className="ml-6 w-25 h-25  p-1" />
            <h2 className="text-[22px]">Catering</h2>
            <p className="text-[#4A4A4A]">Delight your guests <br /> with our flavors and <br /> presentation</p>
          </div>

          <div className=" p-5 shadow-2xl rounded-2xl text-center items-center">
            <img src={fast} alt="" className="ml-6 w-25 h-25  p-1" />
            <h2 className="text-[22px]">Fast delivery</h2>
            <p className="text-[#4A4A4A]">We deliver your order <br /> promptly to your door</p>
          </div>
          </div>

<br />  

          <div className="flex gap-20 justify-evenly">
            <div className=" p-5 shadow-2xl rounded-2xl text-center items-center">
            <img src={salad} alt="" className="ml-6 w-25 h-25  p-1" />
            <h2 className="text-[22px]">Catering</h2>
            <p className="text-[#4A4A4A]">Delight your guests <br /> with our flavors and <br /> presentation</p>
          </div>

          <div className=" p-5 shadow-2xl rounded-2xl text-center items-center">
            <img src={fast} alt="" className="ml-6 w-25 h-25  p-1" />
            <h2 className="text-[22px]">Fast delivery</h2>
            <p className="text-[#4A4A4A]">We deliver your order <br /> promptly to your door</p>
          </div>
          </div>
          


        </div>

      </div>







    </header >
  );
};

export default Home;
