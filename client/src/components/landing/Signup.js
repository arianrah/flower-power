import React from "react";
import Axios from "axios";

export default function Signup(props) {
  return (
    <form>
      <label>
        First Name:
        <input type="text" name="first-name" />
      </label>
      <label>
        Last Name:
        <input type="text" name="last-name" />
      </label>
      <label>
        Email:
        <input type="text" name="email" />
      </label>
      <label>
        Password:
        <input type="text" name="password" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
