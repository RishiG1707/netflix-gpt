const VideoTitle = ({ title, overview }) => {
	return (
		<div className="w-screen aspect-video pt-[25%] px-24 absolute bg-gradient-to-r from-black">
			<h1 className="text-6xl font-bold text-white">{title}</h1>
			<p className="py-6 text-lg w-1/3 text-white">{overview}</p>
			<div className="">
				<button className="bg-white text-black font-semibold px-10 py-3 mx-2 w-15 text-xl rounded-md hover:bg-opacity-60">
					▶ Play
				</button>
				<button className="bg-stone-600 text-white font-semibold bg-opacity-80 px-10 py-3 mx-2 w-15 text-xl rounded-md hover:bg-opacity-60">
					ⓘ More Info
				</button>
			</div>
		</div>
	);
};

export default VideoTitle;
