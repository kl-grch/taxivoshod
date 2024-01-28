"use client";

import { useElement } from "@/hooks/useElement";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Link from "next/link";

export default function ItemIdPage({ params }) {
  const [show, setShow] = useState(true);

  const { id } = params;
  const { data, error, isLoading } = useElement(id);

  if (error) return <p>Ошибка загрузки</p>;
  if (isLoading) return <p>Загрузка элемента</p>;
  if (data)
    return (
      <div>
        <Modal show={show}>
          <Modal.Header>
            <Modal.Title>{data.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{data.text}</Modal.Body>
          <Modal.Footer>
            <Link href={"/list/1"}>
              <Button variant="secondary">Close</Button>
            </Link>
          </Modal.Footer>
        </Modal>
      </div>
    );
}
