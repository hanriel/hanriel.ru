
import Image from "next/image";

export const Logo = ({className = ''}) => {
    return(
        <Image
            className={"dark:invert " + className} 
            src="/hanriel.svg"
            alt="Next.js logo"
            width={200}
            height={20}
            priority
        />
    )
}