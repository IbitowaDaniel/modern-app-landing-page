import SectionHeaderLeft from "./SectionHeaderLeft";

export const TextFeature = ({ subTitle, mainTitle, description, btnText, btnUrl, }) => (
  <div className='text-center md:text-left'>

    <SectionHeaderLeft
      heading={subTitle}
      headingSecondary={mainTitle} />

    <p className='text-textSecondary text-base lg:text-[17px] leading-7 my-6 xs:max-w-md mx-auto md:leading-8 md:max-w-xs md:mx-0 lg:max-w-md'>{description}</p>

    <a href={btnUrl}>
      <button aria-label={btnText} className='font-semibold text-[14px] lg:text-base text-white bg-primary rounded-full px-5 py-2 lg:px-7 lg:py-3 mb-8'>
        {btnText}
      </button>
    </a>

  </div>

);
