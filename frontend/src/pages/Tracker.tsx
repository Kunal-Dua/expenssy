import Navbar from "../components/Navbar";

const Tracker = () => {
    return (
        <>
            <Navbar />
            <div className="flex m-2 p-2 justify-evenly">
                <div className="">
                    <div>create</div>
                    <div> all </div>
                </div>
                <div>
                    <div>chart 1</div>
                    <div> 2</div>
                    <div>3</div>
                </div>
            </div>
        </>
    );
};

export default Tracker;
