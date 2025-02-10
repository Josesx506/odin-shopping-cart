import ProductDetails from "@/components/ProductDetails";


export async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/products?limit=194&sortBy=id&order=asc");
  const data = await res.json();

  const shopCategories = ["beauty","fragrances","mens-shirts","mens-shoes","mens-watches","skin-care",
      "smartphones","tablets","laptops","mobile-accessories","sports-accessories","sunglasses","tops",
      "womens-bags","womens-dresses","womens-jewellery","womens-shoes","womens-watches"];

  const products = data.products.filter(product => (shopCategories.includes(product.category)));

  return products.map(product => ({
    id: product.id.toString()
  }))
}



export default async function Pages({ params, searchParams }) {
  const urlParams = await params;
  const id = parseInt(urlParams.id);

  return (
    <div>
      <ProductDetails id={id} />
    </div>
  )
}
