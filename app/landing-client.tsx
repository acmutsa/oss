"use client";

import { useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Balancer from "react-wrap-balancer";

export function ReadMeWindows() {
	const ref = useRef(null);
	const isInView = useInView(ref, {
		margin: "0px 100px -300px 0px",
		once: true,
	});

	console.log(isInView);

	return (
		<div className="grid grid-cols-2 gap-4 relative aspect-[5/4] w-full" ref={ref}>
			<div
				className={`bg-primary w-[100%] h-[100%] absolute top-[15%] left-[50%] translate-x-[-50%] z-[-1] ${
					isInView ? "glow-in-animation" : "hidden"
				}`}
			></div>
			<div className="bg-card bg-opacity-90 w-full p-5 rounded-2xl border-2 border-border relative overflow-hidden shadow-2xl">
				<div className="absolute pr-[50px] flex flex-col gap-y-4">
					<h3 className="classname font-bold text-lg">100% Open Source</h3>
					<p>
						<Balancer>All of our projects are open source and free to use.</Balancer>
					</p>
				</div>
				<Image
					src={"/img/logo/ext/github_white.svg"}
					alt="Github Logo"
					width={150}
					height={150}
					className="absolute -bottom-[37.5px] -right-[37.5px] m-5 z-10 drop-shadow-2xl shadow-white"
				/>
			</div>
			<div className="bg-card bg-opacity-90 w-full p-5 rounded-2xl border-2 border-border relative overflow-hidden shadow-2xl">
				<div className="absolute pr-[50px] flex flex-col gap-y-4">
					<h3 className="classname font-bold text-lg">Built for Everyone</h3>
					<p>
						<Balancer>
							Our software is built to be used by anyone.{" "}
							<span className="italic">Including</span> those not within the ACM or
							UTSA community.
						</Balancer>
					</p>
				</div>
				<Image
					src={"/img/generic/cog.svg"}
					alt="Github Logo"
					width={230}
					height={230}
					className="absolute -bottom-[115px] -right-[115px] m-5 z-10 drop-shadow-2xl shadow-white"
				/>
			</div>
			<div className="bg-card bg-opacity-90 p-5 w-full rounded-2xl border-2 border-border relative overflow-hidden col-span-2 shadow-2xl">
				<div className="absolute flex flex-col gap-y-4 pr-[100px]">
					<h3 className="classname font-bold text-lg">Made by ACM UTSA</h3>
					<p>
						<Balancer>
							We are an arm of <span className="font-semibold">ACM UTSA</span>, a
							student-run organization that hosts events, hackathons, and workshops
							for students who are interested in technology of any form.
							<br />
							<br />
							Want to learn more?{" "}
							<Link className="underline" href={"https://acmutsa.org"}>
								Visit our site
							</Link>
							.
						</Balancer>
					</p>
				</div>
				<Image
					src={"/img/logo/acm_logo_white.svg"}
					alt="Github Logo"
					width={175}
					height={175}
					className="absolute -bottom-[44px] -right-[44px] m-5 z-10 drop-shadow-2xl shadow-white"
				/>
			</div>
		</div>
	);
}
