import Image from "next/image";

export const ImgNextToText = ({ src, alt, title, text }) => (
  <div className='flex gap-x-4 mt-2 mx-auto lg:mx-0 xs:max-w-sm sm:max-w-md'>

    <div className='flex-shrink-0'>
      <Image
        src={src}
        className='w-14 lg:w-16'
        alt={alt}
      />
    </div>

    <div>
      <h3 className='font-bold text-[18px] xl:text-[20px] text-headingSecondary mb-2'>{title}</h3>
      <p className='text-text text-base leading-7'>{text}</p>
    </div>

  </div>
);