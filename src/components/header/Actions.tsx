import styled from "@emotion/styled";
import {cn} from "../../@/lib/utils";
import {ChevronRight} from "lucide-react";
import AnimatedGradientText from "../../@/components/magicui/animated-gradient-text";
import React from "react";
import CTA from "../helper_utils/CTA";

const Actions = () => {
    return(
        <StyledActions>
            <CTA text="Training" shiny={false} area="training"/>
            <CTA text="Roster" shiny={false} area="roster"/>
            <CTA text="Jugend U13/16" shiny={false} area="jugend"/>
        </StyledActions>
    );
}

export default Actions;

const StyledActions = styled.div`
    margin-top: 2rem;   
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: auto 8rem 7rem 11rem auto;
    grid-template-areas: ". training roster jugend .";
    
`;