import TestimonialCard from "@/cards/TestimonialCard";
import Header from "@/components/common/Header";
import React from "react";

function TestimonialSection() {
  const data = [
    {
      review:
        "Excepteur sint occaecat cupidat non proident sunt in culpam qui the officia the anim id.",
      image: "/images/avatar_1.png",
      name: "Gabe Oswald",
      designation: "Lead Designers @Nike",
    },
    {
      review:
        "Excepteur sint occaecat cupidat non proident sunt in culpam qui the officia the anim id.",
      image: "/images/avatar_2.png",
      name: "Hubert Franck",
      designation: "Lead Designers @Nike",
    },
    {
      review:
        "Excepteur sint occaecat cupidat non proident sunt in culpam qui the officia the anim id.",
      image: "/images/avatar_3.png",
      name: "Quinten Kortum",
      designation: "Lead Designers @Nike",
    },

    {
      review:
        "Excepteur sint occaecat cupidat non proident sunt in culpam qui the officia the anim id.",
      image: "/images/avatar_4.png",
      name: "Benito Noboa",
      designation: "Lead Designers @Nike",
    },

    {
      review:
        "Excepteur sint occaecat cupidat non proident sunt in culpam qui the officia the anim id.",
      image: "/images/avatar_5.png",
      name: "Martín Abasto",
      designation: "Lead Designers @Nike",
    },

    {
      review:
        "Excepteur sint occaecat cupidat non proident sunt in culpam qui the officia the anim id.",
      image: "/images/avatar_6.png",
      name: "Tiontay Carroll",
      designation: "Lead Designers @Nike",
    },
  ];
  return (
    <div>
      <Header title="Testimonials" description="Real Client Reviews" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item) => (
          <TestimonialCard key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
}

export default TestimonialSection;
