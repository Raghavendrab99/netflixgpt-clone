const VideoTitle = ({ title, overview }) => {

    return (
        <div className="px-6 mt-32 md:pt-64 px-12  absolute text-white w-full aspect-video">
            <h1 className=" text-xl md:p-4 md:text-3xl font-bold">{title}</h1>
            <p className=" hidden md:inline-block p-4 text-lg w-1/2">{overview}</p>
            <div className="my-2 md:my-0 md:mx-4">
                <button className="bg-white text-black py-2 px-2 text-sm sm:mt-4 md:px-12 md:p-4 rounded-lg md:text-xl hover:bg-slate-300">▶️ Play</button>
                <button className="hidden md:inline-block bg-gray-500 text-black px-8 p-4 mx-2 rounded-lg text-xl bg-opacity-45">ℹ️ More Info</button>
            </div>
        </div>
    )
};

export default VideoTitle;