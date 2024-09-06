import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Balancer from "react-wrap-balancer";
import { ReadMeWindows } from "./landing-client";

export default function HomePage() {
	return (
		<>
			<Navbar />
			<SideLine />
			<main className="h-screen w-screen overflow-hidden font-sans">
				<div className="absolute left-[45%] top-[-30vh] h-[110vh] w-[225px] -translate-x-5 -rotate-[50deg] bg-white opacity-20 blur-3xl"></div>
				<div className="grid grid-cols-2 h-full max-w-7xl mx-auto w-full">
					<div className="flex flex-col items-start gap-y-8 justify-center">
						<h1 className="font-black text-6xl bg-gradient-to-b from-white via-blue-600 to-blue-700 text-transparent bg-clip-text">
							{">"} Building Awesome
							<br />
							<span className="opacity-0">{">"}</span> Tools for Orgs and
							<br />
							<span className="opacity-0">{">"}</span> Hackathons
							<div className="bg-blue-700 h-3 mb-[-0.75rem] ml-1 inline-block w-10 animate-pulse"></div>
						</h1>
						<div className="flex">
							<span className="text-6xl opacity-0 font-black select-none">{">"}</span>
							<Button className="bg-white hover:bg-gray-200 text-black ml-3">
								Checkout The Docs {">"}
							</Button>
							<div className="h-10 w-[1px] mx-3 bg-white opacity-80"></div>
							<Button className="bg-blue-700 ">Github {">"}</Button>
						</div>
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
			<section className="w-screen max-w-7xl mx-auto grid grid-cols-2">
				<div className="min-h-[50vh] flex flex-col items-start justify-center">
					<h1 className="font-black text-5xl text-primary">README.md</h1>
					<p className="pt-10 font-semibold font-sans leading-8 text-lg">
						<Balancer>
							Hello there! We are the ACM UTSA Open Source Software team, also known
							as ACM OSS or ACM Projects. We are a group of students who are
							passionate about open source software that is feature packed, purpose
							built, and a joy to use.
						</Balancer>
					</p>
				</div>
				<ReadMeWindows />
			</section>
			<section className="w-screen min-h-screen max-w-7xl mx-auto flex flex-col items-center pt-72">
				<h1 className="font-black text-8xl text-center leading-[1.1]">
					Used By
					<br />
					<span className="text-blue-700">Incredible Teams</span>
				</h1>
				<div className="bg-white h-24 w-full my-16 flex items-center justify-center"></div>
				<p className="text-center text-xl font-bold max-w-[800px]">
					Our software help teams move faster so they can focus on providing the best
					experience possible for hackers & members.
				</p>
			</section>
		</>
	);
}

function SideLine() {
	return (
		<>
			<div className="absolute top-0 bg-gradient-radial from-white to-blue-500 w-3 h-3 ml-[calc((100vw/2)-40.32rem-100px)] mt-[calc(50vh-1rem)] rounded-full sideline-glow"></div>
			<div className="absolute top-0 h-[50vh] ml-[calc((100vw/2)-40rem-100px)] mt-[50vh] border-l-blue-700 border-l-2"></div>
			<div className="absolute top-0 h-[calc(15vh+5px)] ml-[calc((100vw/2)-40rem-100px)] mt-[100vh] border-l-blue-700 border-l-2"></div>
			<div className="absolute top-0 bg-gradient-radial from-white to-blue-500 w-3 h-3 ml-[calc((100vw/2)-40.32rem-100px)] mt-[calc(115vh+10px)] rounded-full sideline-glow"></div>
			<div className="absolute top-0 h-[50vh] ml-[calc((100vw/2)-40rem-100px)] mt-[calc(118vh-4px)] border-l-blue-700 border-l-2"></div>
		</>
	);
}
