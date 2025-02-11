import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type PricingCardProps = {
    title: string;
    price: string;
    isPopular?: boolean;
}

export type FeatureCardProps = {
    title: string;
    description: string;
    Icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
}
