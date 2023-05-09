import Image from "next/image";
import Link from "next/link";

import { BsGithub, BsGlobe2, BsDiscord } from "react-icons/bs";

export default function Nav() {
	return (
		<nav className="fixed top-0 z-50 h-[75px] w-full border-b-[1px] border-b-gray-800 bg-black bg-opacity-90">
			<div className="mx-auto grid h-full w-full max-w-[1024px] grid-cols-3">
				<div className="flex h-full items-center gap-2">
					<Image
						src={"/img/logo/acm_white.svg"}
						height={40}
						width={40}
						alt="ACM Logo"
					/>
					<h1 className="font-goodtimes text-2xl font-bold text-white">OSS</h1>
				</div>
				<div className="m-2 flex items-center justify-center gap-4 font-sans font-medium">
					<Link className="hover:underline" href="#">
						About
					</Link>
					<Link className="hover:underline" href="#">
						Portal
					</Link>
					<Link className="hover:underline" href="#">
						Hack Kit
					</Link>
				</div>
				<div className="flex items-center justify-end gap-4">
					<Link href="https://go.acmutsa.org/discord">
						<BsDiscord className="text-3xl" />
					</Link>
					<Link href="https://acmutsa.org/">
						<BsGlobe2 className="text-3xl" />
					</Link>
					<Link href="https://github.com/acmutsa">
						<BsGithub className="text-3xl" />
					</Link>
				</div>
			</div>
		</nav>
	);
}
