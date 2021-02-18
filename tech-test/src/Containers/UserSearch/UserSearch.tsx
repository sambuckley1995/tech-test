import React, { useEffect, useState } from "react";
import Search from "../../Components/Search/Search";
import Users from "../../Components/Users/Users";
import styles from "./UserSearch.module.scss";

export type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: { lat: string; long: string };
};
export type Company = { name: string; catchPhrase: string; bs: string };

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};
type SearchField = "name" | "companyName" | "email";

const UserSearch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState<User[]>();
  const [filteredUsers, setFilteredUsers] = useState<User[]>();

  const [searchCriteria, setSearchCriteria] = useState<
    {
      [key in SearchField]?: string;
    }
  >({
    email: "",
    companyName: "",
    name: "",
  });

  useEffect(() => {
    let mounted = true;
    fetch(`https://jsonplaceholder.typicode.com/users`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((response) => {
        if (mounted) {
          setIsLoading(false);
          setUsers(response);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const filteredUsers =
      users &&
      users?.filter(
        // I'm sure you will notice, this only works if searching on one field at a time.
        (user) =>
          (searchCriteria.name &&
            user.name
              .toLowerCase()
              .includes(searchCriteria.name.toLowerCase())) ||
          (searchCriteria.companyName &&
            user.company.name
              .toLowerCase()
              .includes(searchCriteria.companyName)) ||
          (searchCriteria.email &&
            user.email.toLowerCase().includes(searchCriteria.email)) ||
          (!searchCriteria.name &&
            !searchCriteria.companyName &&
            !searchCriteria.email)
      );

    setFilteredUsers(filteredUsers);
  }, [searchCriteria]);

  const content = isLoading ? (
    <h2>Please bare with us</h2>
  ) : (
    <section className={styles.bodyWrapper}>
      <Search
        searchCriteria={searchCriteria}
        setSearchCriteria={setSearchCriteria}
      />
      {users && <Users users={filteredUsers || users} />}
    </section>
  );

  return content;
};

export default UserSearch;
