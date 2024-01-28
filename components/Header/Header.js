"use client";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">ТаксиВосход</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
