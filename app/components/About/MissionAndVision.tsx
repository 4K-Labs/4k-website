"use client";
import Image from "next/image";
import Link from "next/link";

export default function Mission() {
    // const handleSubsribe = (e) => {
    //   e.preventDefault();
    // };

    return (
      <div className="">
        <div className="flex flex-col md:flex-row md:px-12 p-3 md:-mb-20 items-center">
          <div className="flex-1 rounded-2xl border-2 border-red-500 -ml-1 transform transition duration-500 ease-in-out hover:scale-110 hover:z-20">
            <Image
              alt={"4klabs"}
              src={"/images/4klabs.png"}
              width={300}
              height={400}
              className=" m-auto"
            />
          </div>
          <div className="flex-1 md:p-12 md:pb-20 z-10 rounded-e-3xl">
            <h1 className="text-lg mt-4 md:text-4xl mb-4 font-semibold">
              Mission
            </h1>
            <div>
              <p className="text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae dicta consequatur quasi mollitia eaque. Consequatur
                optio at laborum, soluta accusamus iusto dignissimos quam
                dolorem iste atque accusantium ex neque. Culpa recusandae, dolor
                consequuntur sequi praesentium esse impedit aut natus magnam
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row md:px-12 p-3 items-center">
          <div className="flex-1 md:p-12 z-10 rounded-e-3xl">
            <h1 className="text-lg mt-4 md:text-4xl mb-4 font-semibold">
              Vission
            </h1>
            <div>
              <p className="text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae dicta consequatur quasi mollitia eaque. Consequatur
                optio at laborum, soluta accusamus iusto dignissimos quam
                dolorem iste atque accusantium ex neque. Culpa recusandae, dolor
                consequuntur sequi praesentium esse impedit aut natus magnam
                labore deleniti,
              </p>
            </div>
          </div>
          <div className="flex-1 rounded-2xl border-2 border-red-500 -ml-1 transform transition duration-500 ease-in-out hover:scale-110 hover:z-20">
            <Image
              alt={"4klabs"}
              src={"/images/4klabs.png"}
              width={300}
              height={300}
              className=" m-auto"
            />
          </div>
        </div>
        <div className="text-center m-20">
          <Link href="/contactus">
            <button
              onClick={() => window.location.href = '/contactus'}
              className="bg-orange-400 p-3 font-semibold px-10 md:px-20 rounded-full transform hover:scale-110 duration-300 text-white"
            >
              Contact us
            </button>
          </Link>
        </div>
      </div>
    );
}
