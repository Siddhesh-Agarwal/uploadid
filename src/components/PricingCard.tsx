"use client";

import { PricingCardProps } from "@/types/cards";
import { Button } from "./ui/button";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function PricingCard(data: PricingCardProps) {
  return (
    <Card className="relative">
      {!data.isDisabled && data.isPopular && (
        <div className="px-3 py-1 w-fit text-sm text-white bg-gradient-to-r from-pink-500 to-purple-500 z-10 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Popular
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          {data.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mt-4 text-center text-muted-foreground">
          <span className="text-4xl font-bold">{data.price}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full font-bold bg-primary"
          onClick={() => {
            if (data.isDisabled) {
              toast.warning("This pricing model is currently not available.");
            } else {
              window.location.href = `https://checkout.dodopayments.com/buy/${data.product_id}?redirect_url=${window.location.origin}`;
            }
          }}
        >
          Get Started
        </Button>
      </CardFooter>
    </Card>
  );
}
