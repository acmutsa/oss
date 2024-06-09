import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function HomePage() {
	return (
		<>
			<Navbar />
			<main className="h-screen w-screen overflow-hidden font-sans bg-zinc-900">
				<div className="grid grid-cols-2 h-full max-w-7xl mx-auto w-full">
					<div className="flex flex-col items-center justify-center ">
						<h1 className="font-black text-6xl bg-gradient-to-b from-white via-blue-600 to-blue-700 text-transparent bg-clip-text">
							Building Awesome Tools For Clubs and Hackathons
						</h1>
					</div>
					<div className="flex flex-col items-center justify-center">
						<div className="relative aspect-square w-full max-w-[400px]">
							<div className="absolute bg-blue-700 opacity-60 blur-[150px] w-full h-full"></div>
							<Image
								src={"/img/logo/acm_oss_logo.png"}
								alt="ACM Logo"
								fill
								className=""
							/>
						</div>
					</div>
				</div>
			</main>
			<section className="min-h-screen w-screen"></section>
		</>
	);
}
