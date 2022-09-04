import { RequestPdfButton } from '../components/RequestPdfButton';

export const PastInvoices = () => (
    <table className="w-full border border-green-200 px-16 mt-10 shadow-lg">
        <thead>
            <tr>
                <th colSpan={5} className="pacifico text-left text-3xl pt-7 pb-3 pl-16 underline">
                    Past invoices
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-green-200">
                <td className="font-bold py-4 pl-16">Invoice #</td>
                <td className="font-bold">Invoice date</td>
                <td className="font-bold">Amount</td>
                <td className="font-bold">Status</td>
                <td className="font-bold">&nbsp;</td>
            </tr>
            <tr>
                <td className="py-4 pl-16">JOB-111-111</td>
                <td>03-09-2022</td>
                <td>19,99€</td>
                <td className="text-purple-500">Paid</td>
                <td>
                    <RequestPdfButton />
                </td>
            </tr>
            <tr className="bg-green-50">
                <td className="py-4 pl-16">JOB-111-112</td>
                <td>05-09-2022</td>
                <td>11,90€</td>
                <td className="text-purple-500">Paid</td>
                <td>
                    <RequestPdfButton />
                </td>
            </tr>
            <tr>
                <td className="py-4 pl-16">JOB-111-113</td>
                <td>07-09-2022</td>
                <td>20,95€</td>
                <td className="text-yellow-500">Refunded</td>
                <td>
                    <RequestPdfButton />
                </td>
            </tr>
        </tbody>
    </table>
);
