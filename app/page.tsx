import Image from "next/image";
import nextConfig from "../next.config";
const BASE_PATH = nextConfig.basePath || "";

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<video
				className="background-video blur object-cover"
				src={`${BASE_PATH}/video/background.mp4`}
				loop
				autoPlay
				muted
				controls={false}
			></video>
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-10">
				<Image
					className="rounded-2xl shadow-lg shadow-white self-center"
					src={`${BASE_PATH}/img/Ellen_Logo.jpg`}
					alt="logo"
					width={180}
					height={38}
					priority
				/>
				<div className="list-inside list-decimal self-center text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
					ひっそりと活動している無名MuteTuber「Ellen」の公式サイトです。
				</div>

				<div className="flex gap-4 items-center self-center flex-col sm:flex-row">
					<a
						className="relative border-b px-1.5 border-anim-to-black"
						// TODO: Insert page url.
						href=""
					>
						<div className="color-to-black">About Me</div>
					</a>
				</div>
			</main>

			<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
		</div>
	);
}
