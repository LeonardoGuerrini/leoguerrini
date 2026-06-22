import type { Project } from "./types";

/** Selected work, rendered as project rows in display order. */
export const projects: readonly Project[] = [
  {
    id: "book-registration-system",
    title: "Book Registration System",
    description:
      "A full CRUD application where users can create an account, log in and out, and register or delete books. Built in PHP with a MySQL database.",
    stack: ["PHP", "MySQL", "Auth"],
    caption: "PHP · MYSQL",
    status: "ready",
    href: "https://github.com/LeonardoGuerrini/sistemacadastrolivros",
    icon: "book",
  },
  {
    id: "currency-converter-api",
    title: "Currency Converter API",
    description:
      "A currency converter for Android, written in Java with Android Studio and powered by live rates from the Exchange Rate API.",
    stack: ["Java", "Android", "REST API"],
    caption: "JAVA · ANDROID",
    status: "ready",
    href: "https://github.com/LeonardoGuerrini/ProjectCurrencyConverterAPI-app",
    icon: "converter",
  },
];
