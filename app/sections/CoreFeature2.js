import { TextFeature } from "@app/components/TextFeature";
import { Partner } from "@app/assets";
import { CoreFeature2Data } from "@app/constants";
import Image from "next/image";


const CoreFeature2 = () => (
  <section className="boxWidth paddingX paddingY">
    {CoreFeature2Data.map((item, id) => (
      <div key={id} className='md:grid grid-cols-2 max-w-full mx-auto gap-x-2 lg:gap-x-6'>
        <TextFeature
          subTitle={item.subTitle}
          mainTitle={item.mainTitle}
          description={item.description}
          btnText={item.btnText}
          btnUrl={item.btnURL}
        />

        <div className='pt-10 xl:p-0'>
          <Image
            src={Partner}
            className='w-full mx-auto'
            alt="image thumbnail" />
        </div>
      </div>
    ))}
  </section>
);

export default CoreFeature2