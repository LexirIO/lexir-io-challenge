import { RequestPdfButton } from '../components/RequestPdfButton';

export const PastInvoices = () => (
    <div className="w-full py-8 px-14 outside-line mt-10">
        <table className="w-full px-16">
            <thead>
                <tr className="border-underline">
                    <th colSpan={5} className="pacifico text-left text-2xl pt-1 pb-3">
                        Past invoices
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-underline">
                    <td className="font-bold py-4">Invoice #</td>
                    <td className="font-bold">Invoice date</td>
                    <td className="font-bold">Amount</td>
                    <td className="font-bold">Status</td>
                    <td className="font-bold">&nbsp;</td>
                </tr>
                <tr className="border-underline">
                    <td className="py-6">JOB-111-111</td>
                    <td>03-09-2022</td>
                    <td>19,99€</td>
                    <td className="text-green-700">Paid</td>
                    <td>
                        <RequestPdfButton />
                    </td>
                </tr>
                <tr className="border-underline">
                    <td className="py-6">JOB-111-112</td>
                    <td>05-09-2022</td>
                    <td>11,90€</td>
                    <td className="text-green-700">Paid</td>
                    <td>
                        <RequestPdfButton />
                    </td>
                </tr>
                <tr>
                    <td className="py-6">JOB-111-113</td>
                    <td>07-09-2022</td>
                    <td>20,95€</td>
                    <td className="text-red-700">Refunded</td>
                    <td>
                        <RequestPdfButton />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
);
