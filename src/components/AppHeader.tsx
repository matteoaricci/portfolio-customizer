import {
  createStyles,
  Header,
  Container,
  Button,
  Text,
  rem,
} from "@mantine/core";

type AppHeaderProps = {
  email: string;
  signOut: () => void;
};
//   import { IconChevronDown } from '@tabler/icons-react';
const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: "flex",
    justifyContent: "flex-end",
        alignItems: "center",
        gap: "2rem",
    padding: "2rem"
  },

  button: {
    backgroundColor: "inherit",
  },
}));

export default function AppHeader(props: AppHeaderProps) {
  const { classes } = useStyles();
  const { email, signOut } = props;
  return (
    <Header height={HEADER_HEIGHT}>
      <Container className={classes.inner} fluid>
        <Text fz={"lg"}>{email}</Text>

        <Button
          color="teal"
          variant="outline"
          onClick={signOut}
          radius="xl"
          h={30}
        >
          Sign Out
        </Button>
      </Container>
    </Header>
  );
}
