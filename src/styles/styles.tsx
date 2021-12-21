import CSS from 'csstype';
import { makeStyles } from '@material-ui/core/styles';

export const useArticlePage = makeStyles (() => ({
  articlePage: {
    padding: '150px 75px 104px',
    width: '100%',
    boxSizing: 'border-box',
    boxShadow: 'none',
    '@media (max-width: 800px)': {
      padding: '75px 36px 52px',
    },
  },
  articleImage: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '245px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  articleDescription: {
    margin: '0',
    padding: '34px 74px 49px',
    width: '100%',
    boxSizing: 'border-box',
    border: '1px solid #eaeaea',
    borderRadius: '5px',
    boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
    fontWeight: 400,
    color:'#363636',
    textAlign: 'center',
    '@media (max-width: 800px)': {
      padding: '16px 36px 24px',
    },
  },
  articleTitle: {
    marginBottom: '50px',
    fontFamily: 'Montserrat',
    fontSize: '24px',
    lineHeight: '29px',
  },
  articleInfo: {
    marginBottom: '25px',
    fontFamily: 'Montserrat',
    fontSize: '18px',
    lineHeight: '27px',
    textAlign: 'justify',
  },
  articleLink: {
    position: 'absolute',
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    bottom: '45px',
    left: '168px',
    '@media (max-width: 800px)': {
      bottom: '15px',
      left: '84px',
    },
  },
  articleLinkText: {
    marginLeft: '6px',
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '24px',
    color:'#363636',
  },
}));

export const useCardStyle = makeStyles (() => ({
  cardSection: {
    margin: 0,
    padding: 0,
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    border: '1px solid #eaeaea',
    borderRadius: '5px',
    boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
    fontFamily: 'Montserrat',
    fontWeight: 400,
    color:'#363636',
    '&:hover': {
      cursor: 'pointer',
      boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.15)',
    },
  },
  cardImage: {
    height: '217px',
  },
  cardContent: {
    position: 'relative',
    height: '313px',
    boxSizing: 'border-box',
  },
  cardPublished: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    margin: '0 0 25px',
    padding:'0',
    height: '20px',
    boxShadow: 'none',
  },
  cardPublishedAt: {
    margin: '0 0 0 8px',
    padding: '0',
    fontSize: '14px',
    lineHeight: '21px',
    opacity: '0.6',
    boxShadow: 'none',
  },
  cardTitle: {
    margin: '20px 0 20px 0',
    height: '58px',
    overflow: 'hidden',
    fontFamily: 'Montserrat',
    fontSize: '24px',
    lineHeight: '29px',
  },
  cardDescription: {
    margin: '0 0 20px',
    fontFamily: 'Montserrat',
    fontSize: '16px',
    lineHeight: '24px',
  },
  cardRaedMore: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: '245px',
    left: '0',
    boxShadow: 'none',
  },
  cardRaedMoreText: {
    margin: '0 8px 0 0',
    fontFamily: 'Montserrat',
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 700,
  },
}));

export const useGalleryStyle = makeStyles (() => ({
  gallerySection: {
    gap: '45px',
    justifyContent: 'center',
  },
  cardWrap: {
    height: 530,
    width: 400,
    '@media (max-width: 1015px)': {
      width: '300px',
    },
    '@media (max-width: 815px)': {
      width: '250px',
    },
    '@media (max-width: 650px)': {
      width: '100%',
    },
  },
}));

export const useSearchStyles = makeStyles(() => ({
  searchSection: {
    margin: '0 0 45px',
    width: '600px',
    boxShadow: 'none',
    '@media (max-width: 1000px)': {
      width: '500px',
    },
    '@media (max-width: 800px)': {
      width: '400px',
    },
    '@media (max-width: 600px)': {
      width: '330px',
    },
    '@media (max-width: 400px)': {
      width: '100%',
    },
  },
  searchForm: {
    margin: '0 0 40px',
    padding: '15px 20px',
    display: 'flex',
    alignItems: 'center',
    height: '50px',
    boxSizing: 'border-box',
    border: '1px solid #eaeaea',
    boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
  },
  searchTitle: {
    margin: '0 0 10px',
    padding:'0',
    textAlign: 'left',
    fontFamily: 'Montserrat',
    fontSize: '16px',
    lineHeight: '20px',
    fontWeight: 600,
    color:'#363636',
  },
  searchIcon: {
    marginRight: '20px',
    boxShadow: 'none',
  },
  searchInput: {
    boxShadow: 'none',
    width: '100%',
  },
  resultOfSearch: {
    margin: '0 0 45px',
    padding: '0 0 5px',
    textAlign: 'left',
    fontFamily: 'Montserrat',
    fontSize: '16px',
    lineHeight: '20px',
    fontWeight: 600,
    color:'#363636',
    borderBottom: '1px solid #eaeaea',
  },
}));

export const useHomePage = makeStyles(() => ({
  homePage: {
    padding: '50px 75px 63px',
    '@media (max-width: 900px)': {
      padding: '25px 35px 30px',
    },
  },
  resultOfSearch: {
    margin: '0 0 45px',
    padding: '0 0 5px',
    textAlign: 'left',
    fontFamily: 'Montserrat',
    fontSize: '16px',
    lineHeight: '20px',
    fontWeight: 600,
    color:'#363636',
    borderBottom: '1px solid #eaeaea',
  },
}));

export const inputStyle: CSS.Properties = {
  padding:'0',
  width: '100%',
  height: '24',
  fontSize: '16px',
  fontFamily: 'Montserrat',
  fontWeight: 400,
  lineHeight: '24px',
  color:'#575757',
  boxSizing: 'border-box',
  border: 'none',
  outline: 'none',
};