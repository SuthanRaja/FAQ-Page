import { useState } from 'react';
import plusIcon from '../assets/icon-plus.svg';
import minusIcon from '../assets/icon-minus.svg';

function Expand({ title, children }) {

    const [isActive, setIsActive] = useState(false);

    const expand = () => setIsActive(!isActive);
    
    return (
        <div className='m-5'>

            <div className="flex justify-between items-center cursor-pointer" onClick={expand}>

                <span className='text-md md:text-l font-semibold'>{title}</span>
                <img src={isActive ? minusIcon : plusIcon} className='ml-2' />

            </div>

            {isActive && (
                <div className="mt-2">
                    {children}
                </div>
            )}

        </div>

    );

}

export default Expand;