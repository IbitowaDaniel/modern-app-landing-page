import SectionHeader from "@app/components/SectionHeader";
import { FeatureData } from "@app/constants";
import { ImgNextToText } from "@app/components/ImgNextToText";

const Feature = () => (
  <section className="boxWidth paddingX paddingY">
    {FeatureData.map((item, index) => (
      <div key={index}>
        <SectionHeader
          heading={item.subTitle}
          headingSecondary={item.mainTitle} />

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 lg:gap-y-12 mt-8 sm:mt-14'>
          {item.features.map((c, i) => (
            <div key={i}>
              <ImgNextToText
                src={c.imgSrc}
                alt={c.altText}
                title={c.title}
                text={c.text} />
            </div>
          ))}
        </div>
      </div>
    ))}

  </section>
);

export default Feature