import React from "react";
import facebook1 from "../Assets/test.svg";
import linkedin from "../Assets/linkedin.svg";
import insta from "../Assets/insta.svg";
import twitter from "../Assets/twitter.svg";
import qr from "../Assets/qr.svg";

function Footer() {
  return (
    <footer>
      <div className=" bg-black grid grid-cols-5 gap-3 text-white text-sm leading-[2.7] pt-14 px-20">
        {/* Column 1 */}
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-base">Exclusive</h1>
          <span>Subscribe</span>
          <span>Get 10% off your first order</span>
          <input
            type="text"
            placeholder="Enter your email"
            className="px-2 py-1 w-11/12 border border-gray-600 rounded-md bg-black text-white placeholder-gray-400 text-sm"
          />
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-base">Support</h1>
          <p className="text-sm leading-tight">
            111 Bijoy Sarani, Dhaka,
            <br />
            DH 1515, Bangladesh
          </p>
          <span>exclusive@gmail.com</span>
          <span>+88015-88888-9999</span>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-base">Account</h1>
          <span>My Account</span>
          <span>Login / Register</span>
          <span>Wishlist</span>
          {/* <span>Shop</span> */}
        </div>

        {/* Column 4 */}
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-base">Quick Link</h1>
          <span>Privacy Policy</span>
          {/* <span>Terms of Use</span> */}
          <span>FAQ</span>
          <span>Contact</span>
        </div>

        {/* Column 5 */}
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-base">Download App</h1>
          <span>Save $3 with Exclusive App</span>
          <div>
            <img src={qr} alt="Facebook" />
          </div>
          <div className="flex pt-1 gap-2 items-center">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook1} alt="Facebook" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="Twitter" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={insta} alt="Instagram" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex pt-12 pb-4 justify-center bg-black">
        <p className="text-gray-600">
          Copyright Remel 2022. All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
