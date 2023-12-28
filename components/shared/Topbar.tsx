"use client";
import { OrganizationSwitcher, SignOutButton, SignedIn} from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Topbar = () => {
  const router=useRouter();
  return (
    <nav className="topbar flex ">
      <Link href="/" className="flex items-center gap-4 ">
        <Image src="/logo.svg" width={30} height={20} alt="logo" />
        <h1 className="text-heading3-bold text-light-1 max-xs:hidden">
          ShareSpace
        </h1>
      </Link>
      <div>
        <div className="flex items-center gap-1">
          <div className="block md:hidden">
            <SignedIn>
              <SignOutButton signOutCallback={() => router.push("/sign-in")}>
                <div className="flex cursor-pointer">
                  <Image
                    src="/assets/logout.svg"
                    width={24}
                    height={24}
                    alt="logout"
                  />
                </div>
              </SignOutButton>
            </SignedIn>
          </div>
        
          <OrganizationSwitcher appearance={{
            baseTheme:dark,
            elements: {
              organizationSwitcherTrigger:'py-2 px-2'
            }
          }}/>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
