import DistrictGrid from "./DistrictGrid.js";
import Footer from "./layout/Footer.js";

export default function DistrictBrowser() {

    return (

        <div className="landing" class="px-500 justify-center justify-self-center max-w-4xl m-auto">

            <div className="district-grid" class="py-10 font-sans text-center">
                <DistrictGrid />
            </div>
 
            <div>
                <Footer/>
            </div>

        </div>
    )
};