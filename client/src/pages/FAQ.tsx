import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function FAQ() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Frequently Asked Questions
            </Badge>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              How Can We Help You?
            </h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our software solutions.
            </p>
          </div>

          <Card className="border-card-border bg-card">
            <CardContent className="p-12 text-center">
              <h2 className="text-2xl font-semibold text-card-foreground mb-4">
                FAQ Content Coming Soon
              </h2>
              <p className="text-muted-foreground">
                We're preparing comprehensive answers to help you make the most of our software solutions.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}