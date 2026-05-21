import { Heart, ShoppingCart, User, Search } from "lucide-react"

function Navbar() {
  return (
    <div>

      {/* Top Bar */}
      <div className="bg-pink-100 text-center py-2 text-sm font-medium">
        Upto 0 Making Charges on Gold Jewellery
      </div>

      {/* Main Navbar */}
      <nav className="flex items-center justify-between px-12 py-5 bg-white">

        {/* Logo */}
        <h1 className="text-5xl font-semibold tracking-wide">
          GIVA
        </h1>

        {/* Search */}
        <div className="flex items-center border rounded-lg px-4 py-3 w-[500px]">

          <input
            type="text"
            placeholder='Search "Rings"'
            className="outline-none flex-1"
          />

          <Search size={20} />

        </div>

        {/* Icons */}
        <div className="flex items-center gap-8">

          <div className="text-center cursor-pointer">
            <User />
            <p className="text-xs mt-1">ACCOUNT</p>
          </div>

          <div className="text-center cursor-pointer">
            <Heart />
            <p className="text-xs mt-1">WISHLIST</p>
          </div>

          <div className="text-center cursor-pointer">
            <ShoppingCart />
            <p className="text-xs mt-1">CART</p>
          </div>

        </div>

      </nav>

      {/* Menu */}
      <div className="flex justify-center gap-10 py-4 text-lg ">

        <p>Shop by Category</p>
        <p>Gifts for Him</p>
        <p>Gifts for Her</p>
        <p>Gift Store</p>
        <p>Exclusive Collections</p>
        <p>More at GIVA</p>

      </div>

    </div>
  )
}

export default Navbar