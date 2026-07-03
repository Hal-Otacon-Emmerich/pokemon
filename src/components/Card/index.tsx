import type { CardProps } from "@types/card";
import '@styles/Card.scss';

export default function Card({ children }: CardProps) {
    return (
        <div className="card">
            { children }
        </div>
    )
}