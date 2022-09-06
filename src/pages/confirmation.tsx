import Header from "../components/header";
import Footer from "../components/footer";

export default function Confirmation() {
  return (
    <>
        <header>
            <Header />
        </header>

        <main className='max-w-5xl pt-10 mx-auto'>
            <div className="flex gap-x-6 pl-10 py-5 bg-confirmation rounded-md mb-10">
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M13.7071 7.79289C14.0976 8.18342 14.0976 8.81658 13.7071 9.20711L9.70711 13.2071C9.31658 13.5976 8.68342 13.5976 8.29289 13.2071L6.29289 11.2071C5.90237 10.8166 5.90237 10.1834 6.29289 9.79289C6.68342 9.40237 7.31658 9.40237 7.70711 9.79289L9 11.0858L12.2929 7.79289C12.6834 7.40237 13.3166 7.40237 13.7071 7.79289Z" fill="#1C8C64"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M10 2.5C5.58172 2.5 2 6.08172 2 10.5C2 14.9183 5.58172 18.5 10 18.5C14.4183 18.5 18 14.9183 18 10.5C18 6.08172 14.4183 2.5 10 2.5ZM0 10.5C0 4.97715 4.47715 0.5 10 0.5C15.5228 0.5 20 4.97715 20 10.5C20 16.0228 15.5228 20.5 10 20.5C4.47715 20.5 0 16.0228 0 10.5Z" fill="#1C8C64"/>
                </svg>
                <span>
                    Thank you! Your order was placed successfully.
                </span>
            </div>

            <section className="flex flex-col gap-y-10 mb-10">
                <div id="confirmation-header" className="grid grid-cols-1 md:grid-cols-5 text-center bg-background">
                    <div className="flex flex-col gap-y-2 border-2 border-border-light py-2">
                        <span className="text-secondary uppercase">
                            Order number
                        </span>
                        <span>
                            XRQ4567
                        </span>
                    </div>
                    <div className="flex flex-col gap-y-2 border-y-2 border-y-border-light py-2">
                        <span className="text-secondary uppercase">
                            Date
                        </span>
                        <span>
                            April 22, 2021
                        </span>
                    </div>
                    <div className="flex flex-col gap-y-2 border-2 border-border-light py-2">
                        <span className="text-secondary uppercase">
                            Email
                        </span>
                        <span>
                            customer@demo.com
                        </span>
                    </div>
                    <div className="flex flex-col gap-y-2 border-y-2 border-y-border-light py-2">
                        <span className="text-secondary uppercase">
                            Total
                        </span>
                        <span>
                            €149.00
                        </span>
                    </div>
                    <div className="flex flex-col gap-y-2 border-2 border-border-light py-2">
                        <span className="text-secondary uppercase">
                            Payment Method
                        </span>
                        <span>
                            Cash on delivery
                        </span>
                    </div>
                </div>

                <div>
                    <div className="grid grid-cols-6 bg-background border-2 border-border-light items-center">
                        <div className="col-span-5 border-r-2 border-r-border-light pl-8 text-xl font-bold py-2">
                            Subtotal
                        </div>
                        <div className="mx-auto md:mx-0 md:pl-8 py-2">$832.00</div>
                    </div>

                    <div className="mt-3 mb-7 flex flex-col gap-y-3">
                        <div className="grid grid-cols-6 items-center">
                            <div className="col-span-5 pl-8 font-bold">
                                Shipping:
                            </div>
                            <div className="mx-auto md:mx-0 md:pl-8">$17.00</div>
                        </div>
                        <div className="grid grid-cols-6 items-center">
                            <div className="col-span-5 pl-8 font-bold">
                                VAT
                            </div>
                            <div className="mx-auto md:mx-0 md:pl-8">20%</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-6 bg-background border-2 border-border-light items-center">
                        <div className="col-span-5 border-r-2 border-r-border-light pl-8 text-xl font-bold py-2">
                            Total
                        </div>
                        <div className="mx-auto md:mx-0 md:pl-8 py-2">
                            $832.00
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="pl-8 mb-5 text-xl font-bold">Order Summary</h3>
                    <div className="flex flex-col gap-y-4">
                        <div className="grid grid-cols-6 bg-background border-2 border-border-light items-center">
                            <div className="col-span-3 border-r-2 border-r-border-light pl-8 font-semibold py-2">
                                Product
                            </div>
                            <div className="border-r-2 border-r-border-light text-center md:text-left md:pl-8 font-bold py-2">
                                Price
                            </div>
                            <div className="border-r-2 border-r-border-light text-center md:text-left md:pl-8 font-bold py-2">
                                Quantity
                            </div>
                            <div className="text-center md:text-left md:pl-8 font-bold py-2">
                                Total
                            </div>
                        </div>

                        <div className="grid grid-cols-6 items-center">
                            <div className="col-span-3 pl-8">
                                Amaro Alpino
                            </div>
                            <div className="mx-auto md:mx-0 md:pl-8">
                                5
                            </div>
                            <div className="mx-auto md:mx-0 md:pl-8">
                                €22.55
                            </div>
                            <div className="mx-auto md:mx-0 md:pl-8">
                                €125.66
                            </div>
                        </div>
                        <div className="grid grid-cols-6 items-center">
                            <div className="col-span-3 pl-8">
                                Erika Spirits
                            </div>
                            <div className="mx-auto md:mx-0 md:pl-8">
                                2
                            </div>
                            <div className="mx-auto md:mx-0 md:pl-8">
                                €22.55
                            </div>
                            <div className="mx-auto md:mx-0 md:pl-8">
                                €45.66
                            </div>
                        </div>
                        <div className="grid grid-cols-6 items-center">
                            <div className="col-span-3 pl-8">
                                Stockholms Bränneri
                            </div>
                            <div className="mx-auto md:mx-0 md:pl-8">
                                22
                            </div>
                            <div className="mx-auto md:mx-0 md:pl-8">
                                €22.55
                            </div>
                            <div className="mx-auto md:mx-0 md:pl-8">
                                €1235.36
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </main>

        <Footer />
    </>
  )
}