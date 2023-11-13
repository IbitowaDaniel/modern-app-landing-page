import { PartnerBg } from "@app/assets";
import { NumberedFunctionData } from "@app/constants";
import Image from "next/image";


const NumberedFunction = () => (
  <section className="paddingY">
    <div className="flexCenter paddingX relative isolate z-[-500] bg-primary">
      <Image
        src={PartnerBg}
        alt=""
        className="bgCover" />

      <div className="boxWidth">
        {NumberedFunctionData.map((item, index) => (
          <div id={index} className="text-center my-20">
            <p className="uppercase text-white opacity-70 text-xs sm:text-[14px] font-semibold mb-3 tracking-widest">{item.subTitle}</p>
            <h3 className="font-semibold text-white text-2xl sm:text-3xl xl:text-[32px]">{item.mainTitle}</h3>

            <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 text-center sm:grid-cols-2 lg:grid-cols-4">
              {item.features.map((c, i) => (
                <div key={i} className={`flexCenter sm:items-start mx-auto max-w-xs xs:max-w-sm flex-col gap-y-3`}>
                  <div className="lg:flex lg:gap-x-2">
                    <h3 className="text-heading bg-white font-bold rounded-[15px] sm:rounded-[25px] p-3 md:p-4 sm:text-left text-2xl lg:text-3xl">{`0${c.no}`}</h3>
                    <div className="hidden lg:flex">
                      <Image
                        src={c.img}
                        alt=""
                        classname=""
                      />
                    </div>
                  </div>

                  <h4 className="font-semibold text-lg sm:text-xl text-white sm:text-left">{c.title}</h4>
                  <p className="text-white opacity-70 px-5 sm:leading-7 sm:px-0 sm:text-left">{c.text}</p>

                </div>

              ))}
            </div>

          </div>
        ))}


      </div>
    </div>

  </section>
);

export default NumberedFunction