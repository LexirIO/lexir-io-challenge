const Breadcrumbs = () => {
    return (
        <nav className="flex mt-10 px-9 text-base font-normal" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                    <a href="#" className="inline-flex gap-x-3.5 items-center text-primary hover:text-success hover:fill-success">
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.386 3.21065C11.7472 2.92978 12.2528 2.92978 12.6139 3.21065L21.6139 10.2106C22.0499 10.5497 22.1284 11.178 21.7893 11.6139C21.4503 12.0499 20.822 12.1284 20.386 11.7894L12 5.26686L3.61393 11.7894C3.17798 12.1284 2.5497 12.0499 2.21063 11.6139C1.87156 11.178 1.9501 10.5497 2.38604 10.2106L11.386 3.21065Z"/>
                        <path d="M5 8.5C5.55228 8.5 6 8.94772 6 9.5V20H10V17C10 16.4477 10.4477 16 11 16H13C13.5523 16 14 16.4477 14 17V20H18V10C18 9.44772 18.4477 9 19 9C19.5523 9 20 9.44772 20 10V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V9.5C4 8.94772 4.44772 8.5 5 8.5Z"/>
                        </svg>
                        Home
                    </a>
                </li>
                <li>
                    <div className="flex items-center">
                        <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <a href="#" className="ml-1 text-primary md:ml-2 hover:text-green-600">Spirits</a>
                    </div>
                </li>
                <li>
                <div className="flex items-center">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <a href="#" className="ml-1 text-primary md:ml-2 hover:text-green-600">Kiss My</a>
                </div>
                </li>
                <li aria-current="page">
                <div className="flex items-center">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="ml-1 font-black md:ml-2">Kiss My Rhubarb</span>
                </div>
                </li>
            </ol>
        </nav>
    )
}

export default Breadcrumbs