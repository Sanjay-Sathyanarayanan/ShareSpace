import { currentUser } from "@clerk/nextjs";
import { fetchPosts } from "@/lib/actions/thread.actions";
import { fetchUser } from "@/lib/actions/user.actions";
import ThreadCard from "@/components/cards/ThreadCard";
import { redirect } from "next/navigation";


export default async function Home() {
  
  const result = await fetchPosts(1,30);
  const user = await currentUser();
  const userInfo = await fetchUser(user?.id);
  if (!userInfo?.onboarded) redirect("/onboarding");
  return (
    <>
    <div className="head-text text-light-1 ">
      Home
    </div>
    <section className='mt-9 flex flex-col gap-10'>
    {result?.posts.length === 0 ? (
      <p className='no-result'>No threads found</p>
    ) : (
      <>
        {result?.posts.map((post) => (
          <ThreadCard
            key={post._id}
            id={post._id}
            currentUserId={user?.id || ''}
            parentId={post.parentId}
            content={post.text}
            author={post.author}
            community={post.community}
            createdAt={post.createdAt}
            comments={post.children}
          />
        ))}
      </>
    )}
  </section>
  </>
  )
}