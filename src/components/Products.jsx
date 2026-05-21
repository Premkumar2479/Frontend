const products = [

  {
    id: 1,
    name: "Silver Ring",
    price: "₹ 2,499",
    image:
   "https://www.giva.co/cdn/shop/files/BR0694_1.jpg?v=1737613391&width=1100"  },

  {
    id: 2,
    name: "Luxury Necklace",
    price: "₹ 4,999",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop",
  },

  {
    id: 3,
    name: "Gold Earrings",
    price: "₹ 3,299",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=800&auto=format&fit=crop",
  },

  {
    id: 4,
    name: "Diamond Bracelet",
    price: "₹ 5,999",
    image:
      "https://images.unsplash.com/photo-1603974372039-adc49044b6bd?q=80&w=800&auto=format&fit=crop",
  },

]

function Products() {

  return (

    <section className="px-10 py-16">

      <h1 className="text-5xl font-semibold mb-12 text-center">
        Trending Jewellery
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {products.map((product) => (

          <div
            key={product.id}
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:scale-105 duration-300"
          >

            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[390px] object-cover"
            />

            <div className="p-6">

              <h2 className="text-2xl font-semibold">
                {product.name}
              </h2>

              <p className="text-xl text-gray-600 mt-2">
                {product.price}
              </p>

              <button className="mt-5 bg-black text-white px-6 py-3 rounded-lg w-full">
                Add To Cart
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>

  )
}

export default Products