import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';

const NextPrevButton = ({ next, previous }) => {
  return (
    <section className='w-full flex justify-center'>
      <div>
        <div className='flex justify-center -mb-4'>
          <button className='bg-transparent text-5xl cursor-pointer text-gray-400 hover:text-text focus:outline-0 transition duration-200' onClick={previous} aria-label="Previous">
            <IoIosArrowRoundBack />
          </button>
          <button className='bg-transparent text-5xl cursor-pointer text-gray-400 hover:text-text focus:outline-0 transition duration-200' onClick={next} aria-label="Next">
            <IoIosArrowRoundForward />
          </button>
        </div>
      </div>
    </section>
  )
}

export default NextPrevButton