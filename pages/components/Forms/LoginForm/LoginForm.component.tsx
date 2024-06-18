import { Button, Checkbox, Group, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { IconX, IconCheck } from "@tabler/icons-react";
import {
  PasswordInput,
  Progress,
  Text,
  Popover,
  Box,
  rem,
} from "@mantine/core";

export default function LoginForm() {
  const [popoverOpened, setPopoverOpened] = useState(false);
  const [value, setValue] = useState("");

  function PasswordRequirement({
    meets,
    label,
  }: {
    meets: boolean;
    label: string;
  }) {
    return (
      <Text
        c={meets ? "teal" : "red"}
        style={{ display: "flex", alignItems: "center" }}
        mt={7}
        size="sm"
      >
        {meets ? (
          <IconCheck style={{ width: rem(14), height: rem(14) }} />
        ) : (
          <IconX style={{ width: rem(14), height: rem(14) }} />
        )}{" "}
        <Box ml={10}>{label}</Box>
      </Text>
    );
  }

  const requirements = [
    { re: /[0-9]/, label: "Includes number" },
    { re: /[a-z]/, label: "Includes lowercase letter" },
    { re: /[A-Z]/, label: "Includes uppercase letter" },
    { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Includes special symbol" },
  ];

  function getStrength(password: string) {
    let multiplier = password.length > 5 ? 0 : 1;

    requirements.forEach((requirement) => {
      if (!requirement.re.test(password)) {
        multiplier += 1;
      }
    });

    return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
  }

  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement
      key={index}
      label={requirement.label}
      meets={requirement.re.test(value)}
    />
  ));

  const strength = getStrength(value);
  const color = strength === 100 ? "teal" : strength > 50 ? "yellow" : "red";
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <TextInput
        withAsterisk
        required
        label="Email"
        placeholder="your@email.com"
        key={form.key("email")}
        {...form.getInputProps("email")}
        className="w-[20rem] my-4"
      />
      <Popover
        opened={popoverOpened}
        position="bottom"
        width="target"
        transitionProps={{ transition: "pop" }}
      >
        <Popover.Target>
          <div
            onFocusCapture={() => setPopoverOpened(true)}
            onBlurCapture={() => setPopoverOpened(false)}
          >
            <PasswordInput
              required
              withAsterisk
              label="Your password"
              placeholder="Your password"
              value={value}
              onChange={(event) => setValue(event.currentTarget.value)}
              className="my-4"
            />
          </div>
        </Popover.Target>
        <Popover.Dropdown>
          <Progress color={color} value={strength} size={5} mb="xs" />
          <PasswordRequirement
            label="Includes at least 6 characters"
            meets={value.length > 5}
          />
          {checks}
        </Popover.Dropdown>
      </Popover>

      <Group justify="center" mt="md">
        <Button type="submit">Login</Button>
      </Group>
    </form>
  );
}
