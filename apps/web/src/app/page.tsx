import Image from "next/image";
import Balancer from "react-wrap-balancer";

export default function Home() {
	return (
		<div>
			<main className="bggrid mx-auto flex min-h-screen w-full max-w-[1024px] flex-col items-center justify-center">
				<div className="after:bg-gradient-conic after:from-acm before:to-acm after:animate-spin-slow relative flex scale-[250%] flex-col items-center justify-center before:absolute before:h-[900px] before:w-[480px] before:rounded-full before:bg-gradient-to-br before:from-transparent before:opacity-10 before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:via-[#0141ff] after:opacity-60 after:blur-2xl after:content-[''] before:lg:h-[360px]">
					<Image
						width={100}
						height={100}
						alt="ACM Logo"
						src={"/img/logo/acm_white.svg"}
						className="drop-shadow-[0_0_0.3rem_#ffffff70]"
					/>
					<h1 className="font-goodtimes text-5xl font-bold text-white drop-shadow-[0_0_0.3rem_#ffffff70]">
						OSS
					</h1>
					<div className="z-50 mt-5 flex gap-2">
						<button className="w-[65px] cursor-pointer rounded bg-white py-[0.3rem] text-center text-[6px] font-bold text-black drop-shadow-[0_0_0.3rem_#179BD5]">
							Docs
						</button>
						<button className="w-[65px] cursor-pointer rounded bg-white py-[0.3rem] text-center text-[6px] font-bold text-black drop-shadow-[0_0_0.3rem_#179BD5]">
							Get Involved
						</button>
					</div>
				</div>
			</main>
			<section className="border-t-[1px] border-t-gray-800">
				<div className="relative mx-auto flex min-h-screen w-full max-w-[1024px] flex-col items-center">
					<div className="absolute h-[20%] max-h-[500px] w-screen bg-gradient-to-b from-[#0141ff] to-transparent opacity-20"></div>
					<div className="w-full max-w-[700px] text-center">
						<h1 className="font-inter mb-10 mt-[min(20%,200px)] text-6xl font-extrabold">
							About Us
						</h1>
						<p className="font-sans text-lg font-medium">
							<Balancer>
								Howdy! We are the ACM UTSA open source software team; A
								passionate group of students working on the tooling behind ACM
								UTSA's largest events.
							</Balancer>
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
