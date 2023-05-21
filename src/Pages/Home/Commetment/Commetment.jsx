import SectionTitle from "../../../Share/SectionTitle/SectionTitle";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Commetment = () => {

    useEffect(() => {
        AOS.init();
      }, []);
    
  return (
    <div  className="container px-8 mx-auto my-8  overflow-x-auto">
    <SectionTitle title='Our commitment' subtitle='We are try our best to keep our commitment'/>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-2">
      <div  data-aos="fade-right" data-aos-duration="1000" className="group space-y-2  text-center  ">
        <img src="https://cdn.shopify.com/s/files/1/0636/3044/2723/files/fast_d004d35d-30be-4b0a-9db6-f76b7f24b759.png?v=1648526302" alt="" className="mx-auto transition-all duration-150 transform group-hover:animate-bounce " />
        <h3 className="text-xl font-bold md:text-2xl text-slate-800">
        Free Shipping
        </h3>
        <p className="md:text-xl text-sm text-slate-400 flex justify-center items-center gap-2">
        On Order $23 - 7 Days A Week
        </p>
      </div>
      
      <div  data-aos="fade-left" data-aos-duration="1000" className="group space-y-2  text-center  ">
        <img src="https://cdn.shopify.com/s/files/1/0636/3044/2723/files/money-back_1_4ef1e00c-2e88-4dd8-aad2-e11a939fb0ef.png?v=1648526317" alt="" className="mx-auto transition-all duration-150 transform group-hover:animate-bounce " />
        <h3 className="text-xl font-bold md:text-2xl text-slate-800">
        Money Back Guarantee
        </h3>
        <p className="md:text-xl text-sm text-slate-400 flex justify-center items-center gap-2">
        Send Within 30 Days
        </p>
      </div>
      
      <div  data-aos="fade-up" data-aos-duration="1000" className="group space-y-2  text-center  ">
        <img src="https://cdn.shopify.com/s/files/1/0636/3044/2723/files/exchange_d00a69f6-1747-47ac-903f-ab21a18edc5f.png?v=1648526326" alt="" className="mx-auto transition-all duration-150 transform group-hover:animate-bounce " />
        <h3 className="text-xl font-bold md:text-2xl text-slate-800">
        Free Returns
        </h3>
        <p className="md:text-xl text-sm text-slate-400 flex justify-center items-center gap-2">
        Free 90 Days Returns Policy
        </p>
      </div>
      
      <div  data-aos="fade-down" data-aos-duration="1000" className="group space-y-2  text-center  ">
        <img src="https://cdn.shopify.com/s/files/1/0636/3044/2723/files/wall-clock_3_4ba76f88-6443-4c0c-8d4a-6f454513f123.png?v=1648529159" alt="" className="mx-auto transition-all duration-150 transform group-hover:animate-bounce " />
        <h3 className="text-xl font-bold md:text-2xl text-slate-800">
        24/7 Customer Service
        </h3>
        <p className="md:text-xl text-sm text-slate-400 flex justify-center items-center gap-2">
        Call Us 24/7 At 000 -123 - 455
        </p>
      </div>
      
    </div>
  </div>
  );
};

export default Commetment;
