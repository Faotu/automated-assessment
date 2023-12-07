"use client";
import Link from "next/link";
import React from "react";

const NavLinks = () => {
  const links = [
    { label: "About" },
    { label: "Prices" },
    {
      label: "Pages",
      submenu: true,
      sublinks: [
        {
          Head: "Menu",
          sublink: [
            { label: "Home", link: "/" },
            { label: "About", link: "/about" },
            { label: "Blog", link: "/blog" },
            { label: "Blog posts", link: "/blogpost" },
            { label: "Plan", link: "/plan" },
            { label: "Plan Single", link: "/plansingle" },
            { label: "Register", link: "/register" },
          ],
        },
      ],

      Head: "Utility Pages",
      sublink: [
        { label: "Styleguide", link: "/" },
        { label: "Password protected", link: "/protected" },
        { label: "404 Not found", link: "/notfound" },
        { label: "Lincenses", link: "/lincenses" },
        { label: "Changelog", link: "/log" },
        { label: "Browse More Template", link: "/more" },
      ],
    },
    { label: "Cart(0)" },
  ];

  return (
    <>
      {links.map((link) => (
        <div>
          <div>
            <h1 className="hover:text-red-500 cursor-pointer">{link.label}</h1>
            {link.submenu && (
              <div>
                <div>
                  <div>
                    {link.sublinks.map((mysublinks) => (
                      <div>
                        <h1 className="text-xl font-semibold ">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink) => (
                          <Link href={slink.link}>{slink.label}</Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
