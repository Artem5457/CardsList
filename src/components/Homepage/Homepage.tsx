import { useSelector } from 'react-redux';

import { Paper, Typography } from '@material-ui/core';

import React from 'react';
import { Searching } from '../Searching/Searching';
import { useHomePage } from '../../styles/styles';
import { State, INews } from '../../types/types';

import { Gallery } from '../Gallery/Gallery';
import { preparedTitlesToDisplay } from '../../controllers/controller';

export const Homepage = () => {
  const classes = useHomePage();
  const newsToDisplay: INews[] = preparedTitlesToDisplay(useSelector((state: State) => state));

  return (
    <Paper component="div" className={classes.homePage}>
      <Searching />

      <Typography
        variant="body1"
        className={classes.resultOfSearch}
      >
        Result:
        {' '}
        {newsToDisplay.length}
      </Typography>

      <Gallery
        newsToDisplay={newsToDisplay}
      />
    </Paper>
  );
};
