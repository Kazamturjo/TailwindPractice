import React from 'react';
import { offer } from '../../assets/images';
import Button from '../../Component/Button/Button';
import { arrowRight } from '../../assets/icons';

const SpecialOffer = () => {
  return (
    <section className='flex flex-wrap items-center px-4 py-8 sm:px-6 lg:px-8'>
      <div className='w-full md:w-1/2 lg:w-2/3'>
        <img 
          src={offer}
          alt='shoe'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
      <div className='w-full md:w-1/2 lg:w-1/3 mt-8 md:mt-0'>
        <div className='text-center md:text-left'>
          <h2 className='text-4xl font-extrabold'>
            <span className='text-orange-500' >Special</span> Offer
          </h2>
        </div>
        <p className='mt-4 max-w-2xl mx-auto md:mx-0 text-center md:text-left text-gray-500 sm:text-lg'>
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className='mt-6 text-center md:text-left text-gray-500 sm:text-lg'>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className='mt-6 text-center md:text-left'>
          <Button label='Shop now' iconURL={arrowRight}/>
          <div className='mt-5'>

          <Button 
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-state-gray'
            textColor='text-state-gray'
          />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpecialOffer;
