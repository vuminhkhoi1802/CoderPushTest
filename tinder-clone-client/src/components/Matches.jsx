import { Card, Pagination } from "antd";
import React, { useEffect, useState } from "react";
import { getUserMatches } from "../api/services";
import Footer from "./Footer";
import "../styles/match.scss";

function Matches() {
  const limit = 10;
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

  useEffect(() => {
    handleLikeMatch();
  }, [page]);

  const handleLikeMatch = async () => {
    const values = await getUserMatches(page, limit);
    setData(values?.data?.data?.rows);
    setCount(values?.data?.data?.count);
  };
  const onChangePage = (page) => {
    setPage(page);
  };
  return (
    <div className="matches">
      <p>Matches</p>
      <div>
        {data && data.length ? (
          data.map((item) => (
            <Card key={item?.id}>
              <img src={`${item?.userAccept?.avatar}`} alt="" />{" "}
              {item?.userAccept?.name}
            </Card>
          ))
        ) : (
          <div>
            <img
              className="d-block w-100"
              src="000-404.png"
              alt="First slide"
            />
          </div>
        )}

        {count ? (
          <Pagination current={page} onChange={onChangePage} total={count} />
        ) : (
          ""
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Matches;
