"use client";

import { useState } from "react";
import Link from "next/link";
import { useWeb3 } from "./web3-provider";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import Image from "next/image";

export function Header() {
  const { address, connectWallet, disconnectWallet } = useWeb3();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className=" rounded-xl bg-gray-700 bg-opacity-60 backdrop-blur-md  shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-3xl font-bold flex gap-2 justify-center items-center"
        >
          <Image
            src="https://raw.githubusercontent.com/yash-raj10/GatherDAO/refs/heads/main/public/EventChain.png?token=GHSAT0AAAAAACY4HLYHDXJYP3RIIU62ZSY4ZYVUQIA"
            alt="EventChain"
            width={50}
            height={50}
          />
          EventChain
        </Link>
        <div className="hidden md:flex space-x-4 items-center">
          {/* <Link href="/events" className="text-foreground hover:text-primary">
            Browse Events
          </Link> */}
          <Link
            href="/dashboard"
            className="text-foreground hover:text-primary rounded-lg border-2 p-2 font-semibold bg-slate-700 bg-opacity-50
             border-gradient-to-r from-violet-950  to-pink-900 
            "
          >
            <div className="bg-clip-text text-transparent  bg-gradient-to-r from-blue-800  to-pink-900 font-bold ">
              <span className=""> Dashboard</span>
            </div>
          </Link>
          <ModeToggle />
          {address ? (
            <Button onClick={disconnectWallet}>
              Disconnect {address.slice(0, 6)}...{address.slice(-4)}
            </Button>
          ) : (
            <Button onClick={connectWallet}>Connect Wallet</Button>
          )}
        </div>
        <div className="md:hidden">
          <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-background py-2">
          <Link
            href="/events/create"
            className="block px-4 py-2 text-foreground hover:text-primary"
          >
            Create Event
          </Link>
          <Link
            href="/events"
            className="block px-4 py-2 text-foreground hover:text-primary"
          >
            Browse Events
          </Link>
          <Link
            href="/dashboard"
            className="block px-4 py-2 text-foreground hover:text-primary"
          >
            Dashboard
          </Link>
          <div className="px-4 py-2">
            <ModeToggle />
          </div>
          <div className="px-4 py-2">
            {address ? (
              <Button onClick={disconnectWallet} className="w-full">
                Disconnect {address.slice(0, 6)}...{address.slice(-4)}
              </Button>
            ) : (
              <Button onClick={connectWallet} className="w-full">
                Connect Wallet
              </Button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
