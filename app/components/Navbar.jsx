import Link from "next/link";

const Navbar = () => {
  const navigation = [
    { name: "Movies", href: "/movies" },
    { name: "TV Shows", href: "/tv-shows" },
  ];
  return (
    <nav classname="mb-20">
      <div>
        <button>Logo</button>
        <div>
          {navigation.map((link) => (
            <ul>
              <Link key={link.name} href={link.href}>
                {link.name}
              </Link>
            </ul>
          ))}
        </div>

        <button>Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
