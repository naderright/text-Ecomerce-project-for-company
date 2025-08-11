import { footerData } from "@/constants/Footer";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className= "  container mx-auto px-4 py-10 ">
      <div className="flex flex-col sm:flex-row justify-between items-start  gap-8">

        {/* Project Info */}
        <div>
          <h2 className="text-[1.5rem] text-black font-bold">{footerData.projectName}</h2>
          <p className="text-gray3 mt-2 max-w-[18rem] font-[400] ">{footerData.description}</p>
        </div>

        {/* Right Links */}
        <div >
          <h3 className="font-[500] text-[1rem] text-gray3  mb-3">Links</h3>
          <ul className="space-y-2">
            {footerData.rightLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="hover:text-primary font-[500] transition">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Help Links */}
        <div>
          <h3 className="font-[500] text-[1rem] text-gray3 mb-3">Help</h3>
          <ul className="space-y-2">
            {footerData.helpLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="hover:text-primary font-[500] transition">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-[500] text-[1rem] text-gray3  mb-3">Newsletter</h3>
          <form className="flex  gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className=" py-2 px-0.5 border-b  border-b-black text-black "
            />
            <button
              type="submit"
              className="   border-b border-b-black hover:text-primary transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t  border-gray-200 mt-8 pt-4  text-gray-500 text-sm">
        © {new Date().getFullYear()} {footerData.projectName}. All rights reserved.
      </div>
    </footer>
  );
}
