import { IconType } from "react-icons/lib";

export type PricingCardProps = {
    title: string;
    price: string;
    isPopular?: boolean;
}

export type FeatureCardProps = {
    title: string;
    description: string;
    Icon: IconType;
}