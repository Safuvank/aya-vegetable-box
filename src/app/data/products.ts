export interface Product {
  id: number;
  slug: string;
  name: string;
  category: string;
  price: number;
  colorLabel: string;
  colorHex: string;
  image: string;
  description: string;
  features: string[];
  specs: {
    material: string;
    loadCapacity: string;
    dimensions: string;
    weight: string;
  };
}

export const productsData: Product[] = [
  {
    id: 1,
    slug: "green-first",
    name: "Green First",
    category: "Eco Series",
    price: 205,
    colorLabel: "Green",
    colorHex: "bg-green-600",
    image: "/images/products/green.png",
    description: "Our premium first-grade green crate. Blending seamlessly with agricultural products, this crate is highly reliable, impact-resistant, and offers excellent structural integrity for heavy harvests.",
    features: ["Maximum durability", "Eco-friendly blend", "UV stabilized"],
    specs: {
      material: "100% Virgin PP",
      loadCapacity: "40 KG",
      dimensions: "540 x 360 x 290 mm",
      weight: "1.8 KG",
    },
  },
  {
    id: 2,
    slug: "green-second",
    name: "Green Second",
    category: "Standard Series",
    price: 190,
    colorLabel: "Green",
    colorHex: "bg-green-600",
    image: "/images/products/green-second.png",
    description: "Reliable secondary grade green crates offering excellent value for bulk storage and transport. Perfect for high-volume operations where cost-efficiency is key without compromising core strength.",
    features: ["Cost-effective", "Reliable strength", "Stackable design"],
    specs: {
      material: "Recycled PP",
      loadCapacity: "35 KG",
      dimensions: "540 x 360 x 290 mm",
      weight: "1.7 KG",
    },
  },
  {
    id: 3,
    slug: "red-first",
    name: "Red First",
    category: "Heavy Duty Series",
    price: 217,
    colorLabel: "Red",
    colorHex: "bg-red-600",
    image: "/images/products/red.png",
    description: "Our flagship heavy-duty red crate. Engineered for maximum load capacity and rough handling in agricultural environments. Built with reinforced corners to prevent cracking under extreme weight.",
    features: ["Impact resistant", "Maximum load support", "Ergonomic handles"],
    specs: {
      material: "100% Virgin PP",
      loadCapacity: "45 KG",
      dimensions: "540 x 360 x 290 mm",
      weight: "1.9 KG",
    },
  },
  {
    id: 4,
    slug: "red-second",
    name: "Red Second",
    category: "Standard Series",
    price: 190,
    colorLabel: "Red",
    colorHex: "bg-red-600",
    image: "/images/products/red-second.png",
    description: "Secondary grade red crates built for standard logistics. Highly visible and durable for everyday sorting, farm-to-market distribution, and temporary warehouse storage.",
    features: ["Highly visible", "Cost-effective", "Vented design"],
    specs: {
      material: "Recycled PP",
      loadCapacity: "35 KG",
      dimensions: "540 x 360 x 290 mm",
      weight: "1.7 KG",
    },
  },
  {
    id: 5,
    slug: "blue-first",
    name: "Blue First",
    category: "Heavy Duty Series",
    price: 210,
    colorLabel: "Blue",
    colorHex: "bg-blue-600",
    image: "/images/products/blue.png",
    description: "Versatile and highly recognizable blue crates. Perfect for organizing different harvest yields, distribution centers, and retail displays. Features a vented design for optimal airflow and washing.",
    features: ["Maximum airflow", "Easy to wash", "Nesting capability"],
    specs: {
      material: "100% Virgin PP",
      loadCapacity: "40 KG",
      dimensions: "540 x 360 x 290 mm",
      weight: "1.8 KG",
    },
  },
  {
    id: 6,
    slug: "blue-second",
    name: "Blue Second",
    category: "Economy Series",
    price: 190,
    colorLabel: "Blue",
    colorHex: "bg-blue-600",
    image: "/images/products/blue-second.png",
    description: "Reliable secondary grade blue crates for organized sorting. Excellent value for high-volume, standard-load distribution networks where visual categorization is required.",
    features: ["Bulk value", "Organized sorting", "Stackable"],
    specs: {
      material: "Recycled PP",
      loadCapacity: "35 KG",
      dimensions: "540 x 360 x 290 mm",
      weight: "1.7 KG",
    },
  },
  {
    id: 7,
    slug: "yellow",
    name: "Yellow",
    category: "Premium Series",
    price: 220,
    colorLabel: "Yellow",
    colorHex: "bg-yellow-400",
    image: "/images/products/yellow.png",
    description: "Vibrant yellow crates engineered for specific batch tracking. UV resistant and easy to clean, maintaining their bright color season after season while handling heavy agricultural loads.",
    features: ["High visibility", "Stain resistant", "Premium build"],
    specs: {
      material: "100% Virgin PP",
      loadCapacity: "45 KG",
      dimensions: "540 x 360 x 290 mm",
      weight: "1.9 KG",
    },
  },
  {
    id: 8,
    slug: "orange",
    name: "Orange",
    category: "High Visibility Series",
    price: 220,
    colorLabel: "Orange",
    colorHex: "bg-orange-500",
    image: "/images/products/orange.png",
    description: "Bright and impossible to miss. Ideal for custom sorting workflows and ensuring crates are easily tracked across massive warehouse floors and busy distribution hubs.",
    features: ["Custom tracking", "Heavy duty", "UV stabilized"],
    specs: {
      material: "100% Virgin PP",
      loadCapacity: "45 KG",
      dimensions: "540 x 360 x 290 mm",
      weight: "1.9 KG",
    },
  },
];