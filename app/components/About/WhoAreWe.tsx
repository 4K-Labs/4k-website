"use client"
import Image from "next/image";

export default function WhoAreWe() {
    return (
      <div className="flex flex-col-reverse md:flex-row  p-3">
        <div className="flex-1 bg-brown-500 p-6 md:p-12 z-10 rounded-e-3xl">
          <h1 className="text-lg md:text-4xl mb-4 text-yellow-400 font-semibold text-center">
            Who Are We
          </h1>
          <div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae dicta consequatur quasi mollitia eaque. Consequatur
              optio at laborum, soluta accusamus iusto dignissimos quam dolorem
              iste atque accusantium ex neque. Culpa recusandae, dolor
              consequuntur sequi praesentium esse impedit aut natus magnam
              labore deleniti, voluptatum atque blanditiis ex tempora repellat
              hic id cumque magni commodi quisquam? Animi qui laboriosam sit
            </p>
          </div>
        </div>
        <div className="flex-1 -ml-4 transform transition duration-500 hover:scale-110 hover:z-20">
          <Image
            alt={"4klabs"}
            src={"/images/gathering.jpg"}
            width={600}
                    height={500}
                    className="rounded-2xl"
          />
        </div>
      </div>
    );
}