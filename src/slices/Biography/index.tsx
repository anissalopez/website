"use client"

import Avatar from "@/components/Avatar";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { gsap } from "gsap";

import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { useEffect, useRef } from "react";

export type BiographyProps = SliceComponentProps<Content.BiographySlice>;


const Biography = ({ slice }: BiographyProps): JSX.Element => {
  const component = useRef(null);
  

  
  useEffect(() => {
    let ctx = gsap.context(() => {
   
      gsap
        .timeline()
        .fromTo(
          ".title",
          { x: -100, y:-100,  rotate: -45 },
          {
            x: 0,
            y:0, 
            rotate: 0,
            ease: "elastic.out(1,0.3)",
            duration: 1,
          
          },
        )
        .fromTo(
          ".body",
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
          // {
          //   y: -500,
          //   opacity: 0,
          //   scale: 1.5,
          //   x:500
          // },
          // {
          //   opacity: 1,
          //   y: 0,
          //   x:0,
          //   duration: 2,
          //   scale: 1,
          //   ease:"back.out(2)"
          // },
        );
    }, component);
    return () => ctx.revert(); // cleanup!
  }, []);

  const renderLetters = (name: string, key: string) => {
    if (!name) return;
    return name.split("").map((letter, index) => (
      <span
        key={index}
        className={`name-animation name-animation-${key}-index inline-block opacity-0 `}
      >
        {letter}
      </span>
    ));
``};

  
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      ref={component}
    >
      <div className="title grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
        <Heading size="lg" className="col-start-1">
          {slice.primary.title}
        </Heading>

        <div className={`body prose text-3xl text-white prose-invert col-start-1`}>
          <PrismicRichText field={slice.primary.body} />
        </div> 

       
        <Button
          linkField={slice.primary.button_link}
          label={slice.primary.button_text}
        />

        <Avatar
          image={slice.primary.avatar}
          className="row-start-1 max-w-sm md:col-start-2 md:row-end-3"
        />
      </div>
    </Bounded>
  );
};

export default Biography;