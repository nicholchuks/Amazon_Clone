import React from "react";

const FooterMiddleList = ({ title, ListItem }) => {
  return (
    <div className="w-full">
      <h3 className="font-titleFont text-white text-base font-semibold mb-3">
        {title}
      </h3>
      <ul className="flex flex-col gap-2">
        {ListItem.map((item) =>
          item.ListData.map((data, i) => (
            <li className="footerLink" key={i}>
              {data}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default FooterMiddleList;
