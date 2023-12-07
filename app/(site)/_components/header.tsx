"use client";

import { Button } from "@/components/ui/button";
import React from "react";

const Header = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-6xl sm:text-8xl md:text-6xl font-bold">
        Page not found
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa numquam,
        pariatur totam reprehenderit deleniti ut harum, incidunt et mollitia id
        earum voluptatem.
      </p>
      <Button variant="destructive" className="text-2xl size-lg h-20">
        Go back home
      </Button>
    </div>
  );
};

export default Header;
