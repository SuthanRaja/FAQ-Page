
import icon from '../assets/icon-star.svg';
function Header() {
    return (
        <>
            <div className="m-5 flex">
                <img src={icon} alt="" className='w-7' /><h1 className="text-3xl font-custom font-bold ml-3">FAQs</h1>
            </div>
        </>
    );
}

export default Header;