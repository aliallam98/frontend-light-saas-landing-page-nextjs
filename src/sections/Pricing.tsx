import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    variant: "default",
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    variant: "secondary",
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    variant: "default",
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];
export default function Pricing() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Pricing
          </h2>
          <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Choose the plan that&apos;s right for you
          </p>
        </div>
        <div className="grid gap-6 mt-12  lg:grid-cols-3 lg:gap-8 ">
          {pricingTiers.map((card, i) => (
            <Card
              className={cn(
                "relative flex flex-col justify-between max-w-[350px] mx-auto w-full select-none ",
                card.inverse && "bg-black text-white",
                !card.popular && "lg:top-10"
              )}
              key={i}
            >
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>
                  <span className="text-3xl font-bold">
                    ${card.monthlyPrice}
                  </span>{" "}
                  /month
                </CardDescription>
                {card.popular && (
                  <span className="absolute top-5 right-5 border border-white/40 p-1 rounded-md">
                    Popular Plan
                  </span>
                )}
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {card.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  variant={"default"}
                  className={cn(
                    "w-full",
                    card.inverse &&
                      "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  )}
                >
                  {card.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
