import React from 'react';
import styled from "@emotion/styled";
import {MagicCard} from "../@/components/magicui/magic-card";
import {Typography} from "@mui/material";

const Footer = () => {
    return(
       <FooterStyled>
           <MagicCard className="no-tw-footer"
                      gradientColor="rgba(255, 255, 255, .05)"
                      gradientSize={475}
           >
               <Typography>Ansbach Grizzlies Footer</Typography>
           </MagicCard>
       </FooterStyled>
    );
}

export default Footer;

const FooterStyled = styled.div`
    .no-tw-footer {
        display: grid;
        color: white;
        height: 10rem;
        
        align-items: center;
        justify-items: center;
    }
`

