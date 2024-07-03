import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Steps from "@/components/Steps";
import { ReactNode } from "react";

const ConfigureLayout = ({children}:{children:ReactNode}) => {
    return (
        <MaxWidthWrapper className="flex-1 flex flex-col">
            <Steps />
            {children}
        </MaxWidthWrapper>
    );
}

export default ConfigureLayout;