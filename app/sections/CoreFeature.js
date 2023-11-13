"use client"

import SectionHeaderLeft from "@app/components/SectionHeaderLeft";
import { ImgNextToText } from "@app/components/ImgNextToText";
import { PhoneMockup } from "@app/assets";
import { CoreFeatureData } from "@app/constants";
import Image from "next/image";


const CoreFeature = () => (
  <section className="boxWidth paddingX paddingY">

    <div className='md:grid grid-cols-1 md:grid-cols-2 gap-x-4'>

      {CoreFeatureData.map((item, index) => (
        <div key={index} className='md:pt-12 md:order-last lg:pt-24'>
          <SectionHeaderLeft
            heading={item.subTitle}
            headingSecondary={item.mainTitle} />

          {item.features.map((c, i) => (
            <div key={i} className='lg:hover:shadow lg:p-4 p-4 md:p-0 duration-200 ease-in-out lg:mt-12'>
              <ImgNextToText
                src={c.imgSrc}
                alt={c.altText}
                title={c.title}
                text={c.text} />
            </div>
          ))}
        </div>
      ))}



      <div className='mx-auto max-w-lg lg:max-w-full'>

        <div className='mt-8 md:mt-0'>
          <Image
            src={PhoneMockup}
            alt='Product Phone Mockup'
            className='md:max-h-[35rem] lg:w-[25rem] lg:max-h-[40rem]'
          />
        </div>

      </div>
    </div>
  </section>
);

export default CoreFeature