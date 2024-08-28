import AnimatedGradientText from "../../@/components/magicui/animated-gradient-text";
import {cn} from "../../@/lib/utils";
import {ChevronRight} from "lucide-react";
import AnimatedShinyText from "../../@/components/magicui/animated-shiny-text";

interface CTAProps {
    shiny: boolean,
    text: string,
    area: string,
}

const CTA = ({shiny, text, area} : CTAProps) => {
    return (
        shiny ?
            <div style={{ gridArea: area}}>
                <AnimatedGradientText>
                    <span className={cn(
                        `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-base`,
                    )}>
                        {text}
                    </span>
                    <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"/>
                </AnimatedGradientText>
            </div>
            :
            <div className="z-10 flex items-center justify-center" style={{ gridArea: area }}>
                <div
                    className={cn(
                        "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
                    )}
                >
                    <AnimatedShinyText
                        className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                        <span className="text-base">{text}</span>
                        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"/>
                    </AnimatedShinyText>
                </div>
            </div>
    );
}

export default CTA;