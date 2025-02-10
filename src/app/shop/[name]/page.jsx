import ProductCategories from "@/components/ProductCategories";
import { Suspense } from "react";

export function generateStaticParams() {
  const categories = ["accessories","beauty","electronics","men","watches","women","all"];

  return categories.map(category => ({
    name: category
  }))
}

export default async function Page({ params }) {
  const urlParams = await params;
  const name = urlParams.name;
  const page = 1;
  // Remove `searchParams` from props and force it to retrieve only first page
  // const urlArgs = await searchParams;
  // const page = urlArgs.page || 1;

  return (
    <div>
      <Suspense>
        <ProductCategories name={name} page={page} />
      </Suspense>
    </div>
  )
}
