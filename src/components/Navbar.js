import React from "react";

const Navbar=()=>{

    return(
        <div className="text-xl flex justify-between  bg-blue-200">
            <div className="font-bold m-2 w-2">
                portfolio
            </div>
            <div className="flex">
                <ul className="flex justify-around">
                    <li className="m-2">home</li>
                    <li className="m-2">projects</li>
                    <li className="m-2">contact me</li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar;