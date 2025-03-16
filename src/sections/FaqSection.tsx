"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn, mulishFont } from "@/lib/utils";

export default function FaqSection() {
  const data = [
    {
      question: "How do Loan Work?",
      answer:
        "This website is a platform for users to ask and answer questions.",
    },
    {
      question: "How long does it take to apply for a loan?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
    {
      question: "How long does it take to get a loan?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
    {
      question: "How much can I borrow?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
    {
      question: "How long an I borrow the money for?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
  ];
  return (
    <div className="flex justify-between flex-col md:flex-row items-center gap-10">
      <div className="md:w-[50%]">
        <p
          className={cn(
            mulishFont.className,
            "text-black text-[30px]  md:text-[50px] font-bold"
          )}
        >
          Frequently Asked Question
        </p>
        <p className="text-textPrimary text-[20px]">
          Expandable to keep the page clean while providing details when needed.
        </p>
      </div>

      <div className="w-full md:w-[50%]">
        <Accordion type="single" collapsible>
          {data.map((item) => (
            <AccordionItem value={item.question}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
