import { Flex, Text } from "@mantine/core";
import React, { useState } from "react";
import LoginForm from "../components/Forms/LoginForm/LoginForm.component";
import conference_login from "../../public/assets/svg/conference_login.svg";
import Image from "next/image";
import SignUpForm from "../components/Forms/SignUpForm/SignUpForm.component";
const Auth = () => {
  const [formToggle, setFormToggle] = useState("login");

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
      <Flex direction="column">
        {formToggle === "login" ? (
          <>
            <LoginForm />{" "}
            <Flex justify="center" className="my-4">
              <Text>
                Don&apos;`t have an account?{" "}
                <span
                  onClick={() => setFormToggle("signup")}
                  className="text-blue-400 cursor-pointer"
                >
                  Sign Up
                </span>
              </Text>
            </Flex>{" "}
          </>
        ) : (
          <>
            <SignUpForm />
            <Flex justify="center" className="my-4">
              <Text>
                Already have an account?{" "}
                <span
                  onClick={() => setFormToggle("login")}
                  className="text-blue-400 cursor-pointer"
                >
                  Login
                </span>
              </Text>
            </Flex>{" "}
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default Auth;
