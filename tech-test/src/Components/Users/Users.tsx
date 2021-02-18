import React from "react";
import { User } from "../../Containers/UserSearch/UserSearch";
import styles from "./Users.module.scss";

const Users: React.FC<{ users: User[] }> = ({ users }) => {
  return (
    <table className={styles.table} aria-label="users table">
      <th>
        <tr>
          <td aria-label="name">Name</td>
          <td aria-label="user name">Username</td>
          <td aria-label="email address">Email</td>
          <td aria-label="address street">Street</td>
          <td aria-label="address suite">Suite</td>
          <td aria-label="address city">City</td>
          <td aria-label="zipcode">Zipcode</td>
          <td aria-label="phone number">Phone</td>
          <td aria-label="website URL">Website</td>
          <td aria-label="company name">Company Name</td>
          <td aria-label="company catchphrase">Company Catchphrase</td>
          <td aria-label="company bull shit">Company BS</td>
        </tr>
      </th>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td aria-label={user.name}>{user.name}</td>
            <td aria-label={user.username}>{user.username}</td>
            <td aria-label={user.email}>{user.email}</td>
            <td aria-label={user.address.street}>{user.address.street}</td>
            <td aria-label={user.address.suite}>{user.address.suite}</td>
            <td aria-label={user.address.city}>{user.address.city}</td>
            <td aria-label={user.address.zipcode}>{user.address.zipcode}</td>
            <td aria-label={user.phone}>{user.phone}</td>
            <td aria-label={user.website}>{user.website}</td>
            <td aria-label={user.company.name}>{user.company.name}</td>
            <td aria-label={user.company.catchPhrase}>
              {user.company.catchPhrase}
            </td>
            <td aria-label={user.company.bs}>{user.company.bs}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Users;
