import Link from "next/link";

export function MobileMenuItem({
  href,
  label,
  closeMenu,
  nested = false,
}: {
  href: string;
  label: string;
  closeMenu: () => void;
  nested?: boolean;
}) {
  return (
    <Link
      href={href}
      onClick={closeMenu}
      className={`block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-purple-100 ${
        nested ? "ml-4 text-sm" : ""
      }`}
    >
      {label}
    </Link>
  );
}
