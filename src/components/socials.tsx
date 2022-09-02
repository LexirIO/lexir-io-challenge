import { BsLinkedin, BsGithub } from "react-icons/bs";

export default function Socials() {
  const contacts = {
    github: "https://github.com/Filigs",
    linkedIn: "https://www.linkedin.com/in/nuno-filipe-martins-666417168/",
  };
  return (
    <ul id={"contacts"} className="flex rounded-xl border-0 md:flex-row">
      <span className="sr-only">{"Social Links"}</span>
      <li className="items-center p-1 lg:p-2 text-light dark:text-light hover:text-indigo-600 dark:hover:text-sky-400 text-lg lg:text-2xl xl:text-4xl rounded-xl">
        <a
          href={contacts.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          alt="LinkedIn Profile"
        >
          <BsLinkedin />
          <span className="sr-only">{"Linkedin Profile"}</span>
        </a>
      </li>

      <li className="items-center p-1 lg:p-2 text-light dark:text-light hover:text-indigo-600 dark:hover:text-sky-400 text-lg lg:text-2xl xl:text-4xl rounded-xl">
        <a
          href={contacts.github}
          target="_blank"
          rel="noopener noreferrer"
          alt="Github Profile"
        >
          <BsGithub />
          <span className="sr-only">{"Github Profile"}</span>
        </a>
      </li>
    </ul>
  );
}
