import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


export default async function LandingPage() {
  const user = await currentUser();
  if (user) redirect('/home');


  return (
    <section>
      <Navbar />
      <Footer/>
    </section>
  );
}
