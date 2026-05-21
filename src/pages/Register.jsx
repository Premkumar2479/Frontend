function Register() {

  return (

    <div className="flex justify-center items-center h-screen">

      <div className="w-[450px] shadow-xl p-10 rounded-3xl">

        <h1 className="text-4xl font-bold mb-8 text-center">
          Register
        </h1>

        <input
          type="text"
          placeholder="Name"
          className="w-full border p-4 rounded-lg mb-5"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-4 rounded-lg mb-5"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-4 rounded-lg mb-5"
        />

        <button className="bg-black text-white w-full py-4 rounded-lg">
          Create Account
        </button>

      </div>

    </div>

  )
}

export default Register