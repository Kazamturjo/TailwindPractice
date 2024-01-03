import React from 'react'
import { services } from '../../constants/Index'
import ServiceCard from '../../Component/ServiceCard'

const Services = () => {
  return (
    <section className='max-container flex justify-center flex-wrap gap-9 mt-20 ml-5'>
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services