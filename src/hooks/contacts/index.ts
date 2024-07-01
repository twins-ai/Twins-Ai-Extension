import { useState, useEffect } from "react";
import { Contact, UseContactsResult } from "./types";
import { api } from "../../utils/client";

const useContacts = (userId: string): UseContactsResult => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        // Todos: Make this api call on the basis of userId
        const response = await api.get(`/contacts`);
        setContacts(response.data?.contacts || []);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContacts();
  }, [userId]);

  return { contacts, isLoading, error };
};

export default useContacts;
