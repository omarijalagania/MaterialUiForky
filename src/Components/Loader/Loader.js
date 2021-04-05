import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import loaderImage from '../../assets/images/loader.gif'

const useStyle = makeStyles(() => ({

  spinner: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

}))

function Loader() {
  const classes = useStyle();

  return (
    <>
    <div className={classes.spinner}>
      <img src={loaderImage} alt="loader"/>
    </div>
    </>
  );
}

export default Loader;