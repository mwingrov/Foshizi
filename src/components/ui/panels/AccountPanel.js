import { useState } from "react";
import { signOut } from "next-auth/react";
import {
  RowContainer,
  PanelContainer,
} from "@/components/layout/dashboard/DashboardElement";
import Card from "@/components/base/card";
import Input from "@/components/base/input";
import { InputGroup } from "@/components/base/input/InputElement";
import Button from "@/components/base/button";
import { languagesOptions } from "@/data";
import Select from "@/components/base/select";
import axios from "axios";
import { ButtonContainer } from "@/components/layout/logger/LoggerElement";

const provinces = [
  "Select Province",
  "Eastern Cape",
  "Free State",
  "Gauteng",
  "KwaZulu-Natal",
  "Limpopo",
  "Mpumalanga",
  "Northern Cape",
  "North West",
  "Western Cape",
];
const country = ["South Africa"];

const AccountPanel = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  // const [email, setEmail] = useState("");
  const [phone, setphone] = useState("");

  const [number, setStreetNum] = useState(0);
  const [street, setStreet] = useState("");
  const [suburb, setSuburb] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [countries, setCountry] = useState("South Africa");

  const requestFn = async (field, value) => {
    try {
      await axios.post("https://foshizi.herokuapp.com/api/updateuser", {
        user_id: "6435172dfbfaa51308744c78",
        field,
        value,
      });
    } catch (error) {
      throw new Error("Something went wrong with your " + field + " update");
    }
  };

  const updateUserInfo = async () => {
    const fields = [{ firstname }, { lastname }, { phone }];
    for (let i = 0; i <= fields.length; i++) {
      if (!fields[i]) return false;
      else {
        if (Object.keys(fields[i])[0] === "firstname" && firstname) {
          requestFn(Object.keys(fields[i])[0], firstname);
        }
        if (Object.keys(fields[i])[0] === "lastname" && lastname) {
          requestFn(Object.keys(fields[i])[0], lastname);
        }
        if (Object.keys(fields[i])[0] === "phone" && phone) {
          requestFn(Object.keys(fields[i])[0], phone);
        }

        updateAddress();
      }
    }
  };

  const updateAddress = () => {
    if (number) {
      requestFn("physicalAddress.number", parseInt(number));
    }
    if (street) {
      requestFn("physicalAddress.street", street);
    }
    if (suburb) {
      requestFn("physicalAddress.suburb", suburb);
    }
    if (city) {
      requestFn("physicalAddress.city", city);
    }
    if (country) {
      requestFn("physicalAddress.country", country[0]);
    }
  };

  const deleteAccount = async () => {
    try {
      const res = await axios.post(
        "https://foshizi.herokuapp.com/api/deleteuser",
        {
          id: "6435172dfbfaa51308744c78",
        }
      );

      if (res.message === "success") {
        signOut();
      }
    } catch (error) {
      throw new Error("Something went wrong");
    }
  };

  return (
    <PanelContainer>
      <RowContainer>
        <Card width="full" title="Personal information" isAccountCard={true}>
          <InputGroup>
            <Input
              label="First Name"
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <Input
              label="Last Name"
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            {/* <Input
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            /> */}
            <Input
              label="Phone Number"
              type="text"
              minLength={10}
              maxLength={10}
              value={phone}
              onChange={(e) => setphone(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <Input
              label="Street no"
              type="number"
              value={number}
              onChange={(e) => setStreetNum(e.target.value)}
            />
            <Input
              label="Street"
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
            <Input
              label="suburb"
              type="text"
              value={suburb}
              onChange={(e) => setSuburb(e.target.value)}
            />
            <Input
              label="City"
              type="email"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <Select label="Province" options={provinces} />
            <Select label="Country" options={country} />
          </InputGroup>
        </Card>
      </RowContainer>
      <RowContainer>
        <Card width="full" title="General Preference" isAccountCard={true}>
          <InputGroup>
            <Select label="Language" options={languagesOptions} />
            <Input label="Username " type="text" />
          </InputGroup>
          <ButtonContainer>
            <Button
              size="xs"
              btnText="Update Account"
              link="/"
              bg="primary"
              isBtn={true}
              onClick={updateUserInfo}
            />
            <Button
              size="xs"
              btnText="Delete Account"
              link="/"
              bg="danger"
              isBtn={true}
              onClick={deleteAccount}
            />
          </ButtonContainer>
        </Card>
      </RowContainer>
    </PanelContainer>
  );
};

export default AccountPanel;
