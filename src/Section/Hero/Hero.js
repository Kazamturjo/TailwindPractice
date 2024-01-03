import React from 'react';
import { shoes, statistics } from '../../constants/Index';
import Button from '../../Component/Button/Button';
import { arrowRight } from '../../assets/icons';
import { bigShoe1 } from '../../assets/images';
import ShoeCard from '../../Component/ShoeCard';

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = React.useState(bigShoe1);

  return (
    <section
      id='home'
      className='flex justify-between items-center max-lg:flex-col gap-10 mx-auto max-w-screen-3xl px-5'>
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 ml-11'>
        <p className='text-xl font-montserrat text-coral-red text-orange-500'>
          Our Summer collections
        </p>

        <h1 className='mt-10 font-palanquin text-6xl max-sm:text-4xl max-sm:leading-10 font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-5 sm:pr-10'>
            The New Arrival
          </span>
          <br />
          <span className='text-orange-500 inline-block mt-3'>Nike</span> Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-base leading-6 mt-6 mb-8 sm:max-w-sm'>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Button label='Shop now' iconURL={arrowRight} />

        <div className='flex justify-start items-start flex-wrap w-full mt-10 gap-8'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-2xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-5 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-24 bg-blue-100 bg-hero bg-cover bg-center rounded-lg'>
        <img
          src={bigShoeImg}
          alt='shoe collection'
          className='object-contain relative z-10 max-w-full'
        />

        <div className='flex sm:gap-4 gap-2 absolute -bottom-[6%] sm:left-[5%] max-sm:px-4'>
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
