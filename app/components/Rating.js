import { FaStar } from 'react-icons/fa';


const Rating = ({ rating }) => {
  const totalRating = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      totalRating.push(
        <li className="text-yellow mr-[1px]">
          <FaStar />
        </li>
      );
    } else {
      totalRating.push(
        <li className="text-gray-600 mr-[1px]">
          <FaStar />
        </li>
      );
    }
  }

  return (
    <div className="">
      <ul className='flex mb-4'>{totalRating}</ul>
    </div>
  );
};

export default Rating;