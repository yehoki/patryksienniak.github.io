import Link from "next/link";
import React from "react";

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 flex mx-auto max-w-screen justify-between bg-[#616247FF]">
      <div className="flex flex-row items-center">
        <Link href="/">
            Bookmarkt
        </Link>
      </div>
      <div>
        <form></form>
      </div>
      <div className="flex space-x-5 px-5 ">
        <Link href="/login">
            Sign in
        </Link>
        <button>Sign up</button>
      </div>
    </header>
  );
}

export default Header;
