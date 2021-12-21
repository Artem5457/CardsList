import React, { useState } from 'react';
import { Paper, Typography } from '@material-ui/core';

import { useSelector } from 'react-redux';
import { Icon } from '../Icon/Icon';
import { inputStyle, useSearchStyles } from '../../styles/styles';
import { useSaveSearchWordsToState } from '../../controllers/controller';
import { State } from '../../types/types';

import searchIcon from '../../icons/Search.svg';

export const Searching = () => {
  const [userInputs, setUserInputs] = useState(
    useSelector((state: State) => state).searchData,
  );

  useSaveSearchWordsToState((userInputs));

  const classes = useSearchStyles();

  return (
    <Paper component="section" className={classes.searchSection}>
      <Typography variant="h2" className={classes.searchTitle}>
        Filter by keywords
      </Typography>

      <Paper component="form" className={classes.searchForm}>
        <Paper component="div" className={classes.searchIcon}>
          <Icon
            url={searchIcon}
            heightValue={20}
            widthValue={20}
          />
        </Paper>

        <Paper component="div" className={classes.searchInput}>
          <input
            style={inputStyle}
            value={userInputs}
            id="search"
            placeholder="what do you want to know"
            onChange={(event) => setUserInputs(event.target.value)}
          />
        </Paper>
      </Paper>
    </Paper>
  );
};
