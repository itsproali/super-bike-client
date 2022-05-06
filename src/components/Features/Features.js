import React from "react";
import { RiHomeGearLine } from "react-icons/ri";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoCarSportSharp, IoGitBranch } from "react-icons/io5";

const Features = () => {
  return (
    <div className="my-8 mx-2 md:mx-4 lg:mx-8">
      <h1 className="text-center text-4xl mb-12 hover:text-red-600 duration-300 font-semibold">
        Exclusive Bike Features
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        <div
          className="order-1 text-center md:text-right "
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="my-4 md:my-8">
            <div className="inline-block p-2 border rounded-full border-gray-500 border-dashed hover:border-red-600 duration-300">
              <RiHomeGearLine className="mx-auto md:mx-0 md:ml-auto text-right text-gray-500 hover:text-red-600 text-3xl duration-300 "></RiHomeGearLine>
            </div>
            <h3 className="text-xl font-semibold">Super Fast Bike</h3>
            <p className="text-gray-500 font-light">
              Speed is Reborn. These bike come with super duper speed. These max
              speed is more than 270 km/h.
            </p>
          </div>
          <div className="my-4 md:my-8">
            <div className="inline-block p-2 border rounded-full border-gray-500 border-dashed hover:border-red-600 duration-300">
              <MdOutlineDesignServices className="mx-auto md:mx-0 md:ml-auto text-right text-gray-500 hover:text-red-600 text-3xl duration-300 "></MdOutlineDesignServices>
            </div>
            <h3 className="text-xl font-semibold">Eye catchy Design</h3>
            <p className="text-gray-500 font-light">
              Minimalist eye catchy awesome design. These bike can be used for
              show off.
            </p>
          </div>
        </div>
        <div
          className="w-full md:w-auto md:order-1 mx-auto hover:scale-105 duration-700"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <img src="https://i.ibb.co/SfgzHjv/suzuki-circle.png" alt="Bike" />
        </div>
        <div
          className="order-2 text-center md:text-left "
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="my-4 md:my-8">
            <div className="inline-block p-2 border rounded-full border-gray-500 border-dashed hover:border-red-600 duration-300">
              <IoCarSportSharp className="mx-auto md:mx-0 md:ml-auto text-right text-gray-500 hover:text-red-600 text-3xl duration-300 "></IoCarSportSharp>
            </div>
            <h3 className="text-xl font-semibold">Perfect Sports Bike</h3>
            <p className="text-gray-500 font-light">
              Perfect bikes collection for sports and events. Sports bikes comes
              with some cool & extra functionalities.
            </p>
          </div>
          <div className="my-4 md:my-8">
            <div className="inline-block p-2 border rounded-full border-gray-500 border-dashed hover:border-red-600 duration-300">
              <IoGitBranch className="mx-auto md:mx-0 md:ml-auto text-right text-gray-500 hover:text-red-600 text-3xl duration-300 "></IoGitBranch>
            </div>
            <h3 className="text-xl font-semibold">Disc Braking System</h3>
            <p className="text-gray-500 font-light">
              Disc brakes are always better than drum brakes and can deliver
              excellent braking performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
