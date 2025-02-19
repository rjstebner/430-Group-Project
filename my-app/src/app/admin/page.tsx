import React from "react";

export default function Admin() {
    return (
        <div className="border border-solid p-5 m-4 rounded-xl">
            <h1 className="text-3xl">Admin Dashboard</h1>
            <br />
            <div className= " bg-red-300 p-4 rounded-xl">
                <h2 className="text-2xl">Sales</h2>
                <br />
                <p>0 Today</p>
                <p>0 Within the Month</p>
            </div>
            <br />
            <div className=" bg-green-300 p-4 rounded-xl">
                <h2 className="text-2xl">Revenue</h2>
                <br />
                <p>$0 Today</p>
                <p>$0 This Month</p>
            </div>
            <br />
            <div className= "bg-slate-300 p-4 rounded-xl">
                <h2 className="text-2xl">Customers</h2>
                <br />
                <p>0 Total</p>
            </div>
        </div>
    );
}