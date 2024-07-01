"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { GitHubIcon, GoogleIcon } from "@/components/icons/icons";
import { Button } from "@/components/ui/button";
interface CardWrapperProps {
  label: string;
  title: string;
  href: string;
  linklabel: string;
  children: React.ReactNode;
}

const CardWrapper = ({
  label,
  title,
  href,
  linklabel,
  children,
}: CardWrapperProps) => {
  return (
    <Card className="xl:w-1/3 md:w-1/2  shadow-lg">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{label}</CardDescription>
      </CardHeader>
      <Separator className="mb-3" />
      <CardContent>{children}</CardContent>
      <div className="grid sm:grid-cols-2 gap-4 px-6 mb-4">
        <Button variant="outline" className="flex gap-4">
          <GoogleIcon />
          <span>Sign in with Google</span>
        </Button>

        <Button variant="outline" color="secondary">
          <GitHubIcon />
          <span>Sign in with GitHub</span>
        </Button>
      </div>
      <Separator />
      <CardFooter>
        <Link href={href} className="underline text-sm mx-auto mt-4">
          {linklabel}
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
