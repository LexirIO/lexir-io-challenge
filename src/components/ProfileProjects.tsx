export const ProfileProjects = () => (
    <div className="w-full py-8 px-14 outside-line mt-10">
        <table className="w-full px-16">
            <thead>
                <tr className="border-underline">
                    <th colSpan={3} className="text-left text-2xl pt-1 pb-3">
                        Projects on this profile
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-underline">
                    <td className="font-bold py-4">Project</td>
                    <td className="font-bold">Product</td>
                    <td className="font-bold">Last Update</td>
                </tr>
                <tr>
                    <td className="py-6">Lexir</td>
                    <td>Crafted spirits samples</td>
                    <td>19,99€/month</td>
                </tr>
            </tbody>
        </table>
    </div>
);
