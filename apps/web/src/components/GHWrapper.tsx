"use client";
import { GithubContributions } from "react-github-graph";

export default function wrapper() {
	return (
		<div>
			<GithubContributions username="Lermatroid" />
		</div>
	);
}
