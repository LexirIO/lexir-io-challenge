import Link from "next/link";
import React from "react";

export default function FooterNavigation() {
  return (
    <div className="flex gap-20 items-start">
      <div>
        <h4 className="text-secondary mb-2">COMMUNITY</h4>
        <ul className="text-base text-white leading-loose">
          <li className="text-white">
            <Link href="/" className="text-white">
              Lexir for Brands
            </Link>
          </li>
          <li className="text-white">
            <Link href="/">Business Buyers</Link>
          </li>
          <li className="text-white	">
            <Link href="/">Sales Affiliates</Link>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-secondary mb-2">PLATFORM</h4>
        <ul className="text-base leading-loose">
          <li className="text-white	">
            <Link href="/">Resources</Link>
          </li>
          <li className="text-white">
            <Link href="/">Pricings</Link>
          </li>
          <li className="text-white	">
            <Link href="/">Get Started</Link>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-secondary mb-2">COMPANY</h4>
        <ul className="text-base leading-loose">
          <li className="text-white	">
            <Link href="/">About</Link>
          </li>
          <li className="text-white">
            <Link href="/">Contact</Link>
          </li>
          <li className="text-white	">
            <Link href="/">Legal</Link>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-secondary mb-2">LEXIR SHOP</h4>
        <ul className="text-base leading-loose">
          <li className="text-white	">
            <Link href="/">Brands</Link>
          </li>
          <li className="text-white">
            <Link href="/">Spirits</Link>
          </li>
          <li className="text-white	">
            <Link href="/">Wine</Link>
          </li>
          <li className="text-white	">
            <Link href="/">Blog</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
