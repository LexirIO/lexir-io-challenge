type BillingInformationProps = {
    name: string;
    address: string;
};

export const BillingInformation = ({ name, address }: BillingInformationProps) => (
    <div className="w-full py-8 px-14 outside-line mt-10">
        <table className="w-full px-16">
            <thead>
                <tr className="border-underline">
                    <th colSpan={2} className="text-left text-2xl pt-1 pb-7">
                        Billing Information
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="font-bold py-4 w-1/4">Credit card</td>
                    <td className="pt-7">
                        Mastercard ending in 4060 <br />
                        Expires on 04/2026
                    </td>
                </tr>
                <tr>
                    <td className="font-bold py-4">Name</td>
                    <td>{name}</td>
                </tr>
                <tr>
                    <td className="font-bold py-4">Address</td>
                    <td>{address}</td>
                </tr>
                <tr>
                    <td className="font-bold py-4">Next billing</td>
                    <td>1 October 2022</td>
                </tr>
                <tr>
                    <td colSpan={2} className="py-4">
                        <button className="text-white hover:bg-gray-900 py-3 px-8 rounded mr-5 transition ease-in-out">
                            Change credit card
                        </button>
                        <button className="text-white hover:bg-gray-900 py-3 px-8 rounded transition ease-in-out">
                            Edit billing information
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
);
