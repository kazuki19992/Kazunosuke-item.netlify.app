import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Snackbar } from '@material-ui/core';
const helperFunctions = require('../helpers/helpers')

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 300,
    marginBottom: 20
  },
  media: {
    height: 150,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  const status = props.data.status

  const [noticeOpen, setOpen] = useState(false)

  const linkTo = '/Item/' + props.data.id
  console.log(noticeOpen)

  const handleClick = () => {
    setOpen(true)
    window.setTimeout(()=>{
      setOpen(false)
    }, 3000)
  }

  const img = process.env.PUBLIC_URL + '/static/img/' + props.data.image[0]
  console.log(img)

  const twitterText = props.data.title + ' - あいてむカズ之助 ' + window.location.href + 'Item/' + props.data.id
  const textURL = encodeURI('https://twitter.com/intent/tweet?text=' + twitterText)

  const [toastMsg, setMsg] = useState(null)
  async function copyUrl () {
    const url = window.location.href + 'Item/' + props.data.id
    const ret = await helperFunctions.copyTextToClipboard(url)
    console.log(ret)
    setMsg('商品URLをコピーしました！')
    handleClick()
  }

  return (
    <>
    <Card className={classes.root}>
      <Link to={linkTo} style={{textDecoration: 'none', color: '#333333'}}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={img}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" style={{}}>
              {props.data.title}
            </Typography>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <Typography variant="body2" color="textSecondary" component="p">
                値段: {props.data.price}円
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                状態: {helperFunctions.getState(props.data.state)}
              </Typography>
              {helperFunctions.renderStatus(status)}
            </div>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Button size="small" style={{color: "#378f24"}} href={textURL} target='_brank'>
          共有
        </Button>
        <Button size="small" style={{color: "#378f24"}} onClick={copyUrl}>
          商品URLをコピー
        </Button>
      </CardActions>
    </Card>
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={noticeOpen}
      autoHideDuration={6000}
      message={toastMsg}
    />
    </>
  );
}