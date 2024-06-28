import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

export default function FillInTheBlanksPage() {
  const descriptionForm = useForm;
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-20">
      <Card className="w-full">
        <CardHeader>
          <CardDescription>
            <strong>Disclaimer : </strong>Please be aware that if any changes
            are made to this block, any learner data submitted will be invalid,
            and the user needs to reattempt it.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <Label>
            Description{" "}
            <span className="text-muted-foreground">(Optional)</span>
          </Label>
          <Textarea />
          <Alert variant="destructive" className="mt-4">
            Warning : Please make sure that you are giving proper spacing before
            the starting asterisk(*) and after the closing asterisk(*)
          </Alert>
          <Accordion
            type="single"
            collapsible
            className="w-full border rounded-md px-4"
          >
            <AccordionItem value="instructions" className="border-0">
              <AccordionTrigger>Instructions</AccordionTrigger>
              <AccordionContent className="space-y-2">
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Type your text inside this text box and add an asterisk(*)
                    infront and behind the correct word.{" "}
                    <strong>For example: Apple is *red* in color.</strong>
                  </li>
                  <li>
                    If you need to use multiple words as answer, then you should
                    use underscore(_) between the words.{" "}
                    <strong>
                      {" "}
                      For example: There are *two_books* on the table.
                    </strong>
                  </li>
                  <li>
                    Each text box will be considered as a sentence or paragraphs
                    and you can add any number of text boxes according to your
                    need by clicking on `Add Text Box`
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
