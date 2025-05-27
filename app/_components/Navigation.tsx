import Link from "next/link";

const navigation = ["About", "Operations" /*  "Philanthropy", "Contact" */];

function Navigation() {
  return (
    <ul className="hidden md:items-center md:gap-11 md:text-base lg:text-lg font-normal md:flex">
      {navigation.map((item, i) => (
        <li key={i}>
          <Link href={`#${item.toLowerCase()}`}>{item}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;
