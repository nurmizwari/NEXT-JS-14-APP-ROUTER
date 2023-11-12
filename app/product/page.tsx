async function getData() {
  // const res = await fetch("https://fakestoreapi.com/products", {
  const res = await fetch("http://localhost:3000/api/product", {
    cache: "no-store",
    // next: { revalidate: 30 },
  });
  if (!res.ok) {
    throw new Error("Gagal");
  }
  return res.json();
}

export default async function ProductPage() {
  const products = await getData();
  console.log(products.data, "Datad");
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-3 mt-2 mb-2">
        {products.data.length > 0 &&
          products.data.map((product: any, idx: number) => {
            return (
              <a
                key={idx}
                href="#"
                className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <img
                  className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                  // src={product.image}
                  src={""}
                  alt=""
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {product.nama}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </div>
              </a>
            );
          })}
      </div>
    </>
  );
}
