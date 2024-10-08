import Header from "./header";
import ExpandText from "./expandText";
function card() {
    return (
        <>
            <div className=" flex justify-center items-center relative mt-[-90px] p-6 font-custom  " >
                <div className="w-full md:w-2/5 lg:w-2/5 h-1/2  border border-slate-300 shadow-lg relative bg-white rounded-xl  ">
                    <Header />
                    <ExpandText />
                </div>
            </div>
        </>

    );
}

export default card;