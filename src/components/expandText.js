import Expand from "./expandFunction";



function ExpandText() {
    return (
        <div>
            <Expand title="What is Frontend Mentor, and how will it help me?">
                <p className='text-xs md:text-sm text-gray-600 my-5'>Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for  all levels and ideal for portfolio building.</p>
            </Expand>

            <Expand title="Is Frontend Mentor free?">
                <p className='text-xs md:text-sm text-gray-600 my-5'>Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.</p>
            </Expand>

            <Expand title="Can I use Frontend Mentor projects in my portfolio?">

                <p className='text-xs md:text-sm text-gray-600 my-5'>Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!</p>

            </Expand>


            <Expand title="How can I get help if I'm stuck on a Frontend Mentor challenge?">
                <p className='text-xs md:text-sm text-gray-600 my-5'> The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.</p>
            </Expand>
        </div>

    );
}

export default ExpandText