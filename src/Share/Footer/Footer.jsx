import Lottie from "lottie-react";
import animationData from "../../assets/lottiefile/logo.json";
const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content mt-12">
      <div>
        <div className="ms-2 normal-case text-xl flex items-center justify-center gap-4">
          <Lottie
            animationData={animationData}
            className=" rounded-xl  shadow-lg"
          />
          <span className="hidden sm:inline-block ">Khela Gor</span>
        </div>

        <p>
          PsychoProgrammer Industries Ltd.
          <br />
          Providing reliable tech since 2019
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
