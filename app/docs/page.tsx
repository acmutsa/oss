import Navbar from "@/components/Navbar";

export default function Page() {
	return (
		<>
			<Navbar className="bg-black" />
			<main className="min-h-screen w-screen flex flex-col items-center pt-[20vh]">
				<h2 className="font-black text-5xl text-blue-500 pb-5">Howdy!</h2>
				<h1 className="font-black text-white text-2xl pb-10">
					What Can We Help You With Today?
				</h1>
				<div className="grid grid-cols-2 gap-x-10 max-w-[1000px] w-screen rounded-xl relative">
					<div className="relative">
						<div className="aspect-[12/9] w-full bg-gray-200 rounded-xl relative z-30"></div>
						<div className="aspect-[12/9] w-full bg-blue-500 rounded-xl absolute bottom-0 translate-y-3 -translate-x-3 z-20"></div>
					</div>
					<div className="relative">
						<div className="aspect-[12/9] w-full bg-gray-200 rounded-xl relative z-30"></div>
						<div className="aspect-[12/9] w-full bg-blue-500 rounded-xl absolute bottom-0 translate-y-3 -translate-x-3 z-20"></div>
					</div>
				</div>
				<div className="absolute bottom-0 translate-y-[45%]">
					<h1 className="font-black bottom-0 w-screen text-[30vw] text-center text-black drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)] ">
						DOCS
					</h1>
					<div className="absolute bottom-0 bg-gradient-to-b from-transparent to-black w-full h-full z-10"></div>
				</div>
			</main>
		</>
	);
}
