// import StreetSearch from "./StreetSearch";
import { Link } from "react-router-dom";
import HomepageHeader from "./layout/HomepageHeader";

export default function HomePage() {
  return (

    <div className="landing" class="px-20 justify-center justify-self-center max-w-4xl m-auto">

      <HomepageHeader />

        <div className="search">

          <div className="get-started" class="px-5 justify-center text-2xl">
            <Link to={"/districts/"}>
              Get started ⟶
            </Link>
          </div>

           {/* <div className="street-search" class="py-10 font-sans text-center">
             <StreetSearch />
           </div> */}

        </div>

    </div>

  )
};