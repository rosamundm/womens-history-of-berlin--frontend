import React from "react";
import Footer from "../layout/Footer";

export default function FaqPage() {
  return (
    <div class="container p-8 bg-white">
      <div class="p-6 bg-violet-100 rounded-lg">
        <div
          className="eponym-basic-info"
          class="sm:p-2.5 md:p-5 lg:p-5 sm:text-lg md:text-2xl lg:text-2xl bg-violet-100"
        >
          <div class="p-5 px-2.5">
            <div class="text-4xl py-4">
              There's a famous Berlin street named after a princess that I can't
              find on here. Why?
            </div>
            <p class="pb-2.5 sm:text-left md:text-justify lg:text-justify">
              Since there are so many such streets (among them Luisenstraße,
              Sophienstraße, and a surprising number of instances of
              Kaiserin-Augusta-Straße), and I have very limited time to work on this project, I 
              have decided not to prioritise them. The reason is that in general, I prefer not 
              to glorify nobility, and instead would like to focus my efforts on ordinary people 
              who earned their recognition. I especially aim to honour those who were 
              persecuted or killed for some aspect of their beliefs or identity.
            </p>
            <p class="pb-2.5 sm:text-left md:text-justify lg:text-justify">
              For the people I <i>do</i> profile, hopefully it goes without
              saying that I don't necessarily agree with every single thing they
              stood for.
            </p>
            <div class="text-4xl py-4">
              I see a street missing. Shall I point this out to you?
            </div>
            <p class="pb-2.5 sm:text-left md:text-justify lg:text-justify">
              It's very possibly already on my to-do list, but: yes, feel free!
              If you can provide some interesting sources about the person's
              story, even better.
            </p>
            <div class="text-4xl py-4">
              Why are you using the names of countries that didn't exist at that
              point, or that no longer exist?
            </div>
            <p class="pb-2.5 sm:text-left md:text-justify lg:text-justify">
              Hold on tight, this will be long...
            </p>
            <p class="pb-2.5 sm:text-left md:text-justify lg:text-justify">
              Many of the people featured here were born in places
              like Prussia. The concept of a nation can be a complex one, but I decided early 
              on in the project to refer to cities as they are in the present day. For instance,
              what was then <i>Schwiebus, Prussia</i> will be called <i>Świebodzin, Poland</i>{" "}
              here — the modern country and endonym.
            </p>
            <p class="pb-2.5 sm:text-left md:text-justify lg:text-justify">
              The exception is using the widespread English name where it's
              available, e.g. <i>Vienna</i> and not <i>Wien</i>. My project is
              in English and so I don't want to overcomplicate things by having
              to make decisions like whether I would call it{" "}
              <i>Schwiebus, Preußen</i> (sticking to all German and thus
              presupposing an imperial German lens on the place, as well as the
              reader's knowledge of the German names) or{" "}
              <i>Schwiebus, Prussia</i> (German/English mix, illogical and
              pointless for my audience).
            </p>
            <p class="pb-2.5 sm:text-left md:text-justify lg:text-justify">
              However, an exception to this, in turn, is for cases of those who
              perished in concentration camps: using the modern name plus the
              better-known German name in brackets, e.g.{" "}
              <i>Terezín (Theresienstadt), Czech Republic</i>. I want to nod to
              its current location but I feel it is unethical to erase the fact
              the person was murdered by Nazis in this repugnant, systematic
              way.
            </p>
            <p class="pb-2.5 sm:text-left md:text-justify lg:text-justify">
              To take a current example: many Ukrainians, if not most, are asking 
              the world to refer to their capital city as <i>Kyiv</i> (Ukrainian transliteration) 
              and not <i>Kiev</i> (Russian transliteration). Although both languages
              are widely spoken in Ukraine, the official language — the one that's 
              unique to this culture, which in turn has centuries of ongoing history of being
              repressed by the other culture — takes precedent.
            </p>
            <p class="pb-2.5 sm:text-left md:text-justify lg:text-justify">
              The concept of a nation can be a complex one, but if you're that
              interested in the history of a place where a certain figure died
              or was born, the internet is your oyster.
            </p>
            <div class="text-4xl py-4">
              What about non-binary or genderfluid people?
            </div>
            <p class="pb-2.5 sm:text-left md:text-justify lg:text-justify">
              In light of the political climate, I want
              to make it crystal clear that I fully support you.
            </p>
            <p class="pb-2.5 sm:text-left md:text-justify lg:text-justify">
              As much as I would prefer not adhering to a gender binary in my work, as
              far as I'm aware, none of the figures I've read about so far have
              been anything other than cis women (on that note, I'll add that if
              I do come across any trans women, they will obviously be treated
              as women).
            </p>
            <p class="pb-2.5 sm:text-left md:text-justify lg:text-justify">
              This could change at any time during my research, and in that
              case, I guess I would rename the project. If you have any ideas
              for names that open the project up to gender-expansiveness, get in
              touch.
            </p>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
