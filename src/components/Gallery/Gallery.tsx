import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { useGalleryStyle } from '../../styles/styles';
import { CardItem } from './CardItem';
import { INews } from '../../types/types';

type Props = {
  newsToDisplay: INews[],
};

export const Gallery = (props: Props) => {
  const classes = useGalleryStyle();

  return (
    <Grid container className={classes.gallerySection}>
      {props.newsToDisplay.map((item: INews) => (
        <Link
          state={item}
          className={classes.cardWrap}
          key={item.id}
          id={`${item.id}`}
          to="/article"
        >
          <CardItem new={item} />
        </Link>
      ))}
    </Grid>
  );
};
