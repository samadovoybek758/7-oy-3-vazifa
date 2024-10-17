import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import img1 from "../assets/img-1.jpg";
import img2 from "../assets/img-2.webp";
import img3 from "../assets/img-3.jpg";
import img4 from "../assets/img-4.jpg";
import img5 from "../assets/img-5.jpg";
import img6 from "../assets/img-6.jpg";
import img7 from "../assets/img-7.jpg";
import img8 from "../assets/img-8.jpg";



function About() {
  return (
    <div className="flex flex-col mx-auto max-w-[1000px]">
      <p>lorem1000</p>
      <LazyLoadImage className="block" alt="alt" height={500} src={img1} width={500} />
      <div>
      <LazyLoadImage alt="alt" height={500} src={img2} width={500} />
      </div>
     
      <div>
      <LazyLoadImage alt="alt" height={500} src={img3} width={500} />
      </div>
      <div>
      <LazyLoadImage alt="alt" height={500} src={img4} width={500} />
      </div>
      <div>
      <LazyLoadImage alt="alt" height={500} src={img5} width={500} />
      </div>
      <div>
      <LazyLoadImage alt="alt" height={500} src={img6} width={500} />
      </div>
      <div>
      <LazyLoadImage alt="alt" height={500} src={img7} width={500} />
      </div>
      <div>
      <LazyLoadImage alt="alt" height={500} src={img8} width={500} />
      </div>
      
    </div>
  );
}

export default About;
