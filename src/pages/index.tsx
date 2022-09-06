// NEXT IMPORTS
import Head from 'next/head';
import Image from 'next/image';

// FONTAWESOME ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTableColumns,
    faTags,
    faBoxesStacked,
    faPeopleGroup,
    faReceipt,
    faMoneyCheckDollar,
    faScrewdriverWrench,
    faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

// COMPONENTS
import { BillingInformation } from '../components/BillingInformation';
import { ProfileProjects } from '../components/ProfileProjects';
import { PastInvoices } from '../components/PastInvoices';

// PROFILE PICTURE
import profilePic from '../assets/profile-pic.jpg';

const billingName = 'Jordi Ollé';
const billingAddress = 'Av. Maria, 43460, Alcover, Tarragona';

export default function Home() {
    return (
        <div className="h-full flex">
            <Head>
                <title>Lexir Frontend Assessment!</title>
                <meta name="description" content="Lexir Frontend Assessment!" />
                <link rel="icon text-green-900" href="/favicon.ico" />
            </Head>
            <aside className="w-96 p-14 bg-white">
                <div className="text-5xl pl-5 items-center">
                    <svg
                        width="145"
                        height="34"
                        viewBox="0 0 145 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M25.9294 22.3795L25.9563 33.8388L0.079701 33.9039L0.0775454 33.1564C1.49278 32.1897 2.1986 30.2281 2.19178 27.272L2.14403 6.94341C2.13685 3.95294 1.42133 1.99504 0.00179408 1.06787L0 0.321178L12.7198 0.289743L12.7216 1.03607C11.3071 2.06938 10.6006 4.03208 10.6074 6.92196L10.6555 27.3001C10.6598 29.0605 11.0088 30.3146 11.7056 31.0595C12.3996 31.8047 13.5538 32.1764 15.1662 32.1723H15.3105C17.8261 32.166 19.9199 31.2633 21.5918 29.4659C23.2659 27.6677 24.4689 25.306 25.2027 22.3813L25.9294 22.3795Z"
                            fill="#2D2D2D"
                        />
                        <path
                            d="M55.1488 24.7965L55.17 33.7657L30.3091 33.8279L30.3073 33.0797C31.7218 32.1141 32.4283 30.1513 32.4211 27.1949L32.3734 6.86703C32.3662 3.90911 31.6507 1.95158 30.2315 0.991868L30.2297 0.244805L53.9304 0.186001L53.9515 9.15371L53.2249 9.15556C52.3159 6.99869 51.0302 5.25012 49.3669 3.90874C47.7036 2.5681 45.7599 1.90018 43.5333 1.90535L40.8253 1.91238L40.8583 16.0629L42.9858 15.8577C44.405 15.7219 45.5481 15.2123 46.4176 14.3299C47.2868 13.4475 48.0727 12.2747 48.7803 10.812L49.5044 10.8102L49.5321 22.5195L48.8076 22.5213C48.0616 21.0934 47.2606 19.9417 46.4033 19.0641C45.5485 18.185 44.4097 17.6813 42.9901 17.5526L40.8615 17.3585L40.8849 27.2234C40.8888 28.9512 41.2058 30.1961 41.8363 30.9583C42.4685 31.7213 43.4439 32.1011 44.7669 32.0974H44.8635C47.0556 32.0922 48.9731 31.4143 50.6141 30.0648C52.2548 28.7157 53.5257 26.9597 54.4218 24.7984L55.1488 24.7965Z"
                            fill="#2D2D2D"
                        />
                        <path
                            d="M106.873 27.0076C106.88 29.8645 107.596 31.8224 109.015 32.8816L109.017 33.6287L96.2974 33.6605L96.2956 32.9134C97.7105 31.9467 98.4163 29.9851 98.4098 27.0286L98.3617 6.70003C98.3542 3.74284 97.639 1.78495 96.2198 0.824863L96.218 0.0785404L108.938 0.0467346L108.939 0.793058C107.524 1.82637 106.819 3.7887 106.825 6.67858L106.873 27.0076Z"
                            fill="#2D2D2D"
                        />
                        <path
                            d="M134.821 32.3938C133.286 31.3183 131.661 29.5856 129.947 27.1984C129.558 26.6684 129.153 26.0545 128.732 25.3581C128.313 24.6613 127.956 24.0644 127.664 23.5666C127.374 23.0684 126.952 22.2988 126.402 21.2537C125.851 20.2089 125.43 19.4374 125.14 18.9393L125.138 18.241C129.423 17.0028 131.56 13.9243 131.548 9.00851C131.537 4.12449 129.499 1.68877 125.436 1.69876L124.372 1.70135L124.432 26.9628C124.439 29.8534 125.154 31.8109 126.573 32.8368L126.575 33.585L113.856 33.6168L113.854 32.8687C115.269 31.9363 115.975 29.9736 115.968 26.9846L115.92 6.65526C115.913 3.69808 115.198 1.74055 113.778 0.780834L113.777 0.0341411L127.223 0.000116471C136.187 -0.0217037 140.677 3.02239 140.691 9.13388C140.696 11.5922 139.958 13.4872 138.478 14.8204C136.999 16.1522 135.227 17.038 133.164 17.4736L135.202 20.4589C138.924 25.864 142.191 29.6748 145 31.8941L144.81 32.6431C143.36 33.5425 141.781 33.9955 140.071 34C138.105 34.0044 136.354 33.4689 134.821 32.3938Z"
                            fill="#2D2D2D"
                        />
                        <path
                            d="M70.2289 22.7057L69.3605 21.3392L66.5645 25.316C63.6414 29.443 60.8088 32.0063 58.0709 33.01L58.0727 33.7582L69.0517 33.7308L69.0499 32.983C67.1762 30.9619 67.234 28.1874 69.2251 24.6621L70.2289 22.7057Z"
                            fill="#2D2D2D"
                        />
                        <path
                            d="M86.1069 25.4173L78.8735 14.1241L82.4396 8.53481C85.0097 4.54209 87.8266 1.97804 90.8868 0.840063L90.8857 0.0930005L79.9042 0.121108L79.906 0.867061C80.7795 1.79608 81.225 3.06535 81.2448 4.67671C81.267 6.28696 80.9382 7.70786 80.2643 8.93867L78.1461 13.0301L75.1839 8.40389C73.1447 5.15306 72.9785 2.64596 74.6824 0.880005L74.6806 0.134422L58.4779 0.174734L58.4797 0.921426C59.2211 1.25206 60.0138 1.86413 60.8528 2.75839C61.6943 3.65412 62.3818 4.48329 62.9153 5.24588C63.4495 6.00885 64.1536 7.0699 65.0281 8.42904L75.8039 25.2431C76.8397 26.8353 77.4324 28.3209 77.58 29.6989C77.73 31.0769 77.352 32.1653 76.4527 32.9645L76.4544 33.7127L93.141 33.6701L93.1392 32.9231C91.0085 31.9312 88.6638 29.4304 86.1069 25.4173Z"
                            fill="#2D2D2D"
                        />
                    </svg>
                </div>
                <div className="mt-24 mb-10 text-center flex items-center">
                    <Image
                        src={profilePic}
                        alt="Profile picture"
                        layout="fixed"
                        width="66px"
                        height="66px"
                        className="rounded-full"
                    />
                    <div className="flex flex-col items-start pl-3">
                        <h3 className="font-bold text-xl">Jordi Ollé</h3>
                        <small className="text-gray-400">Lexir Online Shop</small>
                    </div>
                </div>
                <ul>
                    <li className="py-4 rounded transition ease-in-out">
                        <a href="#" className="flex flex-row items-center">
                            <div className="w-10 text-xl">
                                <FontAwesomeIcon icon={faTableColumns} className="ml-1.5" />
                            </div>
                            <p>Dashboard</p>
                        </a>
                    </li>
                    <li className="py-4 rounded transition ease-in-out">
                        <a href="#" className="flex flex-row items-center">
                            <div className="w-10 text-xl">
                                <FontAwesomeIcon icon={faTags} className="ml-1.5" />
                            </div>
                            <p>Brands</p>
                        </a>
                    </li>
                    <li className="py-4 rounded transition ease-in-out">
                        <a href="#" className="flex flex-row items-center">
                            <div className="w-10 text-xl">
                                <FontAwesomeIcon icon={faBoxesStacked} className="ml-1.5" />
                            </div>
                            <p>Products</p>
                        </a>
                    </li>
                    <li className="py-4 rounded transition ease-in-out">
                        <a href="#" className="flex flex-row items-center">
                            <div className="w-10 text-xl">
                                <FontAwesomeIcon icon={faPeopleGroup} className="ml-1.5" />
                            </div>
                            <p>Customers</p>
                        </a>
                    </li>
                    <li className="py-4 rounded transition ease-in-out">
                        <a href="#" className="flex flex-row items-center">
                            <div className="w-10 text-xl">
                                <FontAwesomeIcon icon={faReceipt} className="ml-1.5" />
                            </div>
                            <p>Orders</p>
                        </a>
                    </li>
                    <li className="py-4 rounded transition ease-in-out">
                        <a href="#" className="flex flex-row items-center">
                            <div className="w-10 text-xl">
                                <FontAwesomeIcon icon={faMoneyCheckDollar} className="ml-1.5" />
                            </div>
                            <p>Billing Profile</p>
                        </a>
                    </li>
                    <li className="py-4 rounded transition ease-in-out">
                        <a href="#" className="flex flex-row items-center">
                            <div className="w-10 text-xl">
                                <FontAwesomeIcon icon={faScrewdriverWrench} className="ml-1.5" />
                            </div>
                            <p>Accound Details</p>
                        </a>
                    </li>
                    <li className="py-4 rounded transition ease-in-out">
                        <a href="#" className="flex flex-row items-center">
                            <div className="w-10 text-xl">
                                <FontAwesomeIcon icon={faRightFromBracket} className="ml-1.5" />
                            </div>
                            <p>Logout</p>
                        </a>
                    </li>
                </ul>
            </aside>
            <main className="p-14 w-full main-background-color">
                <h1 className="text-5xl ss-pro font-bold">Billing profile details</h1>
                <BillingInformation name={billingName} address={billingAddress} />
                <ProfileProjects />
                <PastInvoices />
            </main>
        </div>
    );
}
