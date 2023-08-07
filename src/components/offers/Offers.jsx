import React from "react";

export default function Offers() {
  const arr = [
    {
      id: 1,
      title: "Move the borders of reality!",
      subTitle: "Go on a space adventure Learn more",
      imgLink: require("../../assets/img/space2.png")
    },
    {
      id: 2,
      title: "Space is not just stars and planets",
      subTitle: "it is a majestic journey to ",
      imgLink: require("../../assets/img/space3.png")
    },
    {
      id: 3,
      title: "For those who dream of stars",
      subTitle: "Our offer: make your dream come true",
      imgLink: require("../../assets/img/space4.png")
    },
    {
      id: 4,
      title: "Fulfill your fantastic dreams",
      subTitle: "Space has never been so close",
      imgLink: require("../../assets/img/space5.png")
    },
  ];
  return (
    <div className="offers">
      <p className="offerTittle">Offers</p>
      {arr.map((el) => {
        return (
          <div key={el.id} className={`offerItem offerItem-${el.id}`} style={{ background: `url(${el.imgLink}) no-repeat center/cover` }}>
            <p className="title--offer">{el.title}</p>
            <p className="subTitle--offer">{el.subTitle}</p>
            <button className="unfilled-button unfilled-button--offer">Learn more</button>
          </div>
        );
      })}
    </div>
  );
}
