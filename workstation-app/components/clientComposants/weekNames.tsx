"use client"
import React from "react";

function WeekNames() {

    return (
        <div className="grid grid-cols-7">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                (name, index) => (<div key={index}>{name}</div>)
            )}
        </div>
    );
}
export default WeekNames;