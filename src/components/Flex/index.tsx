import type { FlexProps } from "@types/flex";
import '@styles/Flex.scss';

export default function Flex({ children }: FlexProps) {
    return (
        <div className="flex">
            { children }
        </div>
    )
}