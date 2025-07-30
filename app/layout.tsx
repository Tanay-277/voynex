import { ThemeProvider } from "@/providers/theme-provider";
import localFont from "next/font/local";
import "./globals.css";

const GeneralSans = localFont({
	src: [
		{ path: "fonts/GeneralSans/GeneralSans-Variable.woff2", style: "normal" },
		{
			path: "fonts/GeneralSans/GeneralSans-VariableItalic.woff2",
			style: "italic",
		},
	],
	display: "swap",
	preload: true,
	variable: "--font-general-sans",
});

const JetbrainsMono = localFont({
	src: "/fonts/JetbrainsMono/JetBrainsMonoVariable.woff2",
	display: "swap",
	variable: "--font-jetbrains-mono",
});

const Melodrama = localFont({
	src: "/fonts/Melodrama-Variable.woff2",
	display: "swap",
	variable: "--font-melodrama",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<html lang="en" suppressHydrationWarning>
				<head />
				<body className={`${GeneralSans.variable} ${JetbrainsMono.variable} ${Melodrama.variable}`}>
					<ThemeProvider
						attribute="class"
						defaultTheme="dark"
						enableSystem
						disableTransitionOnChange
					>
						{children}
					</ThemeProvider>
				</body>
			</html>
		</>
	);
}
