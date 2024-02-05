"use client";

import { useState } from "react";

export default function Home() { 
    const [email, setEmail] = useState("")
   
    const handleSubsribe = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(email)
     }

    return (
      <div className=" bg-white  flex  flex-col  items-center justify-around py-12">
        <div className="flex flex-col gap-7 items-left">
          <div>
            <h1 className="text-xl text-blue-gray-600 font-semibold">
              Stay up to date with our latest news and products
            </h1>
          </div>
          <div className="flex-col">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="my-1 rounded-full w-[400px] p-3 border-2 border-gray-400"
              type="email"
              placeholder="Enter your email address"
            />
            <button
              onClick={handleSubsribe}
              className="mt-2 md:mt-0text-sm font-semibold bg-primary my-1 ml-4 py-2 md:py-3 px-4 md:px-10 text-white  rounded-full transform hover:scale-110 duration-300"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    );
}