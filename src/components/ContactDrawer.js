import * as React from "react"

import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Drawer from "@mui/material/Drawer"
import Link from "@mui/material/Link"
import Typography from "@mui/material/Typography"

export default function ContactDrawer(props) {
  return (
    <Drawer
      anchor={"bottom"}
      open={props.open}
      onClose={props.onClose}
      PaperProps={{ elevation: 0 }}
      sx={{
        backdropFilter: "blur(4px)",
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            my: "2rem",
            gap: "1rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ mb: "1.5rem" }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
              Reach out anytime! 👋
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                maxWidth: "360px",
                lineHeight: "1.43",
              }}
            >
              Have any questions, feedback or want to say hi?{" "}
              <Link href="mailto:liamnguyen.swe@gmail.com" color={"inherit"}>
                email me
              </Link>{" "}
              at liamnguyen.swe@gmail.com
            </Typography>
          </Box>
        </Box>
      </Container>
    </Drawer>
  )
}
