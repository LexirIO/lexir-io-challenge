const Publicize = () => {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1 lg:space-x-4 mx-2">
      <div className="flex flex-col content-between space-y-6 mb-3">
        <h2 className="text-5xl my-6 font-bold">
          Have a brand you’d like to see on Lexir?
        </h2>
        <p>
          Lexir is always looking to connect with new exciting craft brands from
          around the world. If you have a brand in mind that you&apos;d like to
          see on Lexir, let us know.
        </p>
        <button className="px-5 py-2 bg-gray-900 outline-none rounded text-white shadow-gray-200 shadow-lg font-medium active:shadow-none active:scale-95 hover:bg-indigo-600 focus:bg-indigo-600 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed transition-colors duration-200 w-fit">
          Suggest a Brand
        </button>
      </div>
      <div className="md:mb-0 sm:mb-3">
        <img src="/image/wine-picker.png" alt="wine-picker" width="100%" />
      </div>
    </div>
  );
};

export default Publicize;
