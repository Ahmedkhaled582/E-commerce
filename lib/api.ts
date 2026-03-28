export const BASE_URL = "https://dummyjson.com";

export async function getProducts() {
  const res = await fetch(`${BASE_URL}/products`, { cache: "no-store" });
  if (!res.ok) throw new Error("Error fetching");
  return res.json();
}

export async function getProduct(id: string) {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  if (!res.ok) throw new Error("Not found");
  return res.json();
}

export async function getCategories() {
  const res = await fetch(`${BASE_URL}/products/categories`);
  return res.json();
}

export async function getProductsByCategory(category: string) {
  const res = await fetch(`${BASE_URL}/products/category/${category}`
  );
  return res.json();
}