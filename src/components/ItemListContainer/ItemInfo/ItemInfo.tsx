function ItemInfo() {
  return (
    <div className="max-w-lg mb-8 border-solid border border-slate-200 h-fit ">
      <div className="p-6">
        <div className="main-title mb-12 uppercase">
          <h1 className="text-center text-[#7E143C] text-3xl md:text-5xl font-bold mb-2">
            Baldoria
          </h1>
          <h3 className="text-[#7E143C] text-center">Vermouth</h3>
        </div>
        <div className="item-description flex flex-col">
          <h4 className="text-[black] text-center font-bold text-2xl md:text-4xl mb-4">
            Baldoria Vermouth
          </h4>
          <p className="text-left	text-sm mb-6 mx-6">
            Baldoria rosso is a red vermouth that balances fresh, herby bitter note
            against. Kiss My Rhubarb takes its origins from and old handwritten recipe
            from co-creators Niels` and Wouters` rebellious grandparents.
          </p>
          <button>
            <a href="#" className="text-[green] text-center font-semibold">
              Read More
            </a>
          </button>
        </div>
        <div className="location mt-12 flex flex-row">
          <i className="fa-solid fa-location-dot mr-3 mt-2"></i>
          <div className="flex flex-col text-left">
            <label htmlFor="location">Location</label>
            <input type="text" id="location" placeholder="London, United Kingdom" />
          </div>
        </div>
        <div className="categories mt-12 mb-4 flex flex-row">
          <i className="fa-solid fa-box mr-3  mt-2"></i>
          <div className="flex flex-col text-left  justify-start">
            <label htmlFor="catogories">Product Categories</label>
            <div className="flex mt-3">
              <option
                value="Gin"
                className="bg-[#F9F9F9] text-neutral-600 w-20 mr-2 text-center"
              >
                Gin
              </option>
              <option
                value="Vodka"
                className="bg-[#F9F9F9] text-neutral-600 w-20 text-center"
              >
                Vodka
              </option>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ItemInfo;
