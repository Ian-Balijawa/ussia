import { Box, Stack, Typography } from "@mui/material";

import { PlayCircle } from "phosphor-react";
import React from "react";
import { genLink } from "../../utils/link-transform";
import { useNavigate } from "react-router-dom";

export default () => {
  const navigator = useNavigate();

  const options = [
    {
      name: "Start your own Business",
      href: genLink("Start your own Business"),
    },
    { name: "Personal Assistant", href: genLink("Personal Assistant") },
    {
      name: "UNIZO membership and benefits",
      href: genLink("UNIZO membership and benefits"),
    },
    {
      name: "Need first-line benefits",
      href: genLink("Need first-line benefits"),
    },
    {
      name: "Training that makes you stronger",
      href: genLink("Training that makes you stronger"),
    },
    { name: "Looking for HR support", href: genLink("Looking for HR support") },
    {
      name: "Need a model letter or contract",
      href: genLink("Need a model letter or contract"),
    },
    { name: "UNIZO near me", href: genLink("UNIZO near me") },
    { name: "Questions about energy", href: genLink("Questions about energy") },
  ];
  return (
    <Stack padding="3rem 0" sx={{ background: "#E8EEF0" }}>
      <Typography
        variant="h5"
        sx={{ marginBottom: "1em", textAlign: "center" }}
      >
        How can we help you?
      </Typography>
      <Box
        width="60%"
        direction="row"
        sx={{
          margin: "1rem auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gridGap: "1rem",
        }}
      >
        {options.map((option) => (
          <HelpOption option={option} key={option.name} />
        ))}
      </Box>
    </Stack>
  );
};

const HelpOption = ({ option }) => {
  return (
    <Stack
      direction="row"
      sx={{
        marginBottom: "1em",
        cursor: "pointer",
        color: "#304C59",
        justifyContent: "flex-start",
        "&:hover": {
          color: "#E03C31",
        },
      }}
      onClick={() => navigator(option.href)}
    >
      <PlayCircle
        size={20}
        weight="fill"
        style={{
          color: "#304C59",
          marginRight: "0.5em",
          "&:hover": {
            color: "#E03C31",
          },
        }}
      />
      {option.name}
    </Stack>
  );
};
