import { Link } from "react-router-dom";

function HomepageHeader() {
    return (
       <div class="p-5 py-10 bg-violet-300 rounded-lg shadow text-center">
        <div class="font-serif font-semibold text-6xl pb-4">
            named after women
        </div>
            <div class="text-4xl font-light pb-4 py-10">
                a project dedicated to the legacy of women in berlin's street names
            </div>
            <div class="py-5">
                <Link to={"/districts/"} class="md:px-4">
                    <button class="bg-indigo-800 hover:bg-violet-300 text-white text-xl px-4 py-2 rounded">
                        grid view
                    </button>
                </Link>
                <Link to={"/map/"} class="md:px-4">
                    <button class="bg-indigo-800 hover:bg-violet-300 text-white text-xl px-4 py-2 rounded">
                        map view
                    </button>
                </Link>
            </div>
       </div>
    )
};

export default HomepageHeader;