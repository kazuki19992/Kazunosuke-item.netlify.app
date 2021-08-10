import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ItemInfo from '../components/ItemInfo';
import axios from 'axios';
import { useEffect } from 'react';
const helperFunctions = require('../helpers/helpers')


export default function ItemPage (props) {
  const id = props.match.params.id
  console.log(id)
  const [data, updateData] = useState({
    title: 'データ取得中...',
    price: null,
    ships: null,
    state: null,
    detail: "データ取得中..."
  })
  const [carousel, updateCarousel] = useState(null)
  const captionStyle={
    fontSize: '50%',
    color: '#757575',
    padding: 0,
    margin: 0
  }

  useEffect(() => {
    axios.get(process.env.PUBLIC_URL + '/static/itemList.json').then((res) => {
      const datas = res.data.datas[id]
      updateData(datas)
      document.title = datas.title + ' - あいてむカズ之助'

      const carouselList = []
      for(let i = 0; i < datas.image.length; i++){
        const imgPath = process.env.PUBLIC_URL + '/static/img/' + datas.image[i]
        if(datas.legend[i]){
          carouselList.push(<div><img src={imgPath} /><p className="legend">{datas.legend[i]}</p></div>)
        }else{
          carouselList.push(<div><img src={imgPath} /></div>)
        }
      }

      updateCarousel(carouselList)
    })
  }, [])

  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div>
          <h1 style={{padding: '0 1rem', borderLeft: '4px solid #558b2f', margin: '20px 0'}}>{data.title}</h1>
          <p style={captionStyle}>商品ID: {id}</p>
        </div>
        {helperFunctions.renderStatus(data.status)}
      </div>
      <hr />

      {/* PC */}
      <div className="pcContents">
        <div style={{display: 'flex', justifyContent: 'space-between'}}>

          {/* カルーセル */}
          <div style={{maxWidth: '600px', maxHeight: '300px', width: '50%'}}>
            <Carousel>
              {carousel}
            </Carousel>
          </div>

          {/* 値段表示とか */}
          <div style={{width: '50%'}}>
            <ItemInfo datas={data} />
          </div>
        </div>
      </div>
    </div>
  )
}