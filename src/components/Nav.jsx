import React from 'react';
import logo from '../assets/logo.png'; // Make sure the logo path is correct
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const backgroundImages = [
  'https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_lg_2x/f_auto/primary/vc4ucoz6rs96naqnk3jb',
  'https://guardian.ng/wp-content/uploads/2023/03/paris-olympics-eiffel-tower-2024.jpg',
  'https://images.squarespace-cdn.com/content/v1/5f343ff9541cd11433040eca/1698663595358-ZP24UW8AHAWBNLYS6BE5/PARIS.jpg',
];

export default function Hero() {
  return (
    <section className="relative text-white h-screen flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false} // Hide status indicator
        className="absolute inset-0"
        interval={5000} // Interval for auto play
        transitionTime={1000} // Transition time between slides
        swipeable={true} // Allow swipe on mobile
        emulateTouch={true} // Touch emulation on mobile
      >
        {backgroundImages.map((image, index) => (
          <div key={index} className="relative">
            <img src={image} alt={`Olympic Background ${index + 1}`} className="object-cover w-full h-full" />
          </div>
        ))}
      </Carousel>

      <div className="relative z-10 text-center p-4 md:p-8 lg:p-12">
        <div className="w-1/2 md:w-1/3 mx-auto mb-6">
          <img
            src={logo}
            alt="Olympic Logo"
            className="h-24 md:h-32 mx-auto"
          />
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
          Welcome to the Olympics 2024
        </h1>
        <p className="text-base md:text-lg lg:text-xl mb-6">
          Experience the thrill of the world's greatest sporting event.
        </p>

        <div className="mt-6 md:mt-8">
          <a
            href="#events"
            className="bg-yellow-500 text-gray-800 py-2 px-4 md:py-3 md:px-6 rounded-full font-semibold hover:bg-yellow-400 transition duration-300"
          >
            See Events
          </a>
        </div>
      </div>
    </section>
  );
}
