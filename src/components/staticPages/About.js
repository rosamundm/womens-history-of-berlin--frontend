import React from "react";
import Footer from "../layout/Footer";

export default function AboutPage() {

    return (
        <div class="container p-8 bg-slate-100">

          <div class="p-6 bg-sky-100">

              <div className="eponym-basic-info" class="p-5 text-2xl bg-sky-100">

                <div class="p-5 px-2.5">
                    <div class="text-4xl py-2.5">
                        About
                    </div>
                    <p class="pb-2.5">
                        My name is Rosamund. I'm a software developer, writer, and <s>ex-</s>translator originally from the UK.
                    </p>
                    <p class="pb-2.5">
                        I've always been obsessed with maps and streets (even designing my own towns as a kid…) and 
                        since moving to Berlin in 2014, this has reached a whole new level. Given the multiple layers 
                        of history that distinguish this city, there's quite a bit for me left to uncover. I got the 
                        idea for this project when I started noticing how many streets — particularly newer ones — were 
                        named after women. Whenever I looked them up later on, I was often impressed by their stories of 
                        courage, sacrifice, innovation, and often tragedy. However, it would seem that the majority of them 
                        were relegated to another side of history because I don't hear much about them otherwise.
                    </p>
                    <p class="pb-2.5">
                        Some of these figures will ring more bells than others. Even if we don't know exactly what they're 
                        known for, they're part of our daily lives. For instance, anyone who's taken a Sunday stroll from Alexanderplatz 
                        to Kollwitzplatz will have heard of Rosa Luxemburg; she has a whole street and a square. 
                        But they might not be aware of exactly how she shaped Berlin as we know it today.
                    </p>
                    <div class="text-4xl py-2.5">
                        Background
                    </div>
                    <p class="pb-2.5">
                        In terms of gender, the distribution of Berlin's street names is lopsided. According to <a href="https://web.archive.org/web/20210723104659/https://www.rbb24.de/panorama/beitrag/2020/10/gendergerechte-stadtplanung-gender-mainstreaming-berlin.html">this report</a>, 
                        only 500-600 streets are named after women, compared to some 3,000 named after men. To counter this, a <i>Frauenquote</i> (quota 
                        of streets named after women) is in effect, meaning that any new street that is built must be named after a woman.
                    </p>
                    <p class="pb-2.5">
                        After the Berlin Wall fell, swathes of vacant land sprung up not only along the parts where it had once divided the city, 
                        but also in spaces where decrepit GDR-era buildings had been knocked down. The areas where this phenomenon is perhaps most 
                        obvious are at Hauptbahnhof (west of Washingtonplatz) and off Warschauer Straße (around the Mercedes Benz Arena). But, also 
                        randomly in a corner of Neukölln where you probably can't get a flat white with oat milk served to you by a Melburnian! That's 
                        the kind of place I'm most interested in.
                    </p>
                    <div class="text-4xl py-2.5	">
                        Note
                    </div>
                    <p class="pb-2.5">
                        These pages are a work in progress. I wanted to publish the website before it was done, because I'm not sure exactly how long it's
                        going to take me to visit every single street sign and take a photo of it. I've already spent hours figuring out where the streets are, 
                        which women are linked to them, and added them all to a map. That's not to mention all the research and actually engineering this website...
                    </p>
                    <p class="pb-2.5">
                        Unless specified otherwise, the information that I add to the pages is in the public domain.
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