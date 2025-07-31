import { Card, CardContent } from "@/components/ui/card";

const WelcomeMessage = () => {
  return (
    <Card className="text-center shadow-md">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-2 text-primary">
          Welcome to Investure
        </h2>
        <p className="text-muted-foreground">
          A minimalist platform built for modern investing.
        </p>
      </CardContent>
    </Card>
  );
};

export default WelcomeMessage;
