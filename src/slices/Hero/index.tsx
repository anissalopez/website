import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { ultra } from '../../app/layout'
/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid min-h-[70vh] grid-cols-1 md:grid-cols-2">
       <div className="col-start-1 md:row-start-1">
          <h1 
            className={`${ultra.className} mb-8 text-[clamp(3rem,20vmin,10rem)] 
            font-exrabold leading-none tracking-lighter`}
            aria-label={
              slice.primary.first_name + " " + slice.primary.last_name
            }
          >
            <span className='block text-primaryPink'>{slice.primary.first_name}</span>
            <span className="block text-secondaryPink">{slice.primary.last_name}</span>
            <span className="block text-green">{slice.primary.tag_line}</span>
          </h1>
       </div>     
      </div> 
    </section>
  );
};

export default Hero;
