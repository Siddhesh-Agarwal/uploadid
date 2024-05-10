// Pricing Model
// Monthly - ₹250
// half yearly - ₹1400
// Yearly - ₹2500

import { Button } from "@/components/ui/button";
import { FeatureCardProps, PricingCardProps } from "@/types/cards";
import {
    FaBookBookmark,
    FaBolt,
    FaBuildingLock,
    FaGaugeSimpleHigh,
    FaFileShield,
    FaFileImport,
} from "react-icons/fa6";

function PricingCard({ title, price, isPopular }: PricingCardProps) {
    return (
        <div className="relative flex flex-col p-6 bg-white dark:bg-slate-900 shadow-lg rounded-lg justify-between transition-colors hover:bg-gray-100 dark:hover:bg-slate-800 border border-gray-300 dark:border-gray-700">
            {
                isPopular && (
                    <div className="px-3 py-1 w-fit text-sm text-white bg-gradient-to-r from-pink-500 to-purple-500 z-10 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        Popular
                    </div>
                )
            }
            <div>
                <h3 className="text-2xl font-bold text-center">{title}</h3>
                <div className="mt-4 text-center text-muted-foreground">
                    <span className="text-4xl font-bold">{price}</span>
                </div>
            </div>
            <div className="mt-6">
                <Button className="w-full">Get Started</Button>
            </div>
        </div>
    )
}

function FeatureCard({ title, description, Icon }: FeatureCardProps) {
    return (
        <div className="relative flex p-4 gap-4 bg-white dark:bg-slate-900 shadow-sm rounded-lg transition-colors hover:bg-blue-100 dark:hover:bg-slate-800 border border-gray-300 dark:border-gray-700">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 dark:bg-blue-400">
                <Icon className="h-6 w-6 text-primary text-blue-500 dark:text-blue-700" />
            </div>
            <div className="flex flex-col">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-gray-500 dark:text-gray-400 line-clamp-1 text-ellipsis">
                    {description}
                </p>
            </div>
        </div>
    )
}


const pricingCardData: PricingCardProps[] = [
    {
        title: "Basic",
        price: "₹250 / month",
    },
    {
        title: "Half Yearly",
        price: "₹1400 / 6 months",
        isPopular: true,
    },
    {
        title: "Yearly",
        price: "₹2500 / year",
    },
]

const FeatureCardData: FeatureCardProps[] = [
    {
        title: "Supercharged Collaboration",
        description: "Enables collaboration with other users within the organization.",
        Icon: FaBolt,
    },
    {
        title: "Blazing-Fast Speeds",
        description: "Get up and running in no time with our lightning-fast speeds.",
        Icon: FaGaugeSimpleHigh,
    },
    {
        title: "Real-time Record Management",
        description: "Enables the Management data in real-time.",
        Icon: FaBookBookmark,
    },
    {
        title: "Data Integrity Measures",
        description: "Ensures data integrity and security with our state-of-the-art security.",
        Icon: FaFileShield,
    },
    {
        title: "Enterprise-Grade Security",
        description: "Rest easy with our robust enterprise-grade security measures.",
        Icon: FaBuildingLock,
    },
    {
        title: "Report Generation",
        description: "Export your data as an easy-to-read PDF for auditing purposes.",
        Icon: FaFileImport,
    }
]

export default function PricingPage() {
    return (
        <div className="w-full py-12 flex flex-col">
            {/* Princing  */}
            <section className="w-full flex flex-col justify-center my-16" id="pricing">
                <h1 className="block text-5xl font-bold text-center">
                    Pricing
                </h1>
                <div className="container block px-4 md:px-6">
                    <div className="grid grid-cols-1 gap-3 mt-8 md:grid-cols-3 md:gap-5">
                        {
                            pricingCardData.map((card: PricingCardProps, index: number) => (
                                <PricingCard key={index} {...card} />
                            ))
                        }
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="w-full flex flex-col justify-center mb-16" id="features">
                <div className="space-y-2 text-center">
                    <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                        Product Features
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Unlock Your Potential</h2>
                    <p className="max-w-[900px] text-gray-500 text-center dark:text-gray-400 mx-auto">
                        Our product offers a suite of powerful features to help you achieve your goals. Explore what it can do for
                        you.
                    </p>
                </div>
                <div className="container block px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 mt-8">
                        {
                            FeatureCardData.map((card: FeatureCardProps, index: number) => (
                                <FeatureCard key={index} {...card} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}