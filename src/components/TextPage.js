import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./layout/Navbar";

export default function TextPage() {
    let { page_slug } = useParams();
    let pageSlug = page_slug;
    const [page, setPage] = useState(null);

    useEffect(() => {
        if (!pageSlug) {
            return;
        }

        (async () => {
            const response = await fetch(`/textpages/${pageSlug}`);
            const page = await response.json();            
            setPage(page);
        })();
        
    }, [pageSlug])

    if (!page) {
        return <div>Loading...</div>;
    }

    return (

        <div className="container p-8 bg-slate-100">

            <div className="navbar">
                <Navbar />
            </div>

            <div className="p-6 text-6xl">
                {page.title}
            </div>

            <div className="p-6 text-2xl">
                <p dangerouslySetInnerHTML={{ __html:page.body}}></p>
            </div>

        </div>

    )
    


}