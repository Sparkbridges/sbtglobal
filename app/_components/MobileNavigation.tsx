import Link from "next/link";

const navigation = ["About", "Operations" /* "Philanthropy", "Contact" */];

function MobileNavigation({
  open,
  toggle,
}: {
  open: boolean;
  toggle: () => void;
}) {
  return (
    <div
      className={`md:hidden absolute top-[62px]  transform transition-transform duration-700 ease-in-out left-0 bg-light z-10 w-full py-4  ${
        open ? "translate-y-0" : "-translate-y-[calc(100%+62px)]"
      }`}
    >
      <ul className="px-4 text-center flex flex-col gap-3 mb-4">
        {navigation.map((item, i) => (
          <li key={i} onClick={toggle}>
            <Link href={`#${item.toLowerCase()}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MobileNavigation;
