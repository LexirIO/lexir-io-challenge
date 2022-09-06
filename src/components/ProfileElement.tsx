type ProfileElementProps = {
    label: string;
    icon: string;
};

export const ProfileElement = ({ label, icon }: ProfileElementProps) => (
    <li className="py-4 rounded transition ease-in-out">
        <a href="#" className="flex flex-row items-center">
            <div className="w-10 text-xl">{icon}</div>
            <p>{label}</p>
        </a>
    </li>
);
