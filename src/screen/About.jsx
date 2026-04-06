import React from "react";
import { useNavigate } from "react-router-dom";

const stats = [
  { label: "Products", value: "20K+", icon: "package" },
  { label: "Happy Customers", value: "50K+", icon: "users" },
  { label: "Avg. Rating", value: "4.9", icon: "star" },
  { label: "On-time Delivery", value: "99%", icon: "truck" },
];

const values = [
  {
    title: "Trust",
    text: "Every product is verified for quality and authenticity before listing.",
    icon: "shield",
  },
  {
    title: "Speed",
    text: "We obsess over delivery times so your orders arrive when promised.",
    icon: "truck",
  },
  {
    title: "Community",
    text: "Built around real customer feedback, not just business metrics.",
    icon: "heart",
  },
  {
    title: "Quality",
    text: "We keep raising the bar so every purchase feels worth it.",
    icon: "star",
  },
];

const team = [
  { initial: "A", name: "Aryan Shah", role: "Founder & CEO", color: "bg-[var(--secondary-color)] text-black" },
  { initial: "P", name: "Priya Mehta", role: "Head of Product", color: "bg-[#3B82F6] text-white" },
  { initial: "R", name: "Rohan Verma", role: "Lead Engineer", color: "bg-[#A855F7] text-white" },
  { initial: "S", name: "Sneha Kapoor", role: "Design Director", color: "bg-[#F43F5E] text-white" },
];

const Icon = ({ type }) => {
  switch (type) {
    case "package":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
          <path d="M12 22V12"></path>
          <path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"></path>
          <path d="m7.5 4.27 9 5.15"></path>
        </svg>
      );
    case "users":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      );
    case "truck":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
          <path d="M15 18H9"></path>
          <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
          <circle cx="17" cy="18" r="2"></circle>
          <circle cx="7" cy="18" r="2"></circle>
        </svg>
      );
    case "shield":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
          <path d="m9 12 2 2 4-4"></path>
        </svg>
      );
    case "heart":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
          <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"></path>
          <path d="m18 15-2-2"></path>
          <path d="m15 18-2-2"></path>
        </svg>
      );
    case "star":
    default:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
        </svg>
      );
  }
};

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-24 w-full pb-12 sm:mt-28 sm:pb-16">
      <div className="flex flex-col items-center px-2 text-center">
        <div className="animate-box flex h-[56px] w-[56px] items-center justify-center rounded-3xl bg-[#C8F400] sm:h-[65px] sm:w-[65px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="black" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
          </svg>
        </div>
        <h1 className="mt-5 font-[display1] text-3xl font-bold sm:text-4xl lg:text-5xl">
          About <span className="text-[#C8F400]">SkyMart</span>
        </h1>
        <p className="mt-5 max-w-3xl font-[display2] text-base font-medium text-[var(--grey-color)] sm:text-[18px]">
          SkyMart is a next-generation e-commerce platform built to make online shopping
          fast, fair, and enjoyable for everyone.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:py-14">
        {stats.map((item) => (
          <div key={item.label} className="flex flex-col items-center justify-center rounded-2xl border-1 px-4 py-5 text-center">
            <div className="mb-2 text-[var(--secondary-color)]">
              <Icon type={item.icon} />
            </div>
            <h1 className="font-[display1] text-2xl font-bold">{item.value}</h1>
            <p className="font-[display2] text-xs font-bold text-[var(--grey-color)]">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border-1 p-5 sm:p-7">
        <h1 className="font-[display1] text-2xl font-bold">Our Story</h1>
        <p className="mt-4 font-[display2] text-sm font-medium text-[var(--grey-color)]">
          SkyMart started in 2022 as a small side project, two engineers tired of bloated,
          slow e-commerce experiences. We asked ourselves: what if shopping online was
          actually <i className="text-[#a0a0a0]">enjoyable?</i>
        </p>
        <p className="mt-5 font-[display2] text-sm font-medium text-[var(--grey-color)]">
          Three years later, SkyMart serves over 50,000 customers across the country. We
          stock electronics, fashion, jewelry, and everyday essentials at prices that
          don't require a second mortgage.
        </p>
        <p className="mt-5 font-[display2] text-sm font-medium text-[var(--grey-color)]">
          We are still the same team at heart: obsessed with speed, transparency, and
          making you feel good about every purchase you make here.
        </p>
      </div>

      <div className="mt-10">
        <h1 className="text-center font-[display1] text-2xl font-bold capitalize">
          What We Stand For
        </h1>
        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
          {values.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 rounded-2xl border-1 p-5 transition-all duration-200 hover:border-[#3F4A0D] sm:p-7"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#23280F] text-[var(--secondary-color)]">
                <Icon type={item.icon} />
              </div>
              <div>
                <h1 className="font-[display1] font-bold">{item.title}</h1>
                <p className="font-[display2] text-[14px] font-medium text-[var(--grey-color)]">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h1 className="text-center font-[display1] text-2xl font-bold capitalize">
          Meet the Team
        </h1>
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center justify-center rounded-2xl border-1 py-5 text-center"
            >
              <div className={`flex h-[50px] w-[50px] items-center justify-center rounded-2xl font-[display1] text-2xl font-bold ${member.color}`}>
                {member.initial}
              </div>
              <h1 className="mt-2 font-[display2] text-[14px] font-bold">{member.name}</h1>
              <p className="text-[12px] font-medium text-[var(--grey-color)]">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 mb-20 flex flex-col items-center justify-center gap-5 rounded-3xl border-1 border-[#3F4A0D] px-5 py-8 text-center sm:mb-30">
        <h1 className="font-[display1] text-2xl font-bold">Ready to shop?</h1>
        <p className="font-[display2] text-[14px] font-medium text-[var(--grey-color)]">
          Explore thousands of products at unbeatable prices.
        </p>
        <div
          onClick={() => {
            navigate("/dashboard/shop");
          }}
          className="flex cursor-pointer items-center justify-between gap-2 rounded-2xl bg-[var(--secondary-color)] px-7 py-3.5 text-black hover:bg-[#E2FF66]"
        >
          <h1 className="font-[display1] font-bold">Browse Products</h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default About;
