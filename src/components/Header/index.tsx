import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navbar() {
  return (
    <>
      <div className="shadow">
        <DesktopNav />
        <MobileNav />
      </div>

    </>
  );
}
