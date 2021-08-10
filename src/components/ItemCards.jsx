import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
  console.log(props.data)

  // バッジ描画用
  const renderStatus = (status) => {
    const statusList = ["販売中", "商談中", "売り切れ！"]
    const badgeStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItem: 'center',
      fontSize: '10pt',
      fontWeight: 'bold',
      padding: '1px 5px',
      borderRadius: 3
    }
    const badgeDiffStyle = [{
      color: '#0c4f15',
      backgroundColor: '#bbebb0',
      border: '1px solid #279135'
    },{
      color: '#b85f00',
      backgroundColor: '#fadc57',
      border: '1px solid #ad962d'
    },{
      color: '#850200',
      backgroundColor: '#ffb9b8',
      border: '1px solid #ad1717'
    }]

    return (
      <div style={{ ...badgeStyle, ...badgeDiffStyle[status]}}>
        <span>{statusList[status]}</span>
      </div>
    )
  }

  const getState = (state) => {
    // 状態を返す
    const statusList = [
      "悪い", "使える", "普通", "良い", "まるで新品"
    ]
    return statusList[state]
  }

  const img = process.env.PUBLIC_URL + '/static/img/' + props.data.image[0]
  console.log(img)

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.data.title}
          </Typography>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Typography variant="body2" color="textSecondary" component="p">
              値段: {props.data.price}円
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              状態: {getState(props.data.state)}
            </Typography>
            {renderStatus(status)}
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" style={{color: "#378f24"}}>
          共有
        </Button>
        <Button size="small" style={{color: "#378f24"}}>
          商品IDをコピー
        </Button>
      </CardActions>
    </Card>
  );
}