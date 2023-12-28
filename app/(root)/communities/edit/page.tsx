import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { fetchUser } from "@/lib/actions/user.actions";
import AccountProfile from "@/components/forms/AccountProfile";
import { OrganizationProfile } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

async function Page() {
 

 

  return (
    <>
      <h1 className='head-text'>Edit Profile</h1>
      <p className='mt-3 text-base-regular text-light-2'>Make any changes</p>

      <section className='mt-12 '>
       <OrganizationProfile  appearance={{baseTheme: dark, 
                                            elements:{
                                                
                                                card:"max-w-[780px] "
                                                
                                              
                                                

       } } }/>
      </section>
    </>
  );
}

export default Page;
