export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface UseContactsResult {
  contacts: Contact[] | [];
  isLoading: boolean;
  error: string | null;
}
