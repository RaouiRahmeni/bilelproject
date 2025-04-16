"use client";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const accordianData = [
  {
    id: 1,
    title: "Who is Mada for business ?",
    content:
      "Etmaam company was founded in 2008 in the field of business services and direct support for their various sectors. It provides integrated guidelines and solutions to all difficulties and problems that institutions and companies face.",
  },
  {
    id: 2,
    title: "Why chose Mada ?",
    content:
      "If you are looking for speed and a complete privacy in providing services in a perfect manner, Etmaam is your best and perfect option.",
  },
  {
    id: 3,
    title: "What are the types of facilities that Meda provides services for ?",
    content: "Companies, factories, individual establishments.",
  },
  {
    id: 4,
    title:
      "I have a facility in need of management of electronic services on the goverment platforms, do you do that ?",
    content:
      "Yes, Etmaam has a qualified cadre and sophisticated technological systems to manage that.",
  },
  {
    id: 5,
    title: "does Meda have annual sevrvices contracts ?",
    content:
      "Yes, Meda for services is honored during the past period by signing a lot of annual contracts with companies to manage electronic services on the government platforms according to special technological systems. These contracts subject to terms and standards.",
  },
];
const AccordianItem = ({
  title,
  content,
  isExpanded,
  onToggle,
}: {
  title: any;
  content: any;
  isExpanded: any;
  onToggle: any;
}) => (
  <div
    className={`bg-blue-50 rounded-2xl overflow-hidden transition-all duration-500 border ${
      isExpanded ? "max-96 bg-white" : "max-h-20"
    }`}
  >
    <div
      className="flex justify-between items-start p-6 cursor-pointer"
      onClick={onToggle}
    >
      <div className="text-lg tracking-tighter">{title}</div>
      <FaChevronRight
        className={`text-4xl  transition-all duration-500 ${
          isExpanded ? "rotate-90" : ""
        }`}
      />
    </div>
    <div
      className={`px-5 pb-5 overflow-hidden transition-all duration-500 bg-white ${
        isExpanded ? "opacity-100" : "opacity-0"
      }`}
    >
      <div>{content}</div>
    </div>
  </div>
);

const Fqa = () => {
  const [expendedId, setExpendedId] = useState(null);
  const toggleExpend = (id) => {
    setExpendedId(expendedId === id ? null : id);
  };
  return (
    <div className="min-h-screen items-center justify-center w-full bg-gradient-to-r from-indigo-500 to-sky-500">
      <div className="flex flex-col gap-3 max-w-4xl mx-auto text-black ">
        {accordianData.map((item) => (
          <AccordianItem
            isExpanded={expendedId === item.id}
            onToggle={() => toggleExpend(item.id)}
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default Fqa;
