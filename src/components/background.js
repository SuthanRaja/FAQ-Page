import img from '../assets/background-pattern-desktop.svg'

function bgImage() {
    return (
        <>
            <img src={img} alt="" className='w-screen object-cover h-56 ' />
        </>
    );
}

export default bgImage;