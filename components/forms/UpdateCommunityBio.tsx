"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { useOrganization } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, usePathname, useRouter } from "next/navigation";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { BioValidation } from "@/lib/validations/thread";
import { updateCommunityBio } from "@/lib/actions/community.actions";



function UpdateCommunityBio() {
  const router = useRouter();
  const param = useParams();
  
  console.log( param.id);
  
  const {organization} = useOrganization();
  // console.log('comm',organization);
  
  const form = useForm<z.infer<typeof BioValidation>>({
    resolver: zodResolver(BioValidation),
    defaultValues: {
      bio: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof BioValidation>) => {
   await updateCommunityBio(param.id, values.bio);
    router.push(`/communities/${param.id}`);
  };

  return (
    <Form {...form}>
      <form
        className='mt-10 flex flex-col justify-start gap-10'
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name='bio'
          render={({ field }) => (
            <FormItem className='flex w-full flex-col gap-3'>
              <FormLabel className='text-base-semibold text-light-2'>
                Community Bio
              </FormLabel>
              <FormControl className='no-focus border border-dark-4 bg-dark-3 text-light-1'>
                <Textarea rows={3} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type='submit' className='bg-primary-500'>
          Update Bio
        </Button>
      </form>
    </Form>
  );
}

export default UpdateCommunityBio;