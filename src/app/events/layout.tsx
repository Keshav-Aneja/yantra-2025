import Navbar from "@/components/Navbar";
import Footer from "@/sections/footer";
import React from "react";

export default function EventsPageLayout ({
    children
}: {
    children: React.ReactNode
}){
    return (
        <div className={"w-full h-full min-h-screen bg-background"}>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}