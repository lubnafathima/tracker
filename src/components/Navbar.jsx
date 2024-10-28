"use client";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export default function Navbar({ activeComponent, setActiveComponent }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav aria-label="Global" className="flex gap-6 lg:gap-8 p-6 lg:px-8">
      <a
        onClick={() => setActiveComponent("inbox")}
        className={`text-sm font-semibold leading-6 hover:text-indigo-600 cursor-pointer
            ${activeComponent === "inbox" ? "text-indigo-600" : "text-gray-900"}`}
      >
        Inbox
      </a>
      <a
        onClick={() => setActiveComponent("compose")}
        className={`text-sm font-semibold leading-6 hover:text-indigo-600 cursor-pointer
            ${activeComponent === "compose" ? "text-indigo-600" : "text-gray-900"}`}
      >
        Compose
      </a>
      <a
        onClick={() => setActiveComponent("sent")}
        className={`text-sm font-semibold leading-6 hover:text-indigo-600 cursor-pointer
            ${activeComponent === "sent" ? "text-indigo-600" : "text-gray-900"}`}
      >
        Sent
      </a>
    </nav>
  );
}
