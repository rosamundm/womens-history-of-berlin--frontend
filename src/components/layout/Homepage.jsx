import Footer from "./Footer";
import HomepageHeader from "./HomepageHeader";
import Map from "../Map";

export default function Homepage() {
  return (
    <div class="container p-8 py-1 bg-white">
      <div class="p-6 bg-violet-100 rounded-lg">
        <div class="p-5 px-2.5">
          <HomepageHeader />
        </div>

        <Map />

        <div class="p-5 px-2.5">
          <p class="pb-2.5 sm:text-lg md:text-2xl lg:text-2xl sm:text-left md:text-justify">
            Here's a topographic representation of the Berlin streets named
            after women. Each green marker contains a link that leads to the page
            telling the story of the street's eponym (opens in a new tab).
          </p>
          <p class="pb-2.5 sm:text-lg md:text-2xl lg:text-2xl sm:text-left md:text-justify">
            The red markers indicate streets that I've yet to take pictures of and write
            descriptions for. Stay tuned!
          </p>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
