import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import parse from 'html-react-parser';
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
            const response = await fetch(
                `/.netlify/functions/get-text-page?slug=${pageSlug}`,
                {method: "GET"}
            ).then((response) => response.json());
            setPage(response);
        })();
        
    }, [pageSlug])

    if (!page) {
        return <div>Loading...</div>;
    }

    const parsedText = parse(page.data.body)

    return (

        <div className="container p-8 bg-slate-100">

            <div className="navbar">
                <Navbar />
            </div>

            <div className="p-6 text-6xl">
                {page.data.title}
            </div>

            <div className="p-6 text-2xl">
                {parsedText}
            </div>

        </div>

    )
    


}