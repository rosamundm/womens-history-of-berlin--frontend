import React from "react";
import Footer from "../layout/Footer";

export default function AboutPage() {

    return (
        <div class="container p-8 bg-slate-100">

          <div class="p-6 bg-sky-100">

              <div className="eponym-basic-info" class="p-5 sm:text-lg md:text-2xl lg:text-2xl text-justify bg-sky-100">

                <div class="p-5 px-2.5">
                    <div class="text-4xl py-4">
                        About
                    </div>
                    <p class="pb-2.5">
                        My name is Rosamund. I'm a software developer, writer, and <s>ex-</s>translator originally from the UK.
                    </p>
                    <p class="pb-2.5">
                        I've always been obsessed with maps and streets (even designing my own towns as a kid…) and 
                        since moving to Berlin, Germany in 2014, this has reached a whole new level. Given the multiple layers 
                        of history that distinguish this city, there's quite a bit for me left to uncover.
                    </p>
                    <p class="pb-2.5">
                        I got the idea for this project when I started noticing how many Berlin streets — particularly newer 
                        ones — were named after women. Whenever I looked them up later on, I was usually impressed by their 
                        stories of courage, sacrifice, innovation, and often tragedy. Sadly, it would seem that the majority 
                        of them were relegated to another side of history because I don't hear much about them otherwise, even
                        less so in English-language contexts.
                    </p>
                    <p class="pb-2.5">
                        Some of these figures will ring more bells than others. Even if we don't know exactly what they're 
                        known for, they're part of our daily lives. For instance, anyone who's taken a Sunday stroll from Alexanderplatz 
                        to Kollwitzplatz will have heard of Rosa Luxemburg; she has a whole street and a square. 
                        But they might not be aware of exactly how she shaped Berlin as we know it today.
                    </p>
                    <div class="text-4xl py-4">
                        Context
                    </div>
                    <p class="pb-2.5">
                        In terms of gender, the distribution of Berlin's street names is lopsided. According to <a href="https://web.archive.org/web/20210723104659/https://www.rbb24.de/panorama/beitrag/2020/10/gendergerechte-stadtplanung-gender-mainstreaming-berlin.html">this report</a>, 
                        only 500-600 streets are named after women, compared to some 3,000 named after men. To counter this, a <i>Frauenquote</i> (quota 
                        of streets named after women) is in effect, meaning that any new street that is built must be named after a woman.
                    </p>
                    <p class="pb-2.5">
                        After the Berlin Wall fell, swathes of vacant land sprung up not only along the parts where it had once divided the city, 
                        but also in spaces where decrepit GDR-era buildings had been knocked down. Since then, rapid development and the resulting 
                        permastate of 'becoming and never being' — according to art critic Karl Scheffler in 1910 — is said to characterise Berlin.
                    </p>
                    <p class="pb-2.5">
                        Within the constraints of this project, the areas where this phenomenon is perhaps most obvious are at Hauptbahnhof (west 
                        of Washingtonplatz) and off Warschauer Straße (around the Mercedes Benz Arena). But, also randomly in a corner of Neukölln 
                        where you probably can't get a flat white with oat milk served to you by a Melburnian! That's the kind of place I'm most interested in.
                    </p>
                    <div class="text-4xl py-4">
                        Transparency
                    </div>
                    <p class="pb-2.5">
                        These pages are a work in progress and it will take a while before the content aspect is even close to finished. However, it was important for me 
                        to publish the website before it was complete, because I'm not sure exactly how long it's going to take. It's perfectly usable even if not every entry is there. 
                    </p>
                    <p>
                        Here is my process:
                    </p>
                    <ul class="px-6 py-4 list-disc">
                        <li class="py-4">
                            Use a combination of web scraping and manual research to identify the relevant streets, women linked to them, and core information such as location.
                            Document these in a spreadsheet and mark to-be-visited streets on a private (for now) map service.
                        </li>
                        <li class="py-4">
                            If I'm going somewhere in the city, check map for whether there are any streets nearby I can take a quick detour to for a photo; otherwise, do an expedition in my free time.
                        </li>
                        <li  class="py-4">
                            When I have taken a photo of the street sign, upload it to an external image hosting service.
                        </li>
                        <li class="py-4">
                            Record these entries in a CMS with information gleaned from the spreadsheet, add photo; put together a 
                            summarised biography of the person. <b>Unless specified otherwise, the information that I add to the pages is in the public domain & translations from German quotations are my own.</b>
                        </li>
                        <li class="py-4">
                            Do final checks, mark it as done, then it becomes available to view on the website.
                        </li>
                    </ul>
                        
                    <p class="pb-2.5">
                       As you can see, quite a lot of labour goes into this... and that's not even mentioning actually engineering the website itself. So, if you appreciate my
                       work and would like to show a token of appreciation, you're welcome to <a href="https://ko-fi.com/rosamund">buy me a coffee</a>.
                    </p>

                </div>

              </div>
   
          </div>

          <div>
            <Footer/>
          </div>

        </div>

    )

};