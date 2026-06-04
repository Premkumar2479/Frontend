import axios from "axios";
import { useEffect, useState } from "react";

function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:8080/api/products")

      .then((response) => {
        setProducts(response.data);
      })

      .catch((error) => {
        console.log(error);
      });

  }, []);

  return (

    <div className="p-5">

      <h1 className="text-3xl font-bold mb-5">
        Ecommerce Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        {products.map((product) => (

          <div
            key={product.id}
            className="border p-4 rounded-lg shadow"
          >

            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-60 object-cover"
            />

            <h2 className="text-xl font-semibold mt-3">
              {product.name}
            </h2>

            <p className="text-lg text-gray-700">
              ₹ {product.price}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Home;