import { Card, Pagination } from "antd";
import React, { useEffect, useState } from "react";
import { getLikeUsers } from "../api/services";
import Footer from "./Footer";
import "../styles/like.scss";
import "antd/dist/antd.min.css";

function Liked() {
  const limit = 10;
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

  useEffect(() => {
    handleLikeMatch();
  }, [page]);

  const handleLikeMatch = async () => {
    const values = await getLikeUsers(page, limit);
    setData(values?.data?.data?.rows);
    setCount(values?.data?.data?.count);
  };
  const onChangePage = (page) => {
    setPage(page);
  };
  return (
    <div className="liked">
      <p>Liked</p>
      <div className="row body-liked">
        {data &&
          data.map((item) => (
            <div className="col-6" key={item.id}>
              <Card
                hoverable
                style={{ width: 230 }}
                cover={<img alt="images" src={`${item.userLike.avatar}`} />}
              >
                <div className="card-info-name">{item.userLike.name}</div>
              </Card>
            </div>
          ))}

        {count ? (
         <div className="text-center">
            <Pagination current={page} onChange={onChangePage} total={count} />
         </div>
        ) : (
          ""
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Liked;
