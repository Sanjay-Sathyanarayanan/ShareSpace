import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import '../globals.css';
import type { Metadata } from "next";
import { dark } from "@clerk/themes";

export const metadata: Metadata = {
    title: 'ShareSpace',
    icons:{
      icon:'/logo.svg'
    },
    description: 'ShareSpace is a social networking application designed to be a vibrant community where users can freely express their ideas, engage in meaningful discussions through threads, and connect with like-minded indviduals',
  }

const inter= Inter({subsets:["latin"]})
export default function RootLayout (
    { children } : { children:React.ReactNode }){

        return(
            <ClerkProvider>
                <html>
                    <body className={`${inter.className} bg-dark-1`}>
                        {children}
                    </body>
                </html>
            

            </ClerkProvider>
        )

}