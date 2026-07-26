"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SearchResultsContent() {
	const searchParams = useSearchParams();
	// This grabs the exact '?q=' text typed into the Header component
	const query = searchParams.get("q") || "";

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-2xl font-bold mb-4">Search Results</h1>

			{query ?
				<p className="text-gray-600 mb-6">
					Showing results for:{" "}
					<span className="font-semibold text-pink-700">
						&quot;{query}&quot;
					</span>
				</p>
			:	<p className="text-gray-600 mb-6">Please enter a search term.</p>}

			{/* 
				TODO: Map your filtered products here 
				Example: products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()))
			*/}
			<div className="bg-white p-6 rounded-lg border shadow-xs text-center text-gray-500">
				Connect your product context here to display products matching &quot;
				{query}&quot;.
			</div>
		</div>
	);
}

export default function SearchPage() {
	return (
		// Suspense is mandatory when using useSearchParams in App Router pages
		<Suspense
			fallback={
				<div className="text-center py-10">Loading search results...</div>
			}
		>
			<SearchResultsContent />
		</Suspense>
	);
}
