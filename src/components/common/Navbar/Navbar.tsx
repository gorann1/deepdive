import clsx from "clsx";
import Link from "next/link";
import { ComponentProps } from "react";
import React from "react";

import styles from "./Navbar.module.css";
export function Navbar ({
  className,
  ...props
}:Omit<ComponentProps<"a">, "href">) {
return (
  <div className="navbar bg-base-100">
    <div className="flex-1">
      <a 
      className={clsx(className, styles.Navbar)}
      href="https://liveblocks.io"
      rel="noreferrer"
      target="_blank"
      {...props}
    >
      My Test</a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/admin">Admin</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  </div>
  );
}