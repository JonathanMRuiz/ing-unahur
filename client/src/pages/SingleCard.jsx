import React, { useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
  MDBContainer,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import moment from "moment";
import { getRelatedCards, getCard } from "../redux/features/cardSlice";
import RelatedCards from "../components/RelatedCards";
import DisqusThread from "../components/DisqusThread";

const SingleCard = () => {
  const dispatch = useDispatch();
  const { card, relatedCards } = useSelector((state) => ({ ...state.card }));
  const { id } = useParams();
  const navigate = useNavigate();
  const tags = card?.tags;

  useEffect(() => {
    tags && dispatch(getRelatedCards(tags));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tags]);

  useEffect(() => {
    if (id) {
      dispatch(getCard(id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <>
      <MDBContainer>
        <MDBCard className="mb-3 mt-2">
          <MDBCardImage
            position="top"
            style={{ width: "100%", maxHeight: "600px" }}
            src={card.imageFile}
            alt={card.title}
          />
          <MDBCardBody>
            <MDBBtn
              tag="a"
              color="none"
              style={{ float: "left", color: "#000" }}
              onClick={() => navigate("/")}
            >
              <MDBIcon
                fas
                size="lg"
                icon="long-arrow-alt-left"
                style={{ float: "left" }}
              />
            </MDBBtn>
            <h3>{card.title}</h3>
            <span>
              <p className="text-start tourName">Created By: {card.name}</p>
            </span>
            <div style={{ float: "left" }}>
              <span className="text-start">
                {card && card.tags && card.tags.map((item) => `#${item} `)}
              </span>
            </div>
            <br />
            <MDBCardText className="text-start mt-2">
              <MDBIcon
                style={{ float: "left", margin: "5px" }}
                far
                icon="calendar-alt"
                size="lg"
              />
              <small className="text-muted">
                {moment(card.createdAt).fromNow()}
              </small>
            </MDBCardText>
            <MDBCardText className="lead mb-0 text-start">
              {card.description}
            </MDBCardText>
          </MDBCardBody>
          <RelatedCards relatedCards={relatedCards} cardId={id} />
        </MDBCard>
        <DisqusThread id={id} title={card.title} path={`/card/${id}`} />
      </MDBContainer>
    </>
  );
};

export default SingleCard;
