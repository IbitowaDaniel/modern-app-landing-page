import { FaPlayCircle } from 'react-icons/fa';
import { BannerThumb } from '@app/assets';
import { SponsorsData } from '@app/constants';
import Image from 'next/image';



const Hero = () => (
  <section className="boxWidth paddingX">
    <div className='pt-20 pb-28'>
      <div className='text-white flex flex-nowrap overflow-hidden'>

        <div className='w-full sm:w-[85%] md:w-[55%] lg:w-[50%] xl:w-[45%] flex flex-col justify-start flex-shrink-0'>
          <h1 className='text-[2.5rem] xs:text-[3.2rem] sm:text-[3.8rem] leading-[3rem] xs:leading-[4rem] sm:leading-[4.5rem] md:text-[3rem] lg:text-[3.2rem] md:leading-[3.8rem] xl:text-[3.8rem] xl:leading-[4.4rem] font-semibold mb-6'>Experience your ultimate mobile application</h1>
          <p className='text-base xs:text-[1.1rem] sm:text-[1.25rem] leading-8 xs:leading-9 sm:leading-10 md:text-[1rem] lg:text-[1.1rem] md:leading-8 lg:leading-9'>Get your blood tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.</p>


          <div className="flex flex-row my-10 gap-x-6 text-sm xs:text-base">
            <button href="#" className="font-medium text-primary bg-white rounded-full px-5 py-3 lg:px-7" aria-label="Get Started">
              Get Started
            </button>
            <button aria-label="Play Video"><FaPlayCircle className='inline-block text-2xl mr-2' />
              Watch Video
            </button>
          </div>
          <div className='sm:flex gap-x-4'><p className='opacity-70 text-base whitespace-nowrap'>Sponsored by:</p>
            <div className='flex gap-x-6 mt-4 sm:mt-0'>
              {SponsorsData.map((item) => (
                <a key={item.id} href={item.path} >
                  <Image src={item.image} alt={item.title} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className='hidden md:block w-full justify-center md:ml-[-110px] lg:ml-[-115px] xl:ml-[-150px] md:mr-[-145px] lg:mr-[-160px] xl:mr-[-180px] md:mt-[40px] lg:mt-[4px] xl:mt-[-40px] lg:mb-[-45px] xl:mb-[-70px] overflow-hidden -z-10'>
          <Image src={BannerThumb}
            alt="app mockup"
            className=''
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero
