export const ProfileProjects = () => (
    <table className="w-full border border-green-200 px-16 mt-10 shadow-lg">
        <thead>
            <tr>
                <th colSpan={3} className="pacifico text-left text-3xl pt-7 pb-3 pl-16 underline">
                    Projects on this profile
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-green-200">
                <td className="font-bold py-4 pl-16">Project</td>
                <td className="font-bold">Product</td>
                <td className="font-bold">Last Update</td>
            </tr>
            <tr>
                <td className="py-4 pl-16">Planty</td>
                <td>Lots of cool plants</td>
                <td>11,99€/month</td>
            </tr>
        </tbody>
    </table>
);
