"use client";
import Link from "next/link";
// import { useState } from "react";
import * as React from "react";

// interface NavBarProps {
// }

export default function NavBar() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-brand">
              <Link className="navbar-brand" href='/'></Link>
            </div>
            <ul className="nav navbar-nav w-100">
              <li><Link href='/'>Catalog</Link></li>
              <li><Link href='/admin'>Admin</Link></li>
              <li><Link href='/contact'>Contact Us</Link></li>
              <li><Link href='/login'>Login</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    )
}