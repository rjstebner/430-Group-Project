"use client";
import { useState } from "react";

interface NavBarProps {
    navItems: string[];
}

export default function NavBar({ navItems }: NavBarProps) {
    const [selectedIndex, setSelectedIndex] = useState(-1);
    return (
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <img 
                width="50"
                height="50"
                className="d-inline-block align-center"
                alt=""
                />
            <span className="navbar-toggler-icon" />
            </a>
                <button className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                    aria-controls="navbarContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
        </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-md-1">
                        {navItems.map((items, index) => (
                            <li
                                key={items}
                                className="nav-item"
                                onClick={() => setSelectedIndex(index)}
                            >
                                <a
                                    className={
                                        selectedIndex == index
                                            ? "nav-link active fw-bold"
                                            : "nav-link"}
                                    href="#"
                                >
                                    {items}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <form className="d-flex me-3">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
}