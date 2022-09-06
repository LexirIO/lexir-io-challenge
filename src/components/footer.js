import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="bg-zinc-800 lg:h-80">
            <div className="px-9 py-10">
                <div>
                    <div className="w-full">
                        <div className="flex flex-col lg:flex-row lg:justify-between">
                            <div className="mb-4 lg:mb-0 mx-auto lg:mx-0">
                                <Link href="/">
                                    <a aria-label='Go to home page.' className='fill-white'>
                                        <svg width="103" height="24" viewBox="0 0 103 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.4189 15.7973L18.438 23.8862L0.0566154 23.9321L0.0550841 23.4045C1.06039 22.7221 1.56177 21.3375 1.55692 19.2508L1.523 4.90123C1.5179 2.79031 1.00964 1.40827 0.00127442 0.753792L0 0.226714L9.0355 0.204524L9.03677 0.73134C8.03198 1.46074 7.53009 2.84618 7.53494 4.88609L7.56911 19.2707C7.57217 20.5133 7.82006 21.3986 8.31506 21.9243C8.80802 22.4504 9.62792 22.7127 10.7732 22.7099H10.8758C12.6627 22.7054 14.15 22.0682 15.3377 20.7994C16.5268 19.5302 17.3814 17.863 17.9027 15.7986L18.4189 15.7973Z"/>
                                        <path d="M39.1748 17.5034L39.1898 23.8346L21.5299 23.8785L21.5287 23.3504C22.5334 22.6687 23.0353 21.2833 23.0302 19.1964L22.9963 4.84732C22.9912 2.75937 22.483 1.37759 21.4748 0.700142L21.4736 0.172803L38.3092 0.131295L38.3243 6.46144L37.8081 6.46275C37.1624 4.94026 36.2491 3.70597 35.0676 2.75911C33.8861 1.81277 32.5054 1.3413 30.9237 1.34496L29.0001 1.34992L29.0236 11.3385L30.5348 11.1937C31.5429 11.0978 32.3549 10.7381 32.9726 10.1152C33.59 9.49233 34.1483 8.66452 34.6509 7.63203L35.1653 7.63073L35.1849 15.8961L34.6703 15.8974C34.1404 14.8895 33.5714 14.0765 32.9624 13.457C32.3552 12.8365 31.5463 12.4809 30.5379 12.3901L29.0258 12.253L29.0424 19.2165C29.0452 20.4362 29.2704 21.3149 29.7182 21.8529C30.1673 22.3915 30.8602 22.6596 31.8 22.657H31.8686C33.4258 22.6533 34.7879 22.1748 35.9536 21.2222C37.119 20.2699 38.0218 19.0304 38.6584 17.5047L39.1748 17.5034Z"/>
                                        <path d="M75.917 19.0642C75.9218 21.0808 76.4301 22.4629 77.4385 23.2105L77.4398 23.7379L68.4045 23.7603L68.4032 23.233C69.4083 22.5506 69.9097 21.1659 69.9051 19.079L69.8709 4.72943C69.8655 2.64201 69.3575 1.25996 68.3494 0.582256L68.3481 0.0554403L77.3834 0.0329891L77.3847 0.559805C76.3796 1.2892 75.8782 2.67438 75.8828 4.71429L75.917 19.0642Z"/>
                                        <path d="M95.7693 22.8662C94.6796 22.107 93.5248 20.884 92.3073 19.1989C92.0314 18.8248 91.7435 18.3914 91.4443 17.8998C91.1467 17.408 90.8932 16.9866 90.6854 16.6353C90.4796 16.2836 90.1799 15.7403 89.789 15.0026C89.398 14.2651 89.0986 13.7205 88.8926 13.3689L88.8913 12.876C91.9353 12.002 93.4532 9.82894 93.4447 6.35895C93.4368 2.91141 91.9893 1.19208 89.103 1.19912L88.3471 1.20095L88.3897 19.0326C88.3945 21.073 88.9025 22.4548 89.9109 23.179L89.9121 23.7071L80.8769 23.7295L80.8759 23.2014C81.8809 22.5433 82.3826 21.1578 82.3775 19.048L82.3433 4.69783C82.3384 2.61041 81.8302 1.22862 80.8221 0.551177L80.8208 0.0240996L90.3725 8.22145e-05C96.7397 -0.0153202 99.9292 2.13345 99.9394 6.44744C99.9433 8.1827 99.4189 9.52037 98.3672 10.4615C97.317 11.4016 96.058 12.0268 94.5929 12.3343L96.0404 14.4416C98.684 18.257 101.005 20.9469 103 22.5135L102.865 23.0422C101.836 23.6771 100.714 23.9968 99.4988 24C98.1025 24.0031 96.8587 23.6251 95.7693 22.8662Z"/>
                                        <path d="M49.8869 16.0276L49.27 15.0629L47.2838 17.8701C45.2074 20.7833 43.1953 22.5927 41.2505 23.3012L41.2518 23.8293L49.0506 23.81L49.0494 23.2821C47.7184 21.8554 47.7595 19.897 49.1738 17.4086L49.8869 16.0276Z"/>
                                        <path d="M61.1657 17.9416L56.0275 9.96995L58.5607 6.02457C60.3864 3.20618 62.3873 1.39626 64.5611 0.592986L64.5603 0.0656474L56.7597 0.0854879L56.7609 0.612043C57.3814 1.26782 57.6979 2.16378 57.7119 3.30121C57.7277 4.43786 57.4941 5.44084 57.0155 6.30965L55.5108 9.19774L53.4066 5.93216C51.9581 3.63745 51.84 1.86773 53.0504 0.62118L53.0491 0.0948859L41.5396 0.123342L41.5409 0.650419C42.0675 0.883805 42.6306 1.31586 43.2266 1.9471C43.8243 2.57938 44.3127 3.16467 44.6917 3.70298C45.0712 4.24154 45.5713 4.99052 46.1925 5.94991L53.847 17.8187C54.5828 18.9425 55.0038 19.9912 55.1087 20.9639C55.2153 21.9366 54.9467 22.7049 54.3079 23.2691L54.3091 23.7972L66.1624 23.7672L66.1611 23.2398C64.6476 22.5397 62.982 20.7744 61.1657 17.9416Z"/>
                                        </svg>
                                    </a>
                                </Link>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-row mt-4 lg:mt-0 mx-auto lg:mx-0 gap-y-8 gap-x-20 text-center lg:text-left">
                                <ul>
                                    <li className="text-neutral-500 uppercase">
                                        Community
                                    </li>
                                    <li className="text-white hover:text-footer-secondary leading-10">
                                        <Link href="#">
                                            Lexir for Brands
                                        </Link>
                                    </li>
                                    <li className="text-white hover:text-footer-secondary leading-10">
                                        <Link href="#">
                                            Business Buyers
                                        </Link>
                                    </li>
                                    <li className="text-white hover:text-footer-secondary leading-10">
                                        <Link href="#">
                                            Sales Affiliates
                                        </Link>
                                    </li>
                                </ul>
                                <ul>
                                    <li className="text-neutral-500 uppercase">
                                        Platform
                                    </li>
                                    <li className="text-white hover:text-footer-secondary leading-10">
                                        <Link href="#">
                                            Resources
                                        </Link>
                                    </li>
                                    <li className="text-white hover:text-footer-secondary leading-10">
                                        <Link href="#">
                                            Pricing
                                        </Link>
                                    </li>
                                    <li className="text-white hover:text-footer-secondary leading-10">
                                        <Link href="#">
                                            Get Started
                                        </Link>
                                    </li>
                                </ul>
                                <ul>
                                    <li className="text-neutral-500 uppercase">
                                        Company
                                    </li>
                                    <li className="text-white hover:text-footer-secondary leading-10">
                                        <Link href="#">
                                            About
                                        </Link>
                                    </li>
                                    <li className="text-white hover:text-footer-secondary leading-10">
                                        <Link href="#">
                                            Contact
                                        </Link>
                                    </li>
                                    <li className="text-white hover:text-footer-secondary leading-10">
                                        <Link href="#">
                                            Legal
                                        </Link>
                                    </li>
                                </ul>
                                <ul>
                                    <li className="text-neutral-500 uppercase">
                                        Lexir Shop
                                    </li>
                                    <li className="text-white hover:text-footer-secondary leading-10">
                                        <Link href="/brands">
                                            Brands
                                        </Link>
                                    </li>
                                    <li className="text-white hover:text-footer-secondary leading-10">
                                        <Link href="#">
                                            Spirits
                                        </Link>
                                    </li>
                                    <li className="text-white hover:text-footer-secondary leading-10">
                                        <Link href="#">
                                            Wine
                                        </Link>
                                    </li>
                                    <li className="text-white hover:text-footer-secondary">
                                        <Link href="#">
                                            Blog
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="h-fit flex w-32 gap-x-3 mx-auto lg:mx-0 mt-8 lg:mt-0">
                                <Link href="https://medium.com/lexir">
                                    <a className='fill-white hover:fill-footer-secondary' id="medium-link">
                                        <svg width="25" height="24" viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_1648_2084)">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M7.5 3C5.29086 3 3.5 4.79086 3.5 7V17C3.5 19.2091 5.29086 21 7.5 21H17.5C19.7091 21 21.5 19.2091 21.5 17V7C21.5 4.79086 19.7091 3 17.5 3H7.5ZM9.44788 16C11.6277 16 13.3958 14.2092 13.3958 12C13.3958 9.79082 11.6277 8 9.44788 8C7.26803 8 5.5 9.79217 5.5 12C5.5 14.2078 7.26803 16 9.44788 16ZM17.7285 12.0005C17.7285 14.0801 16.8445 15.7657 15.7539 15.7657C14.6633 15.7657 13.7793 14.0801 13.7793 12.0005C13.7793 9.92087 14.6633 8.2353 15.7539 8.2353C16.8445 8.2353 17.7285 9.92087 17.7285 12.0005ZM18.8062 15.3763C19.1899 15.3763 19.5011 13.8662 19.5011 12.0039C19.5011 10.1402 19.1899 8.6314 18.8062 8.6314C18.4225 8.6314 18.1113 10.1415 18.1113 12.0039C18.1113 13.8662 18.4225 15.3763 18.8062 15.3763Z"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_1648_2084">
                                        <rect width="24" height="24" fill="white" transform="translate(0.5)"/>
                                        </clipPath>
                                        </defs>
                                        </svg>
                                    </a>
                                </Link>
                                <Link href="https://www.facebook.com/LexirOfficial/">
                                    <a className='fill-white hover:fill-footer-secondary' id="facebook-link">
                                        <svg width="25" height="24" viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.5 3H7.5C5.291 3 3.5 4.791 3.5 7V17C3.5 19.209 5.291 21 7.5 21H13.121V14.039H10.778V11.314H13.121V9.309C13.121 6.985 14.542 5.718 16.616 5.718C17.315 5.716 18.013 5.752 18.708 5.823V8.253H17.28C16.15 8.253 15.93 8.787 15.93 9.575V11.31H18.63L18.279 14.035H15.914V21H17.5C19.709 21 21.5 19.209 21.5 17V7C21.5 4.791 19.709 3 17.5 3Z"/>
                                        </svg>
                                    </a>
                                </Link>
                                <Link href="https://www.instagram.com/lexirofficial/?hl=fr">
                                    <a className='fill-white hover:fill-footer-secondary' id="instagram-link">
                                        <svg width="25" height="24" viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.5 3C5.739 3 3.5 5.239 3.5 8V16C3.5 18.761 5.739 21 8.5 21H16.5C19.261 21 21.5 18.761 21.5 16V8C21.5 5.239 19.261 3 16.5 3H8.5ZM18.5 5C19.052 5 19.5 5.448 19.5 6C19.5 6.552 19.052 7 18.5 7C17.948 7 17.5 6.552 17.5 6C17.5 5.448 17.948 5 18.5 5ZM12.5 7C15.261 7 17.5 9.239 17.5 12C17.5 14.761 15.261 17 12.5 17C9.739 17 7.5 14.761 7.5 12C7.5 9.239 9.739 7 12.5 7ZM12.5 9C11.7044 9 10.9413 9.31607 10.3787 9.87868C9.81607 10.4413 9.5 11.2044 9.5 12C9.5 12.7956 9.81607 13.5587 10.3787 14.1213C10.9413 14.6839 11.7044 15 12.5 15C13.2956 15 14.0587 14.6839 14.6213 14.1213C15.1839 13.5587 15.5 12.7956 15.5 12C15.5 11.2044 15.1839 10.4413 14.6213 9.87868C14.0587 9.31607 13.2956 9 12.5 9Z"/>
                                        </svg>
                                    </a>
                                </Link>
                                <Link href="https://www.linkedin.com/company/lexir/">
                                    <a className='fill-white hover:fill-footer-secondary' id="linkedin-link">
                                        <svg width="25" height="24" viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_1648_2070)">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M7.5 3C5.29086 3 3.5 4.79086 3.5 7V17C3.5 19.2091 5.29086 21 7.5 21H17.5C19.7091 21 21.5 19.2091 21.5 17V7C21.5 4.79086 19.7091 3 17.5 3H7.5ZM6.5 12C6.5 11.3 7.1 10.7 7.8 10.7C8.5 10.7 9.1 11.2 9.1 11.9V16.5C9.1 17.2 8.5 17.8 7.8 17.8C7.1 17.8 6.5 17.2 6.5 16.5V12ZM7.9 7C7 7 6.5 7.5 6.5 8.2C6.5 8.9 7 9.4 7.8 9.4C8.7 9.4 9.2 8.9 9.2 8.2C9.2 7.5 8.6 7 7.9 7ZM13.7 12C13.7 12 14 10.7 15.9 10.7C17.1 10.7 18.1 11.7 18.1 13.9V16.5C18.1 17.2 17.6 17.7 16.9 17.7C16.2 17.7 15.7 17.2 15.7 16.5V13.9C15.7 12.8 15.1 12.7 14.8 12.7C14.5 12.7 13.7 12.8 13.7 13.9V16.5C13.7 17.2 13.2 17.7 12.5 17.7H12.3C11.6 17.7 11.1 17.2 11.1 16.5V12C11.1 11.3 11.7 10.7 12.4 10.7C13.1 10.7 13.7 11.3 13.7 12Z"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_1648_2070">
                                        <rect width="24" height="24" transform="translate(0.5)"/>
                                        </clipPath>
                                        </defs>
                                        </svg>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between w-full mt-8 pt-2 border-t border-neutral-500">
                        <p className="text-footer-secondary">
                            © 2022 Lexir Inc.
                        </p>
                        <div className='text-white flex gap-x-16'>
                            <Link href="#">
                                <a className='hover:text-footer-secondary'>
                                    Privacy
                                </a>
                            </Link>
                            <Link href="#">
                            <a className='hover:text-footer-secondary'>
                                Terms of Service
                            </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;