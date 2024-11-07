import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs/server";
import { ArrowRightLeft, NotepadText, Plane } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";


export default async function LandingPage() {
  const user = await currentUser();
  if (user) redirect('/home');


  return (
    <section className="flex flex-col min-h-[150dvh] main-container">
      <Navbar />
      <main className="flex-grow relative">
        <div className="flex flex-col overflow-hidden">
          <div className="flex-1 pt-20 mb-4">
            <h1 className="text-3xl md:text-5xl xl:text-6xl text-center leading-relaxed font-semibold ">
              Find your next Flight
              <br />
              And Add your own Review
            </h1>
            <h2 className="text-2xl mt-4 text-center text-muted-foreground font-medium ">
              Explore new destinations, book your flight, and share your experience with others.
            </h2>
          </div>
          <Image
            src={'/header.png'}
            alt=""
            width={1000}
            height={1000}
            className="object-cover block mx-auto"
          />
        </div>

        <div className="mt-10">
          <h2 className="text-3xl mb-4 font-semibold">Lets go on an Adnebture</h2>
          <p className="text-muted-foreground text-lg pr-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quibusdam magnam ullam quam suscipit fugiat libero id aperiam totam consequatur fugiat libero id aperiam totam consequatur</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 mb-6">
            <Image
              src={'/traveller-1.jpg'}
              alt=""
              width={200}
              height={380}
              className="object-cover w-full h-full rounded-xl"
            />
            <Image
              src={'/traveller-2.jpg'}
              alt=""
              width={200}
              height={380}
              className="object-cover w-full h-full rounded-xl"
            />
            <Image
              src={'/traveller-3.jpg'}
              alt=""
              width={200}
              height={380}
              className="object-cover w-full h-full rounded-xl"
            />
            <Image
              src={'/traveller-4.jpg'}
              alt=""
              width={200}
              height={380}
              className="object-cover w-full h-full rounded-xl"
            />
          </div>
        </div>

        <div className="my-10">
          <h1 className="text-3xl font-semibold">Travel to make more <br /> sweet memories</h1>
          <p className="text-muted-foreground text-lg mt-4 mb-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quibusdam magnam ullam quam suscipit fugiat libero id aperiam totam consequatur fugiat libero id aperiam totam consequatur
          </p>
          <div className="flex justify-between gap-10">
            <div className="relative h-[530px] w-[500px] hidden md:block">
              <Image
                src={'/traveller-1.jpg'}
                alt=""
                fill
                className="object-cover rounded-xl w-full h-full"
              />
            </div>
            <div className="flex flex-col items-center md:items-stretch gap-6">
              <div className="rounded-lg flex bg-muted gap-4 p-4 h-[160px]">
                <div className="w-1/3 flex items-center justify-center">
                  <div className="w-[60px] h-[60px] text-white rounded-full flex items-center justify-center bg-primary">
                    <Plane />
                  </div>
                </div>
                <div className="max-w-[500px] flex flex-col gap-3">
                  <h3 className="text-lg font-medium">
                    Find trips that fit your freedom
                  </h3>
                  <p className="text-base text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sint architecto corrupti saepe, praesentium amet rerum suscipit ea autem ipsam?
                  </p>
                </div>
              </div>
              <div className="rounded-lg flex bg-muted gap-4 p-4 h-[160px]">
                <div className="w-1/3 flex items-center justify-center">
                  <div className="w-[60px] h-[60px] text-white rounded-full flex items-center justify-center bg-purple-600">
                    <NotepadText />
                  </div>
                </div>
                <div className="max-w-[500px] flex flex-col gap-3">
                  <h3 className="text-lg font-medium">
                    Add Your Review
                  </h3>
                  <p className="text-base text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sint architecto corrupti saepe, praesentium amet rerum suscipit ea autem ipsam?
                  </p>
                </div>
              </div>
              <div className="rounded-lg flex bg-muted gap-4 p-4 h-[160px]">
                <div className="w-1/3 flex items-center justify-center">
                  <div className="w-[60px] h-[60px] text-white rounded-full flex items-center justify-center bg-green-700">
                    <ArrowRightLeft />
                  </div>
                </div>
                <div className="max-w-[500px] flex flex-col gap-3">
                  <h3 className="text-lg font-medium">
                    Share Experience with Others
                  </h3>
                  <p className="text-base text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sint architecto corrupti saepe, praesentium amet rerum suscipit ea autem ipsam?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 mb-10 py-4">
          <h1 className="text-center text-4xl font-semibold my-4">
            Subscribe to get the latest news
          </h1>
          <p className="my-4 text-center text-lg font-medium text-muted-foreground max-w-2xl w-full mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid repellat ipsum sit omnis officiis! Maxime corporis dolorum voluptate eum unde! omnis officiis! Maxime corporis dolorum voluptate eum unde!
          </p>
          <form
            className="mt-8 max-w-xl mx-auto"
          >
            <div className="flex">
              <input
                type="text"
                name="flightNumber"
                placeholder="Enter Trip Name or Number"
                className="border-e-0 h-[50px] px-4 border dark:border-muted-foreground bg-white rounded-sm rounded-e-none text-muted-foreground ring-0 ring-transparent outline-none !outline-0 !outline-transparent w-full"
              />
              <Button
                className="rounded-sm rounded-s-none h-[50px] w-1/4 font-medium text-lg"
                type="submit"
              >
                Subscribe
              </Button>
            </div>
          </form>
        </div>

      </main>
      <div className="mt-8">
        <Footer />
      </div>
    </section>
  );
}
