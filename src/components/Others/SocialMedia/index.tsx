import Link from "next/link";
import Image from "next/image";
import React from "react";
import unknown from "../../../assets/icons/social-media/unknown.svg";
import facebook from "../../../assets/icons/social-media/facebook.svg";
import instagram from "../../../assets/icons/social-media/instagram.svg";
import linkedin from "../../../assets/icons/social-media/linkedin.svg";

const SocialMedia = () => {
  return (
    <div className="flex gap-4.5 mb-4">
      <Link href="/">
        <a>
          <Image src={unknown} alt="unknown" />
        </a>
      </Link>
      <Link href="/">
        <a>
          <Image src={facebook} alt="facebook" />
        </a>
      </Link>
      <Link href="/">
        <a>
          <Image src={instagram} alt="instagram" />
        </a>
      </Link>
      <Link href="/">
        <a>
          <Image src={linkedin} alt="linkedin" />
        </a>
      </Link>
    </div>
  );
};

export default SocialMedia;
