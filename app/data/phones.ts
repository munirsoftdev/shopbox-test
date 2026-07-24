export interface Phone {
	id: string;
	title: string;
	price: number;
	oldPrice?: number;
	image: string;
	description: string;
	category: "Phones" | "Laptops" | "Furniture" | "Watches" | "Accessories";
	rating: number; // 1-5
	countInStock: number;
}
export const phones: Phone[] = [
	{
		id: "redmi-14c",
		title: "Xiaomi Redmi 14C",
		price: 100000,
		oldPrice: 130000,
		image: "/Images/Phones/Xiaomi Redmi 14C.jpg",
		description: "6.88'' 90Hz display, 50MP Camera, 5160mAh Battery",
		category: "Phones",
		rating: 4.2,
		countInStock: 15,
	},
	{
		id: "redmi-a5",
		title: "Xiaomi Redmi A5",
		price: 95000,
		oldPrice: 100000,
		image: "/Images/Phones/Xiaomi Redmi A5.jpg",
		description: "6.88'' 90Hz display, 50MP Camera, 500mAh Battery",
		category: "Phones",
		rating: 2.2,
		countInStock: 6,
	},
	{
		id: "redmi-a3",
		title: "Xiaomi Redmi A3 pro",
		price: 98000,
		oldPrice: 110000,
		image: "/Images/Phones/Xiaomi Redmi A3 pro.jpg",
		description: "6.90'' 90Hz display, 50MP Camera, 500mAh Battery",
		category: "Phones",
		rating: 5.2,
		countInStock: 10,
	},
	{
		id: "iphone-15-pro",
		title: "iPhone 15 Pro Max",
		price: 2000000,
		image: "/Images/Phones/iPhone 15 promax.jpg",
		description: "Titanium design, A17 Pro Chip, 48MP Pro Camera",
		category: "Phones",
		rating: 4.9,
		countInStock: 5,
	},
	// Add the rest of your 30+ products here same format
];
