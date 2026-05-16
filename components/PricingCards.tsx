import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { ArrowRight, CheckCircle, Clock } from 'lucide-react'
import { Badge } from './ui/badge'

interface PricingCards {
      name: string,
      classesPerWeek: number,
      duration: string,
      usaPrice: number,
      ukPrice: number,
      popular?: boolean,
      premium?: boolean,
      description: string,
      features: string[]
}

interface PricingCardsProps {
  pricingPlans: PricingCards[];
};

const PricingCards = ({ pricingPlans }: PricingCardsProps) => {
  return (
            <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 animate-fade-in-up animation-delay-400">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                plan.popular
                  ? "border-2 border-primary bg-gradient-to-br from-white to-primary/5"
                  : plan.premium
                    ? "border-2 border-accent bg-gradient-to-br from-white to-accent/5"
                    : "bg-white hover:shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-primary text-white text-center py-2 text-sm font-semibold">
                  🌟 Most Popular
                </div>
              )}
              {plan.premium && (
                <div className="absolute top-0 left-0 right-0 bg-accent text-white text-center py-2 text-sm font-semibold">
                  👑 Premium Program
                </div>
              )}

              <CardHeader className={`text-center ${plan.popular || plan.premium ? "pt-12" : "pt-6"}`}>
                <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>

                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">${plan.usaPrice}</div>
                      <div className="text-xs text-muted-foreground">USA (USD)</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">£{plan.ukPrice}</div>
                      <div className="text-xs text-muted-foreground">UK (GBP)</div>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">per month</div>
                </div>

                <div className="flex items-center justify-center gap-4 mt-4">
                  <Badge variant="outline" className="border-primary/30">
                    <Clock className="w-3 h-3 mr-1" />
                    {plan.classesPerWeek}/week
                  </Badge>
                  <Badge variant="outline" className="border-primary/30">
                    {plan.duration}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="pt-0 flex flex-col">
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex-grow max-h-min" />
                <Link href="/enroll">
                  <Button
                    className={`w-full transition-all duration-300 ${
                      plan.popular
                        ? "bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl"
                        : plan.premium
                          ? "bg-accent hover:bg-accent/90 shadow-lg hover:shadow-xl"
                          : "bg-primary/10 text-primary hover:bg-primary hover:text-white border border-primary/20"
                    }`}
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
  )
}

export default PricingCards