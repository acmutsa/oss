import Image from "next/image";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center">
			<div className="before:bg-gradient-radial after:bg-gradient-conic relative flex flex-col items-center justify-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
				<Image
					width={200}
					height={200}
					alt="ACM Logo"
					src={"/img/logo/acm_white.svg"}
				/>
				<h1 className="font-goodtimes text-9xl font-bold text-white">OSS</h1>
			</div>
		</main>
	);
}
