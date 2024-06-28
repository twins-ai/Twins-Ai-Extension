import { Fragment, useState } from "react";
import { Combobox, Dialog, Transition } from "@headlessui/react";
import {
  UsersIcon,
  ChevronRightIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { Button } from "../../components/buttons";

interface Person {
  id: number;
  name: string;
  phone: string;
  email: string;
  role: string;
  url: string;
  profileUrl: string;
  imageUrl: string;
}

const people: Person[] = [
  {
    id: 1,
    name: "Leslie Alexander",
    phone: "1-493-747-9031",
    email: "lesliealexander@example.com",
    role: "Co-Founder / CEO",
    url: "https://example.com",
    profileUrl: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    name: "Leslie Alexander",
    phone: "1-493-747-9031",
    email: "lesliealexander@example.com",
    role: "Co-Founder / CEO",
    url: "https://example.com",
    profileUrl: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    name: "Leslie Alexander",
    phone: "1-493-747-9031",
    email: "lesliealexander@example.com",
    role: "Co-Founder / CEO",
    url: "https://example.com",
    profileUrl: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  // More people...
];

const recent: Person[] = [people[0], people[1], people[2]]; // Adjust indices as per your array

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function ContactPage(): JSX.Element {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(true);

  const filteredPeople =
    query === ""
      ? []
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Transition.Root
      show={open}
      as={Fragment}
      afterLeave={() => setQuery("")}
      appear
    >
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="mx-auto max-w-3xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
              <Combobox
                onChange={(person: Person) =>
                  (window.location.href = person.profileUrl)
                }
              >
                <>
                  <h2 className="mb-4 ml-4 mt-2 text-xs font-semibold text-gray-500">
                    Recent contacts
                  </h2>
                  <Combobox.Options
                    as="div"
                    static
                    hold
                    className="flex divide-x divide-gray-100"
                  >
                    <div
                      className={classNames(
                        "max-h-96 min-w-0 flex-auto scroll-py-4 overflow-y-auto px-6 py-4",
                        "sm:h-96"
                      )}
                    >
                      <div className="-mx-2 text-sm text-gray-700">
                        {(query === "" ? recent : filteredPeople).map(
                          (person) => (
                            <Combobox.Option
                              as="div"
                              key={person.id}
                              value={person}
                              className={({ active }) =>
                                classNames(
                                  "flex cursor-default select-none items-center rounded-md p-2",
                                  active && "bg-gray-100 text-gray-900"
                                )
                              }
                            >
                              {({ active }) => (
                                <>
                                  <img
                                    src={person.imageUrl}
                                    alt=""
                                    className="h-6 w-6 flex-none rounded-full"
                                  />
                                  <span className="ml-3 flex-auto truncate">
                                    {person.name}
                                  </span>
                                  {active && (
                                    <PhoneIcon
                                      className="ml-3 h-5 w-5 flex-none text-gray-400"
                                      aria-hidden="true"
                                    />
                                  )}
                                </>
                              )}
                            </Combobox.Option>
                          )
                        )}
                      </div>
                    </div>
                  </Combobox.Options>

                  {/* People not found */}

                  {/* <div className="px-6 py-14 text-center text-sm sm:px-14">
                    <UsersIcon
                      className="mx-auto h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                    <p className="mt-4 font-semibold text-gray-900">
                      No people found
                    </p>
                    <p className="mt-2 text-gray-500">
                      We couldn’t find anything with that term. Please try
                      again.
                    </p>
                  </div> */}
                </>
              </Combobox>
              <div className="m-2 flex items-center justify-center">
                <Button
                  text="Start Auto Dialer"
                  color="primary"
                  variant="filled"
                  size="medium"
                  onClick={() => alert("Clicked!")}
                />
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
