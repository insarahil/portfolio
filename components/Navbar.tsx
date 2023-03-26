import React, { FunctionComponent, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavItem: React.FunctionComponent<{
  activeItems: string;
  setActiveItem: Function;
  name: string;
  route: string;
}> = ({ activeItems, setActiveItem, name, route }) => {
  return activeItems !== name ? (
    <Link href={route}>
      <span onClick={() => setActiveItem(name)} className="hover:text-green">
        {name}
      </span>
    </Link>
  ) : null;
};

function Navbar() {
  const [activeItems, setActiveItem] = useState<string>("");
  const { pathname } = useRouter();
  useEffect(() => {
    if (pathname === "/") setActiveItem("About");
    if (pathname === "/projects") setActiveItem("Projects");
    if (pathname === "/resume") setActiveItem("Resume");
  }, []);
  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="text-2xl font-bold border-b-4 text-green border-green">
        {activeItems}
      </span>
      <div className="flex space-x-5 text-lg ">
        <NavItem
          activeItems={activeItems}
          setActiveItem={setActiveItem}
          name="About"
          route="/"
        />
        <NavItem
          activeItems={activeItems}
          setActiveItem={setActiveItem}
          name="Projects"
          route="/projects"
        />
        <NavItem
          activeItems={activeItems}
          setActiveItem={setActiveItem}
          name="Resume"
          route="/resume"
        />
      </div>
    </div>
  );
}

export default Navbar;
