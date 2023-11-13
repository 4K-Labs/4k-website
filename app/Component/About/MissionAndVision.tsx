"use client";
import Image from "next/image";
import Link from "next/link";

export default function Mission() {
    const handleSubsribe = (e) => {
      e.preventDefault();
    };

    return (
      <div className="p-7">
        <div className="flex px-12 p-3 -mb-20 items-center">
          <div className="flex-1 rounded rounded-2xl border-2 border-red-500 -ml-1 transform transition duration-500 ease-in-out hover:scale-110 hover:z-20">
            <Image
              alt={"4klabs"}
              src={"/images/4klabs.png"}
              width={300}
              height={400}
              className=" m-auto"
            />
          </div>
          <div className="flex-1 p-12 z-10 rounded-e-3xl">
            <h1 className="text-4xl mb-4 font-semibold">Mission</h1>
            <div>
              <p className="text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae dicta consequatur quasi mollitia eaque. Consequatur
                optio at laborum, soluta accusamus iusto dignissimos quam
                dolorem iste atque accusantium ex neque. Culpa recusandae, dolor
                consequuntur sequi praesentium esse impedit aut natus magnam
                labore deleniti, voluptatum atque blanditiis ex tempora repellat
                hic id cumque magni commodi quisquam? Animi qui laboriosam sit
              </p>
            </div>
          </div>
        </div>
        <div className="flex px-12 p-3 items-center">
          <div className="flex-1 p-12 z-10 rounded-e-3xl">
            <h1 className="text-4xl mb-4  font-semibold ">Vision</h1>
            <div>
              <p className="text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae dicta consequatur quasi mollitia eaque. Consequatur
                optio at laborum, soluta accusamus iusto dignissimos quam
                dolorem iste atque accusantium ex neque. Culpa recusandae, dolor
                consequuntur sequi praesentium esse impedit aut natus magnam
                labore deleniti, voluptatum atque blanditiis ex tempora repellat
                hic id cumque magni commodi quisquam? Animi qui laboriosam sit
              </p>
            </div>
          </div>
          <div className="flex-1 rounded rounded-2xl border-2 border-red-500 -ml-1 transform transition duration-500 ease-in-out hover:scale-110 hover:z-20">
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
          <Link href="/about">
            <button
              onClick={handleSubsribe}
              className="bg-yellow-500 ml-4 p-3 px-20 rounded rounded-full transform hover:scale-110"
            >
              Contact us
            </button>
          </Link>
        </div>
      </div>
    );
}
