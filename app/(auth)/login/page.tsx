import { Button } from "@/components/ui/button";
import {
	ArrowLeft,
	Globe,
	Lightbulb,
	MapPin,
	Users,
} from "lucide-react";
import Link from "next/link";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import GoogleSignInBtn from "@/components/blocks/GoogleSignInBtn";

const page = async () => {
	return (
		<main className="w-full p-6 md:p-12 max-h-dvh">
			<nav className="w-full flex items-center justify-between">
				<Link href={"/"}>
					<Button size={"lg"} variant={"tertiary"}>
						<ArrowLeft /> back
					</Button>
				</Link>
				<Link href="/" className="font-bold text-2xl tracking-tight">
					voynex<span className="text-primary">.</span>
				</Link>
			</nav>
			<div className="container mx-auto flex flex-col justify-between md:flex-row mt-8 md:bg-background/50 md:p-6 rounded-2xl md:grainy md:border dark:border-input border-foreground/10">
				{/* Left Section */}
				<div className="left flex flex-col justify-between w-full md:w-1/2">
					<div className="top">
						<h2 className="dark:text-muted-foreground text-foreground text-3xl font-semibold tracking-tight">
							Explore with Voynex
						</h2>
						<p className="text-muted-foreground mt-3 max-w-md ml-1 leading-relaxed">
							Experience seamless{" "}
							<span className="text-primary font-medium">AI-powered travel</span>{" "}
							assistance. Plan smarter trips, navigate unfamiliar places, and get
							real-time insights that{" "}
							<span className="italic">enhance every moment</span> of your journey.
						</p>
						<div className="flex flex-row">
							<Card className="shadow-none mt-6 mb-8 w-full max-w-lg dark:bg-background/5 bg-background/40 border dark:border-input border-foreground/10">
								<CardHeader className="pb-2">
									<CardTitle className="text-xl">App Features</CardTitle>
									<CardDescription>Discover what makes Voynex unique</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4 text-sm">
										<div className="flex items-center gap-2">
											<div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
												<Globe className="h-4 w-4 text-primary" />
											</div>
											<span>Smart Trip Planning</span>
										</div>
										<div className="flex items-center gap-2">
											<div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
												<Users className="h-4 w-4 text-primary" />
											</div>
											<span>Community Recommendations</span>
										</div>
										<div className="flex items-center gap-2">
											<div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
												<Lightbulb className="h-4 w-4 text-primary" />
											</div>
											<span>AI-Powered Insights</span>
										</div>
										<div className="flex items-center gap-2">
											<div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
												<MapPin className="h-4 w-4 text-primary" />
											</div>
											<span>Real-Time Navigation</span>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>
						<Button
							size={"lg"}
							variant={"link"}
							className="rounded-lg cursor-default underline underline-offset-4"
						>
							Where words fail, World speaks!
						</Button>
					</div>
					<div className="bottom flex gap-4 flex-col w-[85%]">
						<GoogleSignInBtn />
						<p className="text-muted-foreground text-sm text-center">
							By signing in, you agree to our Terms of Service and Privacy
							Policy.
						</p>
					</div>
				</div>

				<div className="right hidden md:flex flex-1 justify-end">
					<div className="flex gap-4 md:gap-6">
						{/* <div className="flex flex-col gap-4 md:gap-6 h-[33%]">
							<div className="overflow-hidden rounded-xl flex items-center justify-center">
								<img
									src="/assets/landscape.jpg"
									alt="Disc artwork"
									// width={320}
									// height={320}
									className="w-full h-auto object-cover transition-transform hover:scale-105 duration-300"
								/>
							</div>
							<div className="overflow-hidden rounded-xl flex items-center justify-center">
								<img
									src="/assets/plane.jpg"
									alt="Disc artwork"
									// width={300}
									// height={400}
									className="w-full h-auto object-cover transition-transform hover:scale-105 duration-300"
								/>
							</div>
							<Button
								size={"lg"}
								variant={"link"}
								className="rounded-lg cursor-default underline underline-offset-4"
							>
								Where words fail, Music speaks!
							</Button>
						</div> */}
						<div className="overflow-hidden rounded-xl relative flex items-center justify-center h-[74vh] w-[42vw]">
							<img
								src="/assets/road.jpg"
								alt="Surround artwork"
								// width={300}
								// height={450}
								className=" w-full h-full object-cover transition-transform hover:scale-105 duration-300"
							/>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default page;
