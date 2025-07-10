"use client"
import React from "react";
import { Hour } from "@/util/class/hour";




function OHour({hour}: {hour: Hour | undefined}) {


    return (
        <div className={`border flex-grow flex h-100`}>
            {hour?.value}
        </div>
    );
}
export default OHour;