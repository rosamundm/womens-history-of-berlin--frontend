import { Link } from "react-router-dom";

function HomepageHeader() {
    return (
       <div class="p-5 py-10 bg-violet-300 rounded-lg shadow">
        <div class="font-serif text-6xl text-center">
            Berliner Frauen:
            <div class="text-4xl py-10">
                a project dedicated to women's legacy on Berlin's streets
                <br></br>
                <span class="text-6xl">
                    <Link to={"/districts/"}>
                    ⟶
                    </Link>
                </span>
            </div>
        </div>
       </div>
    )
};

export default HomepageHeader;
