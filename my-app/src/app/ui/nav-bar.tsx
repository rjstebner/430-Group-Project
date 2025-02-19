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
            <ul className="nav navbar-nav">
              <li><Link href='/'>Home</Link></li>
              <li><Link href='/catalog'>Catelog</Link></li>
              <li><Link href='/account'>Account</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    )
}