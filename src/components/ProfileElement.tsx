type ProfileElementProps = {
    label: string;
    icon: string;
};

export const ProfileElement = ({ label, icon }: ProfileElementProps) => (
    <li className="py-2 hover:bg-green-200 rounded transition ease-in-out">
        <a href="#" className="flex">
            <div className="icon text-green-900">{icon}</div>
            <p>{label}</p>
        </a>
    </li>
);
