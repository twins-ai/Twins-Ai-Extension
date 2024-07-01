import { PhoneIcon } from "@heroicons/react/24/outline";
import React from "react";

interface ContactItemProps {
  name: string;
  phone: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ name, phone }) => {
  return (
    <div className="flex items-center justify-between p-4">
      <div>
        <div className="font-medium">{name}</div>
        <div className="text-blue-600">{phone}</div>
      </div>
      <div className="text-gray-500">
        <PhoneIcon height="1.5rem" width="1.5rem" />
      </div>
    </div>
  );
};

export default ContactItem;
