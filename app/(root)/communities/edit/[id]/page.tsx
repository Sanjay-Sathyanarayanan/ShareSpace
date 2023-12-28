
import UpdateCommunityBio from "@/components/forms/UpdateCommunityBio";
import { OrganizationProfile } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

async function Page() {
  return (
    <>
      <h1 className="head-text">Edit Community</h1>
      <p className="mt-3 text-base-regular text-light-2">Make any changes</p>
      <div className="mt-4 ">
        <UpdateCommunityBio/>
      </div>

      <section className="mt-8 ">
        <OrganizationProfile
          appearance={{ baseTheme: dark, elements: { card: "max-w-[780px]" } }}
        />
       
      </section>
    </>
  );
}

export default Page;
