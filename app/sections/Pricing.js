import { PartnerBg } from "@app/assets";
import Image from "next/image";
import { PricingData } from "@app/constants";

const Pricing = () => (
  <section className="flexCenter paddingX z-[-500] relative isolate bg-primary">
    <Image
      src={PartnerBg}
      alt=""
      className="bgCover"
    />
    <div id="pricing" className="boxWidth">
      <div className='my-20'>
        {PricingData.map((item, index) => (
          <div key={index} className="">

            <div className='text-center my-14'>
              <p className="uppercase text-white opacity-70 text-xs sm:text-[14px] font-semibold mb-3 tracking-widest">{item.subTitle}</p>
              <h3 className="font-semibold text-white text-2xl sm:text-3xl xl:text-[32px]">{item.mainTitle}</h3>
            </div>

            <div className='md:flex gap-x-8 lg:gap-x-2'>
              {item.features.map((c, i) => (
                <div key={i} className='text-white bg-[#2F5392] mb-14 py-14 px-4 xs:px-8 rounded-lg w-full xs:max-w-sm mx-auto lg:max-w-md'>

                  <div className='flex justify-between'>
                    <div>
                      <h3 className='text-xl font-bold mb-1 sm:mb-2'>{c.name}</h3>
                      <p className='text-sm mb-5 opacity-60'>{c.description}</p>
                    </div>

                    <div className='text-right'>
                      <p className='text-sm'>{c.priceDecription}</p>
                      <p className='text-xl lg:text-2xl text-secondary font-semibold'>{c.priceWithUnit}</p>
                    </div>
                  </div>

                  {c.points.map((c, i) => (
                    <div key={i}>
                      <ul className={`list-none flex gap-x-2 sm:gap-x-3 ${c.opacity}`}>
                        <button className={`w-6 h-12 text-secondary ${c.btnColor} p-0 text-xl xs:text-2xl flex-shrink-0`} aria-label="list icon"> {c.icon} </button><li className='py-3 text-base'>{c.text}</li> </ul>
                    </div>
                  ))}

                  <div className='text-center'>
                    <button className='mt-6 mb-2 px-5 py-2 lg:px-6 bg-white text-primary text-base rounded-full font-semibold' aria-label="Signup button">{c.buttonText}</button>
                  </div>
                </div>

              ))}
            </div>
          </div>
        ))}
      </div>

    </div>

  </section>
);

export default Pricing