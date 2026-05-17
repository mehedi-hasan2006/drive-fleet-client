"use client";
import { useState } from "react";
import { Button } from "@heroui/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
// import { authClient } from "@/lib/auth-client";
// import logo from "@/assets/img/logo.png";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = usePathname();

  // get session
  //   const session = authClient.useSession();
  //   const user = session.data?.user;

  //   const isLoading = session?.isPending;

  // function for logout
  //   const handleLogout = async () => {
  //     await authClient.signOut();
  //     setIsMenuOpen(false);
  //   };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  const navlinks = (
    <ul className="flex flex-col md:flex-row gap-4">
      <li
        className={`hover:font-semibold  hover:text-rose-500 ${currentPath === "/" ? "border-b-2 border-b-rose-500 text-rose-500 font-semibold" : ""}`}
      >
        <Link href="/" onClick={closeMobileMenu}>
          Home
        </Link>
      </li>
      <li
        className={`hover:font-semibold hover:text-rose-500 ${currentPath === "/explore-cars" ? "border-b-2 border-b-rose-500 text-rose-500 font-semibold" : ""}`}
      >
        <Link href="/explore-cars" onClick={closeMobileMenu}>
          Explore Cars
        </Link>
      </li>
      <li
        className={`hover:font-semibold hover:text-rose-500 ${currentPath === "/add-car" ? "border-b-2 border-b-rose-500 text-rose-500 font-semibold" : ""}`}
      >
        <Link href="/add-car" onClick={closeMobileMenu}>
          Add Cars
        </Link>
      </li>
      <li
        className={`hover:font-semibold hover:text-rose-500 ${currentPath === "/my-profile" ? "border-b-2 border-b-rose-500 text-rose-500 font-semibold" : ""}`}
      >
        <Link href="/my-profile" onClick={closeMobileMenu}>
          My Profile
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="mx-auto flex h-16 container items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div className="flex items-center gap-3">
            <Link href="/">
              {/* <Image src={logo} alt="logo" className="w-15 h-15" /> */}
            </Link>
          </div>
        </div>
        <div className="hidden items-center gap-4 md:flex">{navlinks}</div>
        <div className="flex items-center gap-4 md:flex">
            {/* this will be replaced by user info and logout button when user is logged in */}
          <div className="flex gap-3 justify-center items-center">
            <Link
              className="hover:text-rose-600  hover:font-semibold "
              href="/login"
            >
              Login
            </Link>

            <Button className="bg-linear-to-r from-amber-500 to-rose-500 text-white">
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
          {/* {!user && (
            <div className="flex gap-3 justify-center items-center">
              <Link
                className="hover:text-rose-600  hover:font-semibold "
                href="/login"
              >
                Login
              </Link>

              <Button className="bg-linear-to-r from-amber-500 to-rose-500 text-white">
                <Link href="/signup">Sign Up</Link>
              </Button>
            </div>
          )} */}

          {/* {user && (
            <div className="flex gap-3">
              <span> Welcome, {user?.name}</span>
              <Button onClick={handleLogout} className="bg-rose-500">
                Logout
              </Button>
            </div>
          )} */}
        </div>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <div className="p-4">{navlinks}</div>
        </div>
      )}
    </nav>
  );
}
