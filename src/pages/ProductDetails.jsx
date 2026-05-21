function ProductDetails() {

  return (

    <div className="p-20">

      <h1 className="text-5xl font-bold mb-10">
        Product Details
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        <img
          src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=800&auto=format&fit=crop"
          alt="product"
          className="rounded-3xl"
        />

        <div>

          <h2 className="text-4xl font-semibold">
            Silver Ring
          </h2>

          <p className="text-3xl mt-5">
            ₹ 2,499
          </p>

          <p className="mt-6 text-gray-600 text-lg">
            Premium luxury jewellery crafted with elegance.
          </p>

          <button className="mt-10 bg-black text-white px-10 py-4 rounded-xl">
            Add To Cart
          </button>

        </div>

      </div>

    </div>

  )
}

export default ProductDetails