import React from "react";
import JwPagination from "jw-react-pagination";
function Pagination(props) {
  const [exampleItems, setExampleItems] = React.useState(props.line);
  const [pageOfItems, setPageOfItems] = React.useState([]);

  const onChangePage = (pageOfItems) => {
    setPageOfItems(pageOfItems);
  };
  return (
    <div>
      <div className="container">
        <div className="text-center">
          {pageOfItems.map((item) => (
            <div key={item.id}>{item.name}</div>
          ))}
          <JwPagination items={exampleItems} onChangePage={onChangePage} />
        </div>
      </div>
    </div>
  );
}

export default Pagination;
