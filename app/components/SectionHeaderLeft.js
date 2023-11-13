

const SectionHeaderLeft = ({ heading, headingSecondary }) => (
  <div className="text-center xs:max-w-lg mx-auto md:mx-0 md:text-left md:max-w-xs lg:max-w-sm xl:max-w-md">
    <p className="sectionTextHeading">{heading}</p>
    <h3 className="sectionTextHeadingSecondary lg:text-4xl lg:leading-[3rem] xl:text-[42px]">{headingSecondary}</h3>
  </div>
);


export default SectionHeaderLeft