import { useEffect, useState } from "react";

import Pagination from "react-js-pagination";
import { PaginationProps } from "../Helpers/interface";

const UserPagination = ({
  totalRecords,
  setRequest,
  request,
}: PaginationProps) => {
  const [activePage, setActivePage] = useState(request?._page || 1);
  const [perPage] = useState(request?._limit || 9);

  useEffect(() => {
    if (request?._page == 1) {
      setActivePage(1);
    }
  }, [request]);

  const [aStateVariable, setAStateVariable] = useState(false);

  const handleClick = () => {
    setAStateVariable(true);
  };

  useEffect(() => {
    if (aStateVariable === true) {
      window.scrollTo(0, 0);
      setAStateVariable(false);
    }
  }, [aStateVariable]);

  return (
    <div className="pagination_wrap mt-3 mx-3">
      <Pagination
        activePage={activePage}
        itemsCountPerPage={perPage}
        totalItemsCount={totalRecords || 0}
        pageRangeDisplayed={5}
        itemClass="page-item"
        linkClass="page-link"
        onChange={(val) => {
          handleClick();
          setActivePage(val);
          setRequest({ ...request, _page: val });
        }}
      />
    </div>
  );
};

export default UserPagination;
