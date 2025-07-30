"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import GoogleSignInBtn from "@/components/blocks/GoogleSignInBtn";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Video from "@/components/ui/video";

const loginSchema = z.object({
	email: z.email({ error: "Enter a valid email address" }),
	password: z
		.string()
		.min(6, { error: "Password must be at least 6 characters long" }),
});

const page = () => {
	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	function onSubmit(values: z.infer<typeof loginSchema>) {
		console.log(values);
		// Handle login logic here
	}

	return (
		<main className="min-h-screen w-full">
			<nav className="w-full flex items-center justify-between p-6 md:px-12 md:py-8">
				<Link href={"/"}>
					<Button
						size={"lg"}
						variant={"tertiary"}
						className="gap-2 hover:bg-background/80"
					>
						<ArrowLeft className="w-4 h-4" />
						<span className="hidden sm:inline">back</span>
					</Button>
				</Link>
				<Link
					href="/"
					className="font-medium text-2xl md:text-3xl tracking-tight font-serif"
				>
					voynex<span className="text-primary">.</span>
				</Link>
			</nav>

			<div className="container mx-auto px-6 md:px-12 pb-12">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-120px)]">
					<div className="flex flex-col justify-center space-y-6 max-w-lg mx-auto lg:mx-0">
						<div className="space-y-4">
							{/* <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
								Welcome Back
							</h1> */}
							<h2 className="text-xl md:text-3xl text-muted-foreground font-semibold">
								Explore with Voynex
							</h2>
							<p className="text-muted-foreground leading-relaxed">
								Experience seamless{" "}
								<span className="text-primary font-medium">
									AI-powered travel
								</span>{" "}
								assistance. Plan smarter trips, navigate unfamiliar places, and
								get real-time insights that{" "}
								<span className="italic font-medium">enhance every moment</span>{" "}
								of your journey.
							</p>
						</div>

						<div className="space-y-6">
							<Form {...form}>
								<form
									onSubmit={form.handleSubmit(onSubmit)}
									className="space-y-6"
								>
									<FormField
										control={form.control}
										name="email"
										render={({ field }) => (
											<FormItem>
												<FormLabel className="text-base font-medium ml-0.5">
													Email Address
												</FormLabel>
												<FormControl>
													<Input
														placeholder="Enter your email"
														type="email"
														className="h-12 text-base !rounded-full"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="password"
										render={({ field }) => (
											<FormItem>
												<FormLabel className="text-base font-medium ml-0.5">
													Password
												</FormLabel>
												<FormControl>
													<Input
														placeholder="Enter your password"
														type="password"
														className="h-12 text-base !rounded-full"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>

									<Button
										type="submit"
										size="lg"
										className="w-full h-12 text-base font-medium"
									>
										Sign In
									</Button>
								</form>
							</Form>
							<p className="text-xs text-muted-foreground text-center leading-relaxed">
								By signing in, you agree to our{" "}
								<Link href="/terms" className="text-primary hover:underline">
									Terms of Service
								</Link>{" "}
								and{" "}
								<Link href="/privacy" className="text-primary hover:underline">
									Privacy Policy
								</Link>
								.
							</p>

							{/* Divider */}
							<div className="relative">
								<div className="absolute inset-0 flex items-center">
									<span className="w-full border-t border-border" />
								</div>
								<div className="relative flex justify-center text-xs uppercase">
									<span className="bg-transparent px-4 text-muted-foreground font-medium">
										Or
									</span>
								</div>
							</div>
							<GoogleSignInBtn />
						</div>

						{/* Footer */}
						<div className="space-y-4">
							<div className="text-center">
								<Link
									href="/forgot-password"
									className="text-sm text-primary hover:underline"
								>
									Forgot your password?
								</Link>
							</div>

							<div className="text-center">
								<p className="text-sm text-muted-foreground">
									Don't have an account?{" "}
									<Link
										href="/signup"
										className="text-primary font-medium hover:underline"
									>
										Sign up
									</Link>
								</p>
							</div>
						</div>
					</div>
					<div className="flex w-full items-center justify-center">
						<div className="rounded-full">
							<Video
								src={"/assets/videos/plane-sd.mp4"}
								className="rounded-full scale-50"
								autoPlay
								loop
								muted
							/>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default page;
