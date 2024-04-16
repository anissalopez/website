"use client"

import { useEffect, useRef } from "react";


import { Content, KeyTextField } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { myFont } from "../../app/layout";
import { gsap } from "gsap";
import Bounded from "@/components/Bounded";
import { Shapes } from "./Shapes"



export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice }: HeroProps): JSX.Element => {
  const component = useRef(null);


  useEffect(() => {
    let ctx = gsap.context(() => {
      // create as many GSAP animations and/or ScrollTriggers here as you want...
      gsap
        .timeline()
        .fromTo(
          ".name-animation",
          { x: -100, opacity: 0, rotate: -10 },
          {
            x: 0,
            opacity: 1,
            rotate: 0,
            ease: "elastic.out(.7,0.3)",
            duration: 1,
            transformOrigin: "left top",
            stagger: { each: 0.1, from: "random" },   
          },
        )
        .fromTo(
          ".job-title",
          {
            y:-200,
            opacity: 0,
            scale: 1.2,
          },
          {
            opacity: 1,
            y:0,
            duration: 1,
            scale: 1,
            ease: "elastic.out(1,0.3)",
          },
         
        );
    }, component);
    return () => ctx.revert(); // cleanup!
  }, []);


  const renderLetters = (name: KeyTextField, key: string) => {
      if (!name) return;
      return name.split("").map((letter, index) => (
        <span
          key={index}
          className={`name-animation name-animation-${key}-index inline-block opacity-0 `}
        >
          {letter}
        </span>
      ));
  };






  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      ref={component}
    >
      <div className="grid min-h-[70vh] grid-cols-1 md:grid-cols-2">
        <Shapes />
       <div className="col-start-1 md:row-start-1">
          <h1 
            className={`${myFont.className} mb-8 text-[clamp(3rem,20vmin,10rem)] 
            leading-none tracking-lighter`}
            aria-label={
              slice.primary.first_name + " " + slice.primary.last_name
            }
          >
            <span className='block text-primaryPink'>
              {renderLetters(slice.primary.first_name, "first")}
            </span>
            <span className="-mt-[.2em] block text-secondaryPink">
              {renderLetters(slice.primary.last_name, "last")}
            </span>
          </h1>
        <span className={`${myFont.className} job-title block bg-yellow
            bg-clip-text text-4xl
            font-bold uppercase
            tracking-[.2em] text-transparent
            md:text-6xl
        `}
        >
         {slice.primary.tag_line}
        </span>
       </div>     
      </div> 
    </Bounded>
  );
};

export default Hero;
