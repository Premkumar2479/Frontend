function Footer() {

  return (

    <footer className="bg-black text-white px-10 py-16 mt-20">

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        <div>

          <h1 className="text-4xl font-bold mb-4">
            GIVA
          </h1>

          <p className="text-gray-400">
            Premium Jewellery Collection for modern fashion lovers.
          </p>

        </div>

        <div>

          <h2 className="text-2xl mb-4">
            Quick Links
          </h2>

          <ul className="space-y-2 text-gray-400">
            <li>Home</li>
            <li>Shop</li>
            <li>Categories</li>
            <li>Contact</li>
          </ul>

        </div>

        <div>

          <h2 className="text-2xl mb-4">
            Collections
          </h2>

          <ul className="space-y-2 text-gray-400">
            <li>Silver</li>
            <li>Gold</li>
            <li>Diamond</li>
            <li>Luxury</li>
          </ul>

        </div>

        <div>

          <h2 className="text-2xl mb-4">
            Contact
          </h2>

          <p className="text-gray-400">
            support@giva.com
          </p>

        </div>

      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500">
        © 2026 GIVA Clone. All rights reserved.
      </div>

    </footer>

  )
}

export default Footer