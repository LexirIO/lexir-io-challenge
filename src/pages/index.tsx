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
import { ProfileElement } from '../components/ProfileElement';
import { BillingInformation } from '../components/BillingInformation';
import { ProfileProjects } from '../components/ProfileProjects';
import { PastInvoices } from '../components/PastInvoices';

// PROFILE PICTURE
import profilePic from '../assets/profile-pic.jpg';

const tableColumns = <FontAwesomeIcon icon={faTableColumns} className="ml-1.5" />;
const tags = <FontAwesomeIcon icon={faTags} className="ml-1.5" />;
const boxesStacked = <FontAwesomeIcon icon={faBoxesStacked} className="ml-1.5" />;
const peopleGroup = <FontAwesomeIcon icon={faPeopleGroup} className="ml-1.5" />;
const receipt = <FontAwesomeIcon icon={faReceipt} className="ml-1.5" />;
const moneyCheckDollar = <FontAwesomeIcon icon={faMoneyCheckDollar} className="ml-1.5" />;
const screwdriverWrench = <FontAwesomeIcon icon={faScrewdriverWrench} className="ml-1.5" />;
const rightFromBracket = <FontAwesomeIcon icon={faRightFromBracket} className="ml-1.5" />;

const billingName = 'Jordi Ollé';
const billingAddress = 'Av. Maria, 43460, Alcover';

export default function Home() {
    return (
        <div className="h-full flex">
            <Head>
                <title>Lexir Frontend Assessment!</title>
                <meta name="description" content="Lexir Frontend Assessment!" />
                <link rel="icon text-green-900" href="/favicon.ico" />
            </Head>
            <aside className="bg-green-50 w-80 p-16">
                <h1 className="text-green-900 text-6xl pacifico underline">Planty</h1>
                <div className="mt-16 mb-6 text-center">
                    <Image
                        src={profilePic}
                        alt="Profile picture"
                        layout="intrinsic"
                        className="rounded-3xl"
                    />
                    <h3 className="font-bold text-xl">Jordi Ollé</h3>
                    <small>Planty Online Shop</small>
                </div>
                <ul>
                    <ProfileElement label="Dashboard" icon={tableColumns} />
                    <ProfileElement label="Brands" icon={tags} />
                    <ProfileElement label="Products" icon={boxesStacked} />
                    <ProfileElement label="Customers" icon={peopleGroup} />
                    <ProfileElement label="Orders" icon={receipt} />
                    <ProfileElement label="Billing profile" icon={moneyCheckDollar} />
                    <ProfileElement label="Account details" icon={screwdriverWrench} />
                    <ProfileElement label="Logout" icon={rightFromBracket} />
                </ul>
            </aside>
            <main className="p-14 w-full">
                <h1 className="text-green-900 text-5xl pacifico underline">
                    Billing profile details
                </h1>
                <BillingInformation name={billingName} address={billingAddress} />
                <ProfileProjects />
                <PastInvoices />
            </main>
        </div>
    );
}
