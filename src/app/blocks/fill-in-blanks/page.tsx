"use client";
import React, { useState } from "react";
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
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CheckCheckIcon,
  PlusIcon,
  XIcon,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

export default function FillInTheBlanksPage() {
  // State management for text areas
  const [textAreas, setTextAreas] = useState([""]); // Initialize with one text area
  const addTextArea = () => {
    setTextAreas([...textAreas, ""]);
  };
  const removeTextArea = (index: number) => {
    const newTextAreas = [...textAreas];
    newTextAreas.splice(index, 1);
    setTextAreas(newTextAreas);
  };
  const handleTextAreaChange = (index: number, value: string) => {
    const newTextAreas = [...textAreas];
    newTextAreas[index] = value;
    setTextAreas(newTextAreas);
  };

  // State management for tags
  const [tagText, setTagtext] = useState<string>("");
  const [createTags, setCreateTags] = useState(false);
  const openCreateTags = () => {
    setCreateTags(true);
  };
  const closeCreateTags = () => {
    setCreateTags(false);
    setTagtext("");
  };
  const handleTagChange = (value: string) => {
    setTagtext(value);
  };
  const [tags, setTags] = useState<string[]>([]); // Initialize with zero tags
  const addTag = () => {
    setTags([...tags, tagText]);
    setCreateTags(false);
    setTagtext("");
  };
  const removeTag = (index: number) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };

  // State management for toggle
  const [toggle, setToggle] = useState(false);
  const handleToggleChange = (value: boolean) => {
    setToggle(value);
  };

  // State management for hints
  const [hints, setHints] = useState<string[]>([]); // Initialize with zero tags
  const addHint = () => {
    setHints([...hints, ""]);
  };
  const removeHint = (index: number) => {
    const newHints = [...hints];
    newHints.splice(index, 1);
    setHints(newHints);
  };
  const handleHintChange = (index: number, value: string) => {
    const newHints = [...hints];
    newHints[index] = value;
    setHints(newHints);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-20">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Fill in the Blanks</CardTitle>
          <CardDescription>
            Please be aware that if any changes are made to this block, any
            learner data submitted will be invalid, and the user needs to
            reattempt it.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <Accordion
            type="single"
            collapsible
            className="w-full border rounded-md px-6"
          >
            <AccordionItem value="instructions" className="border-0">
              <AccordionTrigger>
                <Label>Instructions</Label>
              </AccordionTrigger>
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
                    Each text box will be considered as a sentence or paragraph
                    and you can add any number of text boxes according to your
                    need by clicking on `Add Text Box`
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Card>
            <CardHeader>
              <Label>
                Description{" "}
                <span className="text-muted-foreground">(Optional)</span>
              </Label>
            </CardHeader>
            <CardContent className="space-y-2">
              <Textarea placeholder="Enter anything you want to make it easier to reference later" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <Label>Text Box </Label>
                <Button
                  variant="outline"
                  className="gap-2 w-fit"
                  onClick={addTextArea}
                  disabled={createTags}
                >
                  <PlusIcon className="size-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            {textAreas.length > 0 && (
              <CardContent>
                <Card className="border-0 shadow-transparent">
                  <CardContent className="p-0 space-y-2 ">
                    {textAreas.map((tag, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Textarea
                          placeholder="Example: Apple is *red* in color. There are *two_books* on the table."
                          key={index}
                          value={tag}
                          onChange={(e) =>
                            handleTextAreaChange(index, e.target.value)
                          }
                        />
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => removeTextArea(index)}
                        >
                          <XIcon />
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </CardContent>
            )}
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <Label>Tags </Label>
                <Button
                  variant="outline"
                  className="gap-2 w-fit"
                  onClick={openCreateTags}
                  disabled={createTags}
                >
                  <PlusIcon className="size-4" />
                </Button>
              </CardTitle>
              {tags.length > 0 && (
                <CardDescription>
                  <div className="w-full flex-wrap flex justify-start items-center gap-2">
                    {tags.map((tag, index) => (
                      <Badge
                        key={index}
                        onClick={() => removeTag(index)}
                        className="gap-2"
                      >
                        {tag}
                        <XIcon className="size-4" />
                      </Badge>
                    ))}
                  </div>
                </CardDescription>
              )}
            </CardHeader>
            {createTags && (
              <CardContent>
                <Card className="border-0 shadow-transparent">
                  <CardContent className="p-0 space-y-2 ">
                    <div className="flex items-center gap-2">
                      <Input
                        type="text"
                        placeholder="Example: apple, red, color, table"
                        onChange={(e) => handleTagChange(e.target.value)}
                      />
                      <Button size="icon" onClick={addTag}>
                        <CheckCheckIcon />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={closeCreateTags}
                      >
                        <XIcon />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            )}
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <Label>Hints </Label>
                <Button
                  variant="outline"
                  className="gap-2 w-fit"
                  onClick={addHint}
                >
                  <PlusIcon className="size-4" />
                </Button>
              </CardTitle>
              <CardDescription className="flex items-center space-x-2">
                <Switch
                  id="toggle-hint"
                  checked={toggle}
                  onCheckedChange={handleToggleChange}
                />
                <Label htmlFor="toggle-hint">
                  {toggle ? "Hide Hints" : "Show Hints"}
                </Label>
              </CardDescription>
            </CardHeader>
            {hints.length > 0 && (
              <CardContent>
                <Card className="border-0 shadow-transparent">
                  <CardContent className="p-0 space-y-2 ">
                    {hints.map((tag, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Input
                          key={index}
                          value={tag}
                          onChange={(e) =>
                            handleHintChange(index, e.target.value)
                          }
                        />
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => removeHint(index)}
                        >
                          <XIcon />
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </CardContent>
            )}
          </Card>
          <Card>
            <CardHeader>
              <Label>Explanation</Label>
            </CardHeader>
            <CardContent className="space-y-2">
              <Textarea placeholder="Enter anything you want to make it easier to reference later" />
            </CardContent>
          </Card>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Alert variant="destructive" className="mt-4">
            Warning : Please make sure that you are giving proper spacing before
            the starting asterisk(*) and after the closing asterisk(*)
          </Alert>
          <Button className="w-full">Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
