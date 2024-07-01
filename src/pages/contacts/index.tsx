// src/components/ContactList.tsx

import React from "react";
import ContactItem from "../../components/contacts/ContactItems";
import BottomNavigation from "../../layouts/Navbar";

interface Contact {
  name: string;
  phone: string;
}

interface ContactListProps {
  contacts: Contact[];
}

// Todos: Make this section dynamic from our backend
const contacts = [
  { name: "Mindy Kaling", phone: "(415) 123-4567" },
  { name: "Sara Lee", phone: "(415) 765-4321" },
  { name: "Peggy Olson", phone: "(408) 234-5678" },
];

const ContactList: React.FC<ContactListProps> = ({ contacts }) => {
  return (
    <>
      <div>
        {contacts.map((contact, index) => (
          <ContactItem key={index} name={contact.name} phone={contact.phone} />
        ))}
      </div>
      <BottomNavigation />
    </>
  );
};

export const AutoDialer = () => {
  return (
    <div className="max-h-screen flex flex-col justify-between">
      <div>
        <button className="m-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <ContactList contacts={contacts} />
      </div>
      <button className="bg-blue-500 text-white py-3 rounded-lg m-4">
        Start Auto Dialer
      </button>
    </div>
  );
};
