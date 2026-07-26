"use client";

export default function Loading() {
	return (
		<div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center z-50">
			<div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin" />
			<p className="mt-4 text-pink-600 font-medium text-sm">Loading...</p>
		</div>
	);
}
