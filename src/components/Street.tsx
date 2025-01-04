// @ts-nocheck

import { FC, useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import parse from 'html-react-parser';
import Footer from './layout/Footer';
import { Street } from '../types';
import { getFunctionsUrl } from '../helpers';  // todo: abs import
import { streetLoadingText } from '../texts';

import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container, Divider, Typography } from '@mui/material';

import BaseTheme from './layout/theme/BaseTheme'
import PageHeader from './layout/PageHeader'
import PageTextBox from './layout/PageTextBox'

const StreetInstance: FC<PageThemeProps> = ({ ...props }) => {

  let { street_slug } = useParams();
  const streetSlug = street_slug;
  const [streetInstance, setStreetInstance] = useState<Street>(null);

  const getStreet = async () => {
    try {
      const response = await axios.get(
        `${getFunctionsUrl()}get-street-instance?slug=${streetSlug}`
      );
      setStreetInstance(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getStreet();
  }, [streetSlug]);

    return (
      <BaseTheme {...props}>
        <CssBaseline enableColorScheme />

        <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        {streetInstance ? 
          <div>
            <Box
              component="img"
              sx={{
                height: '40%',
                width: '40%',
                // maxHeight: { xs: 233, md: 167 },
                // maxWidth: { xs: 350, md: 250 },
              }}
              alt={streetInstance.data.name}
              src={streetInstance.data.image}
            />
            <PageTextBox text={parse(streetInstance.data.eponym_description)} />
          </div>
        :
            <PageTextBox text={streetLoadingText} />
        }
        </Container>
        <Divider />
        <Footer />
      </BaseTheme>
  )


  // const unknownInfo = <span class="font-style: italic">unknown</span>;
  // const parsedStreetDescription = parse(streetInstance.data.eponym_description);

  // return (
  //   <div class="container p-8 bg-white">
  //     <div className="street-detail" class="p-6 bg-violet-100 rounded-lg">
  //       <div className="street-image">
  //         <img src={streetInstance.data.image} alt={streetInstance.data.name} />
  //       </div>

  //       <div
  //         className="eponym-basic-info"
  //         class="sm:p-2.5 md:p-5 lg:p-5 bg-violet-100"
  //       >
  //         <div class="text-4xl">
  //           <a href={streetInstance.data.map_link} class="font-bold">
  //             {streetInstance.data.name}{" "}
  //           </a>
  //           in <b>{streetInstance.data.district}</b> is named after{" "}
  //           <span class="font-extrabold">
  //             {streetInstance.data.eponym_name}
  //           </span>
  //         </div>

  //         <div class="text-base p-5">
  //           Born:{" "}
  //           {streetInstance.data.eponym_date_of_birth ? (
  //             <span class="font-semibold">
  //               {streetInstance.data.eponym_date_of_birth}
  //             </span>
  //           ) : (
  //             unknownInfo
  //           )}{" "}
  //           in{" "}
  //           {streetInstance.data.eponym_place_of_birth ? (
  //             <span class="font-semibold">
  //               {streetInstance.data.eponym_place_of_birth}
  //             </span>
  //           ) : (
  //             unknownInfo
  //           )}{" "}
  //           <br></br>
  //           Died:{" "}
  //           {streetInstance.data.eponym_date_of_death ? (
  //             <span class="font-semibold">
  //               {streetInstance.data.eponym_date_of_death}
  //             </span>
  //           ) : (
  //             unknownInfo
  //           )}{" "}
  //           in{" "}
  //           {streetInstance.data.eponym_place_of_death ? (
  //             <span class="font-semibold">
  //               {streetInstance.data.eponym_place_of_death}
  //             </span>
  //           ) : (
  //             unknownInfo
  //           )}
  //         </div>

  //         <div
  //           className="eponym-description"
  //           class="p-4 sm:text-lg md:text-2xl lg:text-2xl sm:text-left md:text-justify lg:text-justify"
  //         >
  //           {parsedStreetDescription}
  //         </div>

  //         <div class="p-4">
  //           <div class="text-xl">
  //             <b>Tagged:</b>
  //             {streetInstance.data.tags.map((tag) =>
  //               tag == "[]" ? (
  //                 <span> No tags yet</span>
  //               ) : (
  //                 <div class="text-xl">
  //                   <span key={tag}>
  //                     <Link to={`/tags/${tag}`}>{tag}</Link>
  //                   </span>
  //                 </div>
  //               ),
  //             )}
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     <div>
  //       <Footer />
  //     </div>
  //   </div>
  // );
}

export default StreetInstance;