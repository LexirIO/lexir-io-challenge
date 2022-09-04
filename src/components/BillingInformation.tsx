type BillingInformationProps = {
    name: string;
    address: string;
};

export const BillingInformation = ({ name, address }: BillingInformationProps) => (
    <table className="w-full border border-green-200 px-16 mt-10 shadow-lg">
        <thead>
            <tr>
                <th colSpan={2} className="pacifico text-left text-3xl pt-7 pb-3 pl-16 underline">
                    Billing information
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="font-bold py-4 pl-16 w-1/4">Credit card</td>
                <td>
                    Mastercard ending in 4060 <br />
                    Expires on 04/2026
                </td>
            </tr>
            <tr>
                <td className="font-bold py-4 pl-16">Name</td>
                <td>{name}</td>
            </tr>
            <tr>
                <td className="font-bold py-4 pl-16">Address</td>
                <td>{address}</td>
            </tr>
            <tr>
                <td className="font-bold py-4 pl-16">Next billing</td>
                <td>1 October 2022</td>
            </tr>
            <tr>
                <td colSpan={2} className="py-4 pl-16">
                    <button className="bg-green-900 text-white pacifico hover:bg-green-700 py-2 px-4 rounded mr-5 transition ease-in-out">
                        Change credit card
                    </button>
                    <button className="bg-green-900 text-white pacifico hover:bg-green-700 py-2 px-4 rounded transition ease-in-out">
                        Edit billing information
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
);
