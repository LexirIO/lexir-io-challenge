export default function Custom404() {
  return (
    <section className="bg-light dark:bg-dark">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-sky-600 dark:text-sky-500">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-dark md:text-4xl dark:text-light">
            Somethings missing.
          </p>
          <p className="mb-4 text-lg font-light text-slate-500 dark:text-slate-400">
            Sorry, we cant find that page. Youll find lots to explore on the
            home page.{" "}
          </p>
          <a
            href="#"
            className="inline-flex text-light bg-sky-600 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-sky-900 my-4"
          >
            Back to Homepage
          </a>
        </div>
      </div>
    </section>
  );
}
