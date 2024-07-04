import React, { useEffect, useState } from "react";
import ContactItem from "../../components/contacts/ContactItems";
import BottomNavigation from "../../layouts/Navbar";
import useContacts from "../../hooks/contacts";
import { Contact } from "../../hooks/contacts/types";
import Loader from "../../components/loader";
import { goTo } from "react-chrome-extension-router";
import SalesCall from "../sales-call";
import { clearLocalStorage, getExtUserId } from "../../utils/sessionManager";
import Login from "../login";

interface ContactListProps {
  contacts: Contact[];
}

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
  const [userId, setUserId] = useState<string | null>(null);
  const { contacts, isLoading, error } = useContacts(userId);

  const handleLogout = async () => {
    console.log("Logout Button was clicked");
    await clearLocalStorage();
    goTo(Login, { message: "Session Logged out" });
  };

  useEffect(() => {
    getExtUserId().then((userId) => {
      if (userId) {
        setUserId(userId);
        console.log(userId);
      }
    });
  }, []);

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
        {isLoading ? (
          <Loader /> // Show Loader while loading
        ) : error ? (
          <div className="m-4 text-red-500">Error: {error}</div> // Show error if exists
        ) : (
          <ContactList contacts={contacts || []} /> // Show contacts if loaded
        )}
      </div>

      <button
        className="bg-blue-500 text-white py-3 rounded-lg m-4"
        onClick={() => goTo(SalesCall, { contacts })}
      >
        Start Auto Dialer
      </button>
      <button
        className="bg-blue-500 text-white py-3 rounded-lg m-4"
        onClick={handleLogout}
      >
        Logout from extension
      </button>
    </div>
  );
};
