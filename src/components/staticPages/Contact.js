import React from "react";
import Footer from "../layout/Footer";

export default function ContactPage() {

    return (
        <div class="container p-8 bg-white">

          <div class="p-6 bg-violet-100 rounded-lg">

              <div className="eponym-basic-info" class="sm:p-2.5 md:p-5 lg:p-5 sm:text-lg md:text-2xl lg:text-2xl sm:text-left md:text-justify lg:text-justify bg-violet-100">

                <div class="p-5 px-2.5">
                    <div class="text-4xl py-4">
                        Send questions and concerns to:
                    </div>
                    <p class="pb-2.5">

                        rosamund at posteo dot de
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