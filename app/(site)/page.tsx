import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./_components/header";
import Heroes from "./_components/heroes";
import Navbar from "./_components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="min-h-full flex flex-col">
        <div className="flex flex-row items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
          <Header />
          <Heroes />
        </div>
      </div>
    </div>
  );
}
