"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface SideBarItemProps {
	children: React.ReactNode;
	path: string;
}

export function NavBarItem({ children, path }: SideBarItemProps) {
	const currPath = usePathname();

	console.log("currpath: ", currPath);

	return (
		<Link
			className={
				(path !== "/" && currPath.startsWith(path)) || (path == "/" && currPath == "/")
					? "text-white bg-blue-500 flex items-center justify-center font-bold rounded-lg"
					: "text-white flex items-center justify-center font-medium rounded-lg"
			}
			href={path}
		>
			{children}
		</Link>
	);
}
