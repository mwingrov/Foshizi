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
  const [email, setEmail] = useState("");
  const [phone, setphone] = useState("");
  const [number, setStreetNum] = useState(0);
  const [street, setStreet] = useState("");
  const [surburb, setSurburb] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [countries, setCountry] = useState("South Africa");

  const updateUserInfo = async () => {
    const fields = [{ firstname }, { lastname }, { email }, { phone }];

    for (let i = 0; i <= fields.length; i++) {
      if (!fields[i]) return false;
      else {
        try {
          const res = await axios.post(
            "https://foshizi.herokuapp.com/api/updateuser",
            {
              user_id: "64343f7483bc1842dea8dca3",
              field: fields[i],
              value: fields[i],
            }
          );
          console.log(res);
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  const deleteAccount = async () => {
    try {
      const res = await axios.post(
        "https://foshizi.herokuapp.com/api/deleteuser",
        {
          id: "643461ce3e56f13c11300c40",
        }
      );

      if (res.message === "success") {
        signOut();
      }
    } catch (error) {
      console.log(error);
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
            <Input
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Phone Number"
              type="text"
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
              label="Surburb"
              type="text"
              value={surburb}
              onChange={(e) => setSurburb(e.target.value)}
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
              isBtn={false}
              onClick={updateUserInfo}
            />
            <Button
              size="xs"
              btnText="Delete Account"
              link="/"
              bg="danger"
              isBtn={false}
              onClick={deleteAccount}
            />
          </ButtonContainer>
        </Card>
      </RowContainer>
    </PanelContainer>
  );
};

export default AccountPanel;
