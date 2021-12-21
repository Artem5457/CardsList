import { useLocation, Link } from 'react-router-dom';
import { Paper, Typography } from '@material-ui/core';
import { Markup } from 'interweave';

import React from 'react';
import { useArticlePage } from '../../styles/styles';
import { Icon } from '../Icon/Icon';
import arrowLeft from '../../icons/ArrowLeft.svg';

export const ArticlePage = () => {
  const classes = useArticlePage();
  const articleNews = useLocation().state;

  return (
    <Paper component="div" className={classes.articlePage}>
      <Paper
        component="div"
        // @ts-ignore
        style={{ backgroundImage: `url(${articleNews.imageUrl})` }}
        className={classes.articleImage}
      />

      <Paper
        component="section"
        className={classes.articleDescription}
      >
        <Typography
          variant="h3"
          className={classes.articleTitle}
        >
          <Markup
            // @ts-ignore
            content={articleNews.title}
          />
        </Typography>

        <Typography
          variant="body1"
          className={classes.articleInfo}
        >
          <Markup
            // @ts-ignore
            content={articleNews.summary}
          />
        </Typography>

        <Typography variant="body1" className={classes.articleInfo}>
          {/* eslint-disable-next-line max-len */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sed eaque excepturi cumque ipsam debitis ullam fugit fugiat, maiores, illum provident repellendus esse nam! Laudantium illo nesciunt repudiandae et quo sed quos ea. Et officia saepe cumque eveniet, ipsum numquam est debitis! Nisi dignissimos dolor laborum maiores iusto sunt sequi quaerat quam architecto dolores similique mollitia placeat laudantium provident culpa eum accusamus consequatur recusandae, aspernatur voluptatum! Labore pariatur expedita enim sequi dolorum tenetur. Maiores accusamus quibusdam, quod similique, culpa nam ab reiciendis corrupti aut est illum voluptatem omnis qui esse? Dolorum earum dignissimos facilis ducimus eius dolores soluta optio vitae.
        </Typography>

        <Typography
          variant="body1"
          className={classes.articleInfo}
        >
          <Markup
            // @ts-ignore
            content={articleNews.summary}
          />
        </Typography>
      </Paper>

      <Link
        className={classes.articleLink}
        to="/"
      >
        <Icon
          url={arrowLeft}
          widthValue={12}
          heightValue={10}
        />

        <Typography
          variant="body1"
          className={classes.articleLinkText}
        >
          Back to homepage
        </Typography>
      </Link>
    </Paper>
  );
};
