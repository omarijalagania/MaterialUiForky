import React, { useState } from "react";
import SingleCard from "./SingleCard/SingleCard";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ReactPaginate from "react-paginate";

const useStyle = makeStyles(() => ({
  gridCont: {
    marginTop: 120,
  },
  paginationContainer: {
    Width: "100%",
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& a": {
      padding: "10px",
      cursor: "pointer",
    },
  },

  paginationPrevBtn: {
    padding: "5px 10px",
    marginRight: 10,
    cursor: "pointer",
    border: "1px solid black",
    borderRadius: "10px",
  },
  paginationNextBtn: {
    padding: "5px 10px",
    marginLeft: 10,
    cursor: "pointer",
    border: "1px solid black",
    borderRadius: "10px",
    "& a:focus": {
      outLine: "none",
      border: "0",
    },
  },
  paginationActive: {
    padding: "5px 5px",
    border: "1px solid black",
    borderRadius: "10px",
    "& a": {
      outLine: "none",
    },
  },
}));

function Content({ data, showPagination }) {
  const [pageNumber, setPageNumber] = useState(0);
  const recipePerPage = 9;
  const pageVisited = pageNumber * recipePerPage;

  //pagination page count
  const pageCount = Math.ceil(data.length / recipePerPage);
  //pagination function
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  //styles
  const classes = useStyle();
  return (
    <>
      <Container>
        <Grid
          container
          spacing={2}
          direction="row"
          className={classes.gridCont}
        >
          {data
            .slice(pageVisited, pageVisited + recipePerPage)
            .map((recipe) => {
              return (
                <Grid key={recipe.recipe_id} item xs={12} md={4} sm={4}>
                  <SingleCard data={recipe} />
                </Grid>
              );
            })}
        </Grid>

        {showPagination && (
          <ReactPaginate
            previousLabel={"Prev"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={classes.paginationContainer}
            previousClassName={classes.paginationPrevBtn}
            nextClassName={classes.paginationNextBtn}
            activeClassName={classes.paginationActive}
          />
        )}
      </Container>
    </>
  );
}

export default Content;
