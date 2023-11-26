"use client";

import { useState } from "react";

export default function Home() { 
    const [email, setEmail] = useState("")
   
    const handleSubsribe = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(email)
     }

    return (
      <div className=" flex flex-col h-[300px] items-center justify-around">
        <div>
          <h1 className="text-xl font-semibold">
            Stay up to date with our latest news and products
          </h1>
        </div>
        <div className="flex-col">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded my-2 rounded-full w-[400px] p-3"
            type="email"
            placeholder="Enter your email address"
          />
          <button
            onClick={handleSubsribe}
            className="mt-4 md:mt-0text-sm font-semibold bg-yellow-400 my-2 ml-4 py-2 md:py-3 px-4 md:px-10 rounded rounded-full transform hover:scale-110"
          >
            Subscribe
          </button>
        </div>
        <div>
          <p>Your email is safe with us, we dont spam</p>
        </div>
      </div>
    );
}