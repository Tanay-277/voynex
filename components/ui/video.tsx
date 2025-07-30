"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface VideoProps extends Omit<React.ComponentProps<"video">, "src"> {
	src?: string;
	className?: string;
}

function Video({ src, className, ...props }: VideoProps) {
	if (!src || typeof src !== "string") {
		return null;
	}
	const extension = src.split(".").pop() || "mp4";

	return (
		<video data-slot="video" className={cn(className)} {...props} src={src}>
			<source src={src} type={`video/${extension}`} />
		</video>
	);
}

export default Video;
