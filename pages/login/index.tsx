import { Flex } from "@mantine/core";
import React from "react";
import LoginForm from "../components/Forms/LoginForm/LoginForm.component";
import conference_login from "../../public/assets/svg/conference_login.svg";
import Image from "next/image";
const Login = () => {
  return (
    <Flex
      justify="space-around"
      align="center"
      className="relative h-[100vh]"
      direction={{ base: "column", sm: "row" }}
      gap={{ base: "sm", sm: "lg" }}
    >
      <Flex>
        <Image src={conference_login} alt="" />
      </Flex>
      <Flex>
        <LoginForm />
      </Flex>
    </Flex>
  );
};

export default Login;
