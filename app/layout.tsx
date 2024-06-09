import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter, Poppins } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({
	subsets: ["latin"],
});

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "700", "900"],
	variable: "--font-poppins",
});

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className={`${inter.className} ${poppins.variable}`}>
			<body>
				<RootProvider>{children}</RootProvider>
			</body>
		</html>
	);
}
