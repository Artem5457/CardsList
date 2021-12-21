import {
  Card,
  CardMedia,
  CardContent,
  Paper,
  Typography,
} from '@material-ui/core';
import { Markup } from 'interweave';

import { useCardStyle } from '../../styles/styles';
import { INews } from '../../types/types';
import { Icon } from '../Icon/Icon';
import calendarIcon from '../../icons/Calendar.svg';
import arrowRight from '../../icons/ArrowRight.svg';

import { useConvertDate, useTrimDescription } from '../../controllers/controller';

type Props = {
  new: INews,
};

export const CardItem = (props: Props) => {
  const classes = useCardStyle();

  return (
    <Card className={classes.cardSection}>
      <CardMedia
        className={classes.cardImage}
        image={props.new.imageUrl}
        title={props.new.title}
      />

      <CardContent
        style={{ padding: '24px' }}
        className={classes.cardContent}
        component="section"
      >
        <Paper component="div" className={classes.cardPublished}>
          <Icon
            url={calendarIcon}
            heightValue={16}
            widthValue={16}
          />

          <Paper component="span" className={classes.cardPublishedAt}>
            {useConvertDate(new Date(props.new.publishedAt))}
          </Paper>

          <Typography variant="body1" className={classes.cardTitle}>
            <Markup content={props.new.title} />
          </Typography>

          <Typography variant="body1" className={classes.cardDescription}>
            <Markup content={useTrimDescription(props.new.summary)} />
          </Typography>

          <Paper
            component="div"
            className={classes.cardRaedMore}
          >
            <Typography variant="body1" className={classes.cardRaedMoreText}>
              Read more
            </Typography>

            <Icon
              url={arrowRight}
              widthValue={12}
              heightValue={10}
            />
          </Paper>
        </Paper>
      </CardContent>
    </Card>
  );
};
