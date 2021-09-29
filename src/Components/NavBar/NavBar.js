import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

import { useSelector, useDispatch } from "react-redux";
import { queryAction } from "../../redux/actions";

const useStyles = makeStyles(() => ({
  ContWrap: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  search: {
    display: "flex",
    alignItems: "center",
    position: "absolute",
    right: -15,
    cursor: "pointer",
  },
  input: {
    marginRight: 10,
    marginLeft: 10,
  },
}));

function NavBar({ actualCall, contentClear }) {
  const classes = useStyles();
  const query = useSelector((state) => state.getQuery.query);
  const dispatch = useDispatch();

  return (
    <>
      <AppBar color="default">
        <Toolbar>
          <Container className={classes.ContWrap}>
            <Typography>
              <Button onClick={contentClear}>Forkify</Button>
            </Typography>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(actualCall(query));
              }}
            >
              <Button type="Submit" className={classes.search}>
                <SearchIcon />
              </Button>
              <InputBase
                className={classes.input}
                type="search"
                value={query}
                placeholder="Search..."
                onChange={(e) => dispatch(queryAction(e.target.value))}
              />
            </form>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;
