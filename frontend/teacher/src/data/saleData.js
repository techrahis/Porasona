import { getAcronym, getShortForm } from "../components/Charts/getAcronym";

export const allSalesData = [
  {
    course: getAcronym("Data Science for Beginners"),
    earnings: 2500.0,
  },
  {
    course: getAcronym("Software Engineering Fundamentals"),
    earnings: 3000.0,
  },
  {
    course: getAcronym("Creative Writing Masterclass"),
    earnings: 1500.0,
  },
  {
    course: getAcronym("Marketing Strategies for Startups"),
    earnings: 5500.0,
  },
  {
    course: getAcronym("Web Development Bootcamp"),
    earnings: 4300.0,
  },
  {
    course: getAcronym("Public Speaking Essentials"),
    earnings: 1200.0,
  },
  {
    course: getAcronym("Graphic Design for Everyone"),
    earnings: 2500.0,
  },
  {
    course: getAcronym("Financial Management for Freelancers"),
    earnings: 2800.0,
  },
];

export const yearlySalesData = [
  {
    year: 2022,
    earings: [
      {
        month: getShortForm("January"),
        total_earnings: 2300.0,
      },
      {
        month: getShortForm("February"),
        total_earnings: 3000,
      },
      {
        month: getShortForm("March"),
        total_earnings: 1330.0,
      },
      {
        month: getShortForm("April"),
        total_earnings: 2600.0,
      },
      {
        month: getShortForm("May"),
        total_earnings: 2500.0,
      },
      {
        month: getShortForm("June"),
        total_earnings: 1600.0,
      },
      {
        month: getShortForm("July"),
        total_earnings: 2900.0,
      },
      {
        month: getShortForm("August"),
        total_earnings: 3000.0,
      },
      {
        month: getShortForm("September"),
        total_earnings: 2000.0,
      },
      {
        month: getShortForm("October"),
        total_earnings: 1600.0,
      },
      {
        month: getShortForm("November"),
        total_earnings: 3200.0,
      },
      {
        month: getShortForm("December"),
        total_earnings: 3800.0,
      },
    ],
  },
  {
    year: 2023,
    earings: [
      {
        month: getShortForm("January"),
        total_earnings: 4300.0,
      },
      {
        month: getShortForm("February"),
        total_earnings: 3000,
      },
      {
        month: getShortForm("March"),
        total_earnings: 2330.0,
      },
      {
        month: getShortForm("April"),
        total_earnings: 2600.0,
      },
      {
        month: getShortForm("May"),
        total_earnings: 2100.0,
      },
      {
        month: getShortForm("June"),
        total_earnings: 3600.0,
      },
      {
        month: getShortForm("July"),
        total_earnings: 1600.0,
      },
      {
        month: getShortForm("August"),
        total_earnings: 1900.0,
      },
      {
        month: getShortForm("September"),
        total_earnings: 2100.0,
      },
      {
        month: getShortForm("October"),
        total_earnings: 2800.0,
      },
      {
        month: getShortForm("November"),
        total_earnings: 2200.0,
      },
      {
        month: getShortForm("December"),
        total_earnings: 1800.0,
      },
    ],
  },
  {
    year: 2024,
    earings: [
      {
        month: getShortForm("January"),
        total_earnings: 2300.0,
      },
    ],
  },
];

export const monthlySalesData = [
  {
    month: "January",
    total_earnings: 23300.0,
    courses: [
      {
        id: getAcronym("Data Science for Beginners"),
        value: 2500.0,
      },
      {
        id: getAcronym("Software Engineering Fundamentals"),
        value: 3000.0,
      },
      {
        id: getAcronym("Creative Writing Masterclass"),
        value: 1500.0,
      },
      {
        id: getAcronym("Marketing Strategies for Startups"),
        value: 5500.0,
      },
      {
        id: getAcronym("Web Development Bootcamp"),
        value: 4300.0,
      },
      {
        id: getAcronym("Public Speaking Essentials"),
        value: 1200.0,
      },
      {
        id: getAcronym("Graphic Design for Everyone"),
        value: 2500.0,
      },
      {
        id: getAcronym("Financial Management for Freelancers"),
        value: 2800.0,
      },
    ],
  },
  {
    month: "February",
    total_earnings: 23300.0,
    courses: [
      {
        id: getAcronym("Data Science for Beginners"),
        value: 250.0,
      },
      {
        id: getAcronym("Software Engineering Fundamentals"),
        value: 300.0,
      },
      {
        id: getAcronym("Creative Writing Masterclass"),
        value: 150.0,
      },
      {
        id: getAcronym("Marketing Strategies for Startups"),
        value: 550.0,
      },
      {
        id: getAcronym("Web Development Bootcamp"),
        value: 430.0,
      },
      {
        id: getAcronym("Public Speaking Essentials"),
        value: 120.0,
      },
      {
        id: getAcronym("Graphic Design for Everyone"),
        value: 250.0,
      },
      {
        id: getAcronym("Financial Management for Freelancers"),
        value: 100.0,
      },
    ],
  },
  {
    month: "March",
    total_earnings: 23300.0,
    courses: [
      {
        id: getAcronym("Data Science for Beginners"),
        value: 1500,
      },
      {
        id: getAcronym("Software Engineering Fundamentals"),
        value: 3000,
      },
      {
        id: getAcronym("Creative Writing Masterclass"),
        value: 2000,
      },
      {
        id: getAcronym("Marketing Strategies for Startups"),
        value: 1200,
      },
      {
        id: getAcronym("Web Development Bootcamp"),
        value: 1700,
      },
      {
        id: getAcronym("Public Speaking Essentials"),
        value: 2000,
      },
      {
        id: getAcronym("Graphic Design for Everyone"),
        value: 2500,
      },
      {
        id: getAcronym("Financial Management for Freelancers"),
        value: 2800,
      },
    ],
  },
  {
    month: "April",
    total_earnings: 23300.0,
    courses: [
      {
        id: getAcronym("Data Science for Beginners"),
        value: 2500,
      },
      {
        id: getAcronym("Software Engineering Fundamentals"),
        value: 2800,
      },
      {
        id: getAcronym("Creative Writing Masterclass"),
        value: 1700,
      },
      {
        id: getAcronym("Marketing Strategies for Startups"),
        value: 5500.0,
      },
      {
        id: getAcronym("Web Development Bootcamp"),
        value: 4300.0,
      },
      {
        id: getAcronym("Public Speaking Essentials"),
        value: 3200.0,
      },
      {
        id: getAcronym("Graphic Design for Everyone"),
        value: 2200.0,
      },
      {
        id: getAcronym("Financial Management for Freelancers"),
        value: 1800.0,
      },
    ],
  },
];
