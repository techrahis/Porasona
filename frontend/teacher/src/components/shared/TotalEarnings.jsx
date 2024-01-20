import React from 'react';
import PropTypes from 'prop-types';
import { Button } from "../ui/button";
import { FaRupeeSign } from "react-icons/fa";

const TotalEarnings = (props) => {
  return (
    <div className='shadow-lg shadow-indigo-500/20 px-6 py-4 rounded-lg w-max'>
            <div>
                <h3 className=' font-bold'>Your Total Earnings</h3>
                {/* dropdown */}
            </div>
            <ul className='flex justify-between'>
                <li>    
                    This month <br />
                    <span className='font-semibold'>${props.month}</span>
                </li>
                <li>
                    Today <br />
                    <span className='font-semibold'>${props.day}</span>
                </li>                
            </ul>
            <div className='flex gap-10 items-center mt-6'>
                <span>
                    Available <br />
                    <span className='font-semibold'>${props.available}</span>
                </span>                
                <Button variant="add">
                <FaRupeeSign /><p className="sm:hidden">Withdraw</p>
                </Button>
            </div>
        </div>
  )
}
TotalEarnings.propTypes = {
    month: PropTypes.number.isRequired,
    day: PropTypes.number.isRequired,
    available: PropTypes.number.isRequired,
};

TotalEarnings.defaultProps = {
    month: 9990,   
    day: 9990,     
    available: 9990,  
};
export default TotalEarnings