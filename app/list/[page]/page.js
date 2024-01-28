"use client";

import { useList } from "@/hooks/useList";
import Card from "react-bootstrap/Card";
import "./listPage.scss";
import Link from "next/link";

import Pagination from "react-bootstrap/Pagination";

export default function ListPagePage({ params }) {
  const { page } = params;
  const { data, error, isLoading } = useList(page);

  function listElements() {
    if (error) return <p>Ошибка загрузки</p>;
    if (isLoading) return <p>Загрузка элементов...</p>;
    if (data)
      return data.items.map((item) => {
        return (
          <Link key={item.id} href={`/item/${item.id}`}>
            <Card>
              <Card.Body>{item.name}</Card.Body>
            </Card>
          </Link>
        );
      });
  }
  return (
    <div className="list-page">
      <div className="list-page__elements">{listElements()}</div>
      <div className="list-page__lists">
        <Pagination>
          {[1, 2].map((item) => (
            <Pagination.Item
              key={item}
              active={item == page}
              href={item === 1 ? "1" : "2"}
            >
              {item}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
    </div>
  );
}
