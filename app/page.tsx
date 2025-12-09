import Link from "next/link"
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Shield,
  Users,
  TrendingUp,
  Star,
  Sparkles,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Built with performance in mind. Experience blazing fast load times and instant interactions.",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description:
      "Enterprise-grade security features protect your data with industry-leading encryption.",
  },
  {
    icon: Users,
    title: "Collaborative",
    description:
      "Work seamlessly with your team in real-time. Built for modern collaboration.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered",
    description:
      "Leverage cutting-edge AI to automate workflows and boost productivity.",
  },
  {
    icon: TrendingUp,
    title: "Scalable",
    description:
      "Grows with your business. From startup to enterprise, we've got you covered.",
  },
  {
    icon: Star,
    title: "Best-in-Class",
    description:
      "Award-winning platform trusted by thousands of companies worldwide.",
  },
]

const stats = [
  { value: "99.9%", label: "Uptime SLA" },
  { value: "10k+", label: "Active Users" },
  { value: "150+", label: "Countries" },
  { value: "24/7", label: "Support" },
]

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-background to-muted/20 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="container mx-auto">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="mb-4">
              <Sparkles className="mr-1 size-3" />
              Now with AI capabilities
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Build amazing products{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                faster than ever
              </span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground sm:text-xl md:text-2xl">
              The all-in-one platform to design, develop, and deploy
              applications at scale. Join thousands of developers building the
              future.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild className="group">
                <Link href="#signup">
                  Get started for free
                  <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#demo">Watch demo</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-green-600 dark:text-green-500" />
                <span>Free 14-day trial</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-green-600 dark:text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-green-600 dark:text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b bg-muted/30 px-4 py-12 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground sm:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="container mx-auto">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <Badge variant="outline" className="mb-4">
              Features
            </Badge>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Everything you need to succeed
            </h2>
            <p className="text-lg text-muted-foreground">
              Powerful features designed to help you build better products and
              grow your business.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card
                  key={index}
                  className="group transition-all hover:shadow-md"
                >
                  <CardHeader>
                    <div className="mb-2 flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-6" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="border-y bg-muted/20 px-4 py-16 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="flex size-10 items-center justify-center rounded-full border-2 border-background bg-gradient-to-br from-primary to-primary/60 text-xs font-semibold text-primary-foreground"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-4 flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="size-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <blockquote className="mb-4 text-xl font-medium text-foreground sm:text-2xl">
              "This platform has completely transformed how we build and ship
              products. Our team's productivity has increased by 300%."
            </blockquote>
            <div className="text-muted-foreground">
              <p className="font-semibold text-foreground">Sarah Johnson</p>
              <p className="text-sm">CTO, TechCorp Inc.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="container mx-auto">
          <Card className="overflow-hidden border-2">
            <CardContent className="p-0">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <Badge variant="outline" className="mb-4 w-fit">
                    Get Started
                  </Badge>
                  <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Ready to transform your workflow?
                  </h2>
                  <p className="mb-6 text-lg text-muted-foreground">
                    Join thousands of teams already building better products
                    with our platform. Start your free trial today, no credit
                    card required.
                  </p>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button size="lg" asChild className="group">
                      <Link href="#signup">
                        Start free trial
                        <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <Link href="#contact">Contact sales</Link>
                    </Button>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 lg:p-12">
                  <div className="flex h-full flex-col justify-center gap-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-green-600 dark:text-green-500" />
                      <div>
                        <p className="font-semibold text-foreground">
                          14-day free trial
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Full access to all features
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-green-600 dark:text-green-500" />
                      <div>
                        <p className="font-semibold text-foreground">
                          No credit card required
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Start building immediately
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-green-600 dark:text-green-500" />
                      <div>
                        <p className="font-semibold text-foreground">
                          Cancel anytime
                        </p>
                        <p className="text-sm text-muted-foreground">
                          No long-term commitment
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-green-600 dark:text-green-500" />
                      <div>
                        <p className="font-semibold text-foreground">
                          24/7 support
                        </p>
                        <p className="text-sm text-muted-foreground">
                          We're here to help you succeed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 px-4 py-12 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <span className="text-sm font-bold">A</span>
                </div>
                <span className="text-lg font-bold">Acme</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Building the future of software development, one line of code at
                a time.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#features" className="hover:text-foreground">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="hover:text-foreground">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#docs" className="hover:text-foreground">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#about" className="hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#blog" className="hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#careers" className="hover:text-foreground">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#privacy" className="hover:text-foreground">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#terms" className="hover:text-foreground">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#security" className="hover:text-foreground">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Acme Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
