import { TextFeature } from "@app/components/TextFeature";
import { PaymentThumb } from "@app/assets";
import { PaymentData } from "@app/constants";
import Image from "next/image";


const Payment = () => (
  <section className="boxWidth paddingX paddingY">
    {PaymentData.map((item, id) => (
      <div key={id} className='md:grid grid-cols-2 gap-x-2 md:gap-x-6'>
        <div className="md:order-last lg:pt-16 xl:pt-36">
          <TextFeature
            subTitle={item.subTitle}
            mainTitle={item.mainTitle}
            description={item.description}
            btnText={item.btnText}
            btnUrl={item.btnURL}
          />
        </div>

        <div className='pt-2 -ml-6 xs:-ml-8 md:ml-0 md:pb-10 w-full lg:mx-0 mx-auto'>
          <Image
            src={PaymentThumb}
            className=''
            alt="app mockup"
            />
        </div>
      </div>
    ))}
  </section>
);

export default Payment