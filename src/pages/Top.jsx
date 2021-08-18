import React from 'react'
import ItemCards from '../components/ItemCards'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react';

export default function Top (props) {

  // const [datas, update] = useState(null);
  const [cards, updateCards] = useState(<p>データ取得中…</p>)

  useEffect(() => {
    axios.get(process.env.PUBLIC_URL + '/static/itemList.json').then((res) => {
      // update(res.data.datas)
      const datas = res.data.datas

      console.log(datas)

      const cardsArray = []
      for(const key of Object.keys(datas)){
        console.log(datas[key])

        cardsArray.push(<ItemCards data={datas[key]} />)
      }
      updateCards(cardsArray)
    })
  }, [])

  return (
    <div>
      <h2 style={{padding: '0 1rem', borderLeft: '4px solid #ff9800', margin: '20px 0'}}>商品一覧</h2>

      {/* 注意書き */}
      {/* <p>まだ買えません。こんなのがあるよって感じです。値段はまだ仮なのでこれから変わります。</p> */}

      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap', alignContent: 'space-between'}}>
        {/* 商品カード */}
        {cards}
        {/* <ItemCards img="https://m.media-amazon.com/images/I/71HdhoWYP0L._AC_SS450_.jpg" title="EPSON プリンター" price="2500円" status={0}/>
        <ItemCards img="https://m.media-amazon.com/images/I/71HdhoWYP0L._AC_SS450_.jpg" title="Mac Mini" price="2500円" status={1}/>
        <ItemCards img="https://m.media-amazon.com/images/I/71HdhoWYP0L._AC_SS450_.jpg" title="Wi-Fiルーター" price="2500円" status={1}/>
        <ItemCards img="https://m.media-amazon.com/images/I/71HdhoWYP0L._AC_SS450_.jpg" title="64GB USBメモリ" price="2500円" status={1}/>
        <ItemCards img="https://m.media-amazon.com/images/I/71HdhoWYP0L._AC_SS450_.jpg" title="Google Nest mini" price="2500円" status={1}/>
        <ItemCards img="https://m.media-amazon.com/images/I/71HdhoWYP0L._AC_SS450_.jpg" title="小さいテーブル" price="2500円" status={1}/>
        <ItemCards img="https://m.media-amazon.com/images/I/71HdhoWYP0L._AC_SS450_.jpg" title="ラズパイ3 model-B" price="2500円" status={1}/>
        <ItemCards img="https://m.media-amazon.com/images/I/71HdhoWYP0L._AC_SS450_.jpg" title="wacom ペンタブ" price="2500円" status={1}/>
        <ItemCards img="https://m.media-amazon.com/images/I/71HdhoWYP0L._AC_SS450_.jpg" title="Panasonic ビデオカメラ" price="2500円" status={1}/>
        <ItemCards img="https://m.media-amazon.com/images/I/71HdhoWYP0L._AC_SS450_.jpg" title="バンドリ たくさんのCD" price="2500円" status={1}/>
        <ItemCards img="https://m.media-amazon.com/images/I/71HdhoWYP0L._AC_SS450_.jpg" title="モバイルバッテリー" price="2500円" status={1}/>
        <ItemCards img="https://m.media-amazon.com/images/I/71HdhoWYP0L._AC_SS450_.jpg" title="2in1 ノートPC" price="2500円" status={1}/> */}
      </div>
    </div>
  )
}