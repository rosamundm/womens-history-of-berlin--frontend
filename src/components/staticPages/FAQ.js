import React from "react";
import Footer from "../layout/Footer";

export default function FaqPage() {

    return (
        <div class="container p-8 bg-slate-100">

          <div class="p-6 bg-sky-100">

              <div className="eponym-basic-info" class="p-5 sm:text-lg md:text-2xl lg:text-2xl bg-sky-100">

                <div class="p-5 px-2.5">
                    
                    <div class="text-4xl py-4">
                        There's a famous Berlin street named after a princess that I can't find on 
                        here, for some reason. Why?
                    </div>
                    <p class="pb-2.5 sm:text-left md:text-justify lg:text-justify">
                        Since there are so many such streets (among them Luisenstraße, Sophienstraße, and a 
                        surprising number of instances of Kaiserin-Augusta-Straße), I have decided not to prioritise 
                        them here. Here is why:
                    </p>
                    <p class="pb-2.5 sm:text-left md:text-justify lg:text-justify">
                        In general, I prefer not to glorify nobility and instead would like to focus my efforts on figures 
                        who earned their recognition. I especially aim to honour those who were persecuted or killed for some 
                        aspect of their beliefs or identity.
                    </p>
                    <p class="pb-2.5 sm:text-left md:text-justify lg:text-justify">
                        Furthermore, most of these empresses and suchlike were part of the Hohenzollern dynasty, which was responsible 
                        for colonial crimes that Germany still does not adequately acknowledge, like the <a href="https://www.dw.com/en/herero-and-nama-dispute-genocide-agreement-with-germany/a-64476907">genocide of the Herero and the Namaqua</a>.
                    </p>
                    <p class="pb-2.5 sm:text-left md:text-justify lg:text-justify">
                        For the people I do profile, hopefully it goes without saying that I don't necessarily agree with every single thing they stood for.
                        Don't @ me about deliberately leaving out people I'm not particularly interested in researching. My website, my rules 🤠
                    </p>
                    <div class="text-4xl py-4">
                        I see a street missing. Shall I point this out to you?
                    </div>
                    <p class="pb-2.5 sm:text-left md:text-justify lg:text-justify">
                        It might already be on my to-do list, but: yes, feel free! If you can provide some interesting sources about the person's 
                        story, even better.
                    </p>
                    <div class="text-4xl py-4">
                        Why are you using the names of countries that didn't exist at that point, or that no longer exist?
                    </div>
                    <p class="pb-2.5 sm:text-left md:text-justify lg:text-justify">
                        That's true, many of the people featured here were born in places like Prussia. I decided early on in the project to refer 
                        to cities as they are in the present day. For instance, what was then <i>Schwiebus, Prussia</i> will be called <i>Świebodzin, Poland</i> here — 
                        the modern country and endonym.
                    </p>
                    <p class="pb-2.5 sm:text-left md:text-justify lg:text-justify">
                        The exception is using the widespread English name where it's available, e.g. <i>Vienna</i> and not <i>Wien</i>. My project is in English 
                        and so I don't want to overcomplicate things by having to make decisions like whether I would call it <i>Schwiebus, Preußen</i> (sticking 
                        to all German and thus presupposing an imperial German lens on the place, as well as the reader's knowledge of the German names) or <i>Schwiebus, Prussia</i> (German/English mix, illogical and pointless for my audience).
                    </p>
                    <p class="pb-2.5 sm:text-left md:text-justify lg:text-justify">
                        Take as an example the fact that many Ukrainians are asking the world to refer to their capital city as <i>Kyiv</i> (Ukrainian transliteration) 
                        and not <i>Kiev</i> (Russian transliteration) outside of those respective languages. Although both languages are widely spoken in Ukraine, they want 
                        the official language — the one that's unique to their culture, which in turn has centuries of ongoing history of being repressed by the other 
                        culture — to take precedent.
                    </p>
                    <p class="pb-2.5 sm:text-left md:text-justify lg:text-justify">
                        The concept of a nation can be a complex one, but if you're that interested in the history of a place where a certain figure died or was 
                        born, the internet is your oyster.
                    </p>
                    <div class="text-4xl py-4">
                        This is sexist!
                    </div>
                    <p class="pb-2.5 sm:text-left md:text-justify lg:text-justify">
                        No.
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