import SectionHeader from "@app/components/SectionHeader";
import { KeyFeatureData } from "@app/constants";
import Image from "next/image";



const KeyFeature = () => (
  <section id="features" className="boxWidth paddingX paddingY">

    {KeyFeatureData.map((item, index) => (
      <div key={index}>
        <SectionHeader
          heading={item.subTitle}
          headingSecondary={item.MainTitle} />

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-x-4'>
          {item.features.map((c, i) => (
            <div key={i} className='mt-10 sm:mt-16 text-center'>
              <div className='flex items-center flex-col justify-center'>
                <Image
                  src={c.imgSrc}
                  alt={c.altText}
                  className='w-20 lg:w-24 xl:w-28' />
                <h3 className='font-bold text-lg text-textSecondary mt-4'>{c.title}</h3>
                <p className='text-text leading-8 mt-2 xs:px-12 sm:px-0 md:max-w-[280px] mx-auto'>{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}

  </section>
);

export default KeyFeature