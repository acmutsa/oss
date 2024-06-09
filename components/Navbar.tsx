import Link from "next/link";
import { NavBarItem } from "./NavBarClientItems";
import { Github, Disc } from "lucide-react";

import * as React from "react";
import type { SVGProps } from "react";
const Discord = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox="0 0 256 199"
		width="28"
		height="28"
		xmlns="http://www.w3.org/2000/svg"
		preserveAspectRatio="xMidYMid"
		{...props}
	>
		<path
			d="M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632 108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237 136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18Z"
			fill="#fff"
		/>
	</svg>
);

export default function Navbar() {
	return (
		<div
			className="fixed top-0 w-screen bg-zinc-900 z-10"
			style={{ backdropFilter: "blur(20px)" }}
		>
			<div className="h-16 max-w-7xl grid grid-cols-3 mx-auto">
				<div className="flex items-center">
					<Link href={"/"}>
						<h1 className="font-black text-2xl">
							ACM <span className="text-blue-500">OSS</span>
						</h1>
					</Link>
				</div>
				<div className="flex items-center justify-center w-full">
					<div className="h-10 border-blue-500 border-[1px] rounded-lg w-full grid grid-flow-col justify-stretch p-1 gap-1 max-w-[400px]">
						<NavBarItem path="/">Home</NavBarItem>
						<NavBarItem path="/links">ClubKit</NavBarItem>
						<NavBarItem path="/domains">HackKit</NavBarItem>
						<NavBarItem path="/settings">About</NavBarItem>
					</div>
				</div>
				<div className="flex items-center justify-end gap-x-4">
					<Link
						href={"https://github.com/acmutsa"}
						// className="border-white rounded-full border-2 p-1"
					>
						<Github size={28} />
					</Link>
					<Link
						href={"/discord"}
						// className="border-white rounded-full border-2 p-1"
					>
						<Discord />
					</Link>
				</div>
			</div>
		</div>
	);
}
