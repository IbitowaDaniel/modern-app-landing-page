"use client";

import SectionHeader from "@app/components/SectionHeader";
import { FAQsData } from "@app/constants";
import { Disclosure, Transition } from '@headlessui/react'
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/20/solid'



const FAQs = () => (
  <section className="boxWidth paddingX paddingY">
    {FAQsData.map((item, index) => (
      <>
        <div key={item.id} index={index}>
          <SectionHeader
            heading={item.subTitle}
            headingSecondary={item.mainTitle} /></div>

        {item.features.map((c, index) => (
          <div key={c.id} index={index}>
            <div className="w-full mt-8">
              <div className="mx-auto w-full md:max-w-xl lg:max-w-2xl">
                <Disclosure>
                  {({ open }) => (
                    <>

                      <Disclosure.Button className={`flex relative py-4 pl-8 w-full text-left text-base sm:text-lg font-medium text-headingSecondary focus:outline-none`}>
                        <span className='-z-10'> {c.title}</span>
                        <PlusCircleIcon
                          className={`${open ? 'opacity-0' : ''
                            } absolute left-0 top-[30%] h-6 w-6 text-secondary -z-10 opacity-100`}
                        />
                        <MinusCircleIcon
                          className={`${open ? 'opacity-100' : ''
                            } absolute left-0 top-[30%] h-6 w-6 text-secondary -z-10 opacity-0`}
                        />
                      </Disclosure.Button>
                       
                          <Disclosure.Panel>
                            <div className={`pb-2 pl-8 text-base leading-8 text-text ${index !== 3 ? " border-b-2" : " border-b-0"}`}>{c.contents}</div>
                          </Disclosure.Panel>
                        
                    </>
                  )}
                </Disclosure>

              </div>
            </div>

          </div>
        ))}
      </>
    ))}
  </section>
);

export default FAQs