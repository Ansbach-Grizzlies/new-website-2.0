import React from 'react';
import DotPattern from "../../@/components/magicui/dot-pattern";
import {cn} from "../../@/lib/utils";
import styled from "@emotion/styled";

import GrizzliesLogo from "../../images/grizzlies.png";
import {BorderBeam} from "../../@/components/magicui/border-beam";
import SparklesText from "../../@/components/magicui/sparkles-text";

const Header = () => {
    return (
        <StyledFooter>
            <div
                className="relative flex h-full w-full items-center justify-center overflow-hidden border bg-background p-20 md:shadow-xl rounded-2xl tw-not-footer">
                <p className="z-10 whitespace-pre-wrap text-center text-6xl font-medium tracking-tighter text-black dark:text-white">
                    <SparklesText text="Ansbach Grizzlies" />
                </p>
                <div className="tw-not-picture">asdb</div>
                <DotPattern
                    className={cn(
                        "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                    )}
                />
            </div>
        </StyledFooter>
    );
}

export default Header;

const StyledFooter = styled.div`
    .tw-not-footer {
        background-color: rgba(0, 0, 100, .9);
        
        > p {
            color: white;
        }
        
        > .tw-not-picture {
            width: 20rem;
            height: 20rem;
            position: absolute;
            
            background-image: url(${GrizzliesLogo});
            background-size: contain;
            background-repeat: no-repeat;
            
            opacity: .25;
        }
    }
`