import Image from "next/image";
import React from "react";
import MediumIcon from "../assets/icons/medium.png";
import FacebookIcon from "../assets/icons/facebook.png";
import InstagramIcon from "../assets/icons/instagram.png";
import LinkedinIcon from "../assets/icons/linkedin.png";
import Link from "next/link";

export default function FooterSocialNetwork() {
  return (
    <div className="flex gap-3">
      <Link href="/">
        <a>
          <Image src={MediumIcon} width={24} height={24} alt="Medium" />
        </a>
      </Link>
      <Link href="/">
        <a>
          <Image src={FacebookIcon} width={24} height={24} alt="Facebook" />
        </a>
      </Link>
      <Link href="/">
        <a>
          <Image src={InstagramIcon} width={24} height={24} alt="Instagram" />
        </a>
      </Link>
      <Link href="/">
        <a>
          <Image src={LinkedinIcon} width={24} height={24} alt="Linkedin" />
        </a>
      </Link>
    </div>
  );
}
