import React from "react";
import Footer from "../layout/Footer";

export default function PhotoCreditsPage() {

    return (
        <div class="container p-8 bg-slate-100">

          <div class="p-6 bg-sky-100">

              <div className="eponym-basic-info" class="sm:p-2.5 md:p-5 lg:p-5 sm:text-lg md:text-2xl lg:text-2xl sm:text-left md:text-justify lg:text-justify g-sky-100">

                <div class="p-5 px-2.5">
                    <div class="text-4xl py-4">
                        District Grid
                    </div>
                    <ul>
                        <li class="pb-2.5 italic">
                            All images stated as free to use under the Unsplash licence.
                        </li>
                        <li class="pb-2.5">
                            Charlottenburg-Wilmersdorf: <a href="https://unsplash.com/photos/GuJTk6o14YE">Wesley van 't Hart</a>
                        </li>
                        <li class="pb-2.5">
                            Friedrichshain-Kreuzberg: <a href="https://unsplash.com/photos/ufvlq9PQXd8">Samuel Svec</a>
                        </li>
                        <li class="pb-2.5">
                            Lichtenberg: <a href="https://unsplash.com/photos/vzIspm3hqio">Felix Neudecker</a>
                        </li>
                        <li class="pb-2.5">
                            Marzahn-Hellersdorf: <a href="https://unsplash.com/photos/obvV51RPhCM">Rick Jack</a>
                        </li>
                        <li class="pb-2.5">
                            Mitte: <a href="https://unsplash.com/photos/BsG6EmYNf7E">Wladislaw Peljuchno</a>
                        </li>
                        <li class="pb-2.5">
                            Neukölln: <a href="https://unsplash.com/photos/p4LKCBWWQIE">Kadir Celep</a>
                        </li>
                        <li class="pb-2.5">
                            Pankow: <a href="https://unsplash.com/photos/DoMEXHiQMZw">Jonas Denil</a>
                        </li>
                        <li class="pb-2.5">
                            Reinickendorf: <a href="https://unsplash.com/photos/QGSO362uJlc">Marina Juli</a>
                        </li>
                        <li class="pb-2.5">
                            Spandau: <a href="https://unsplash.com/photos/KTFFklZTvao">Meshaal Al Hajali</a>
                        </li>
                        <li class="pb-2.5">
                            Steglitz-Zehlendorf: <a href="https://unsplash.com/photos/p5m27crWPdQ">Leon Seibert</a>
                        </li>
                        <li class="pb-2.5">
                            Tempelhof-Schöneberg: <a href="https://unsplash.com/photos/x7c5AgzyQgg">Michael Getreu</a>
                        </li>
                        <li class="pb-2.5">
                            Treptow-Köpenick: <a href="https://unsplash.com/photos/CDYjhgVDrBM">Ahma</a>
                        </li>
                    </ul>
                    
                </div>

              </div>
   
          </div>

          <div>
            <Footer/>
          </div>


        </div>

    )

};