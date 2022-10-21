import React, { useEffect } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getCards, setCurrentPage } from "../redux/features/cardSlice";
import Card from "../components/Card";
import Pagination from "../components/Pagination";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const HomeCards = () => {
  const { cards, loading, currentPage, numberOfPages } = useSelector(
    (state) => ({
      ...state.card,
    })
  );
  const dispatch = useDispatch();
  const query = useQuery();
  const searchQuery = query.get("searchQuery");
  const location = useLocation();

  useEffect(() => {
    dispatch(getCards(currentPage));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  if (loading) {
    return "Loading...";
  }
  return (
    <div
      style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "1000px",
        alignContent: "center",
      }}
    >
      <MDBRow className="mt-5">
        {cards.length === 0 && location.pathname === "/" && (
          <MDBTypography className="text-center mb-0" tag="h2">
            No Cards Found
          </MDBTypography>
        )}

        {cards.length === 0 && location.pathname !== "/" && (
          <MDBTypography className="text-center mb-0" tag="h2">
            We couldn't find any matches for "{searchQuery}"
          </MDBTypography>
        )}

        <MDBCol>
          <MDBContainer>
            <MDBRow className="row-cols-1 row-cols-md-3 g-2">
              {cards && cards.map((item) => <Card key={item._id} {...item} />)}
            </MDBRow>
          </MDBContainer>
        </MDBCol>
      </MDBRow>
      {cards.length > 0 && !searchQuery && (
        <Pagination
          setCurrentPage={setCurrentPage}
          numberOfPages={numberOfPages}
          currentPage={currentPage}
          dispatch={dispatch}
        />
      )}
    </div>
  );
};

export default HomeCards;
