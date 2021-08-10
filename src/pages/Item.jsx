import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ItemInfo from '../components/ItemInfo';

// import image from '../images/temp.jpg'

export default function ItemPage (props) {
  const data = {
    title: "古いMac mini (2012年くらい)",
    price: '3,000円',
    ships: 'ヤマト運輸(120)',
    state: '普通にきれい',
    detail: 'ダンボールに入ってるもの: 本体, 純正の充電器\n\n前所有者(研究室)に大事にされて、我が家でも大事にされていたMacちゃんです。\n1ヶ月くらい前に家に来たけど家にあっても使わんので格安で売り飛ばします。'
  }
  const captionStyle={
    fontSize: '50%',
    color: '#757575',
    padding: 0,
    margin: 0
  }
  return (
    <div>
      <h1 style={{padding: '0 1rem', borderLeft: '4px solid #558b2f', margin: '20px 0'}}>{data.title}</h1>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <p style={captionStyle}>追加日: 2222/22/22 22:22</p>
        <p style={captionStyle}>商品ID: 33xxxxxxxxxxxxx</p>
      </div>
      <hr />

      {/* PC */}
      <div className="pcContents">
        <div style={{display: 'flex', justifyContent: 'space-between'}}>

          {/* カルーセル */}
          <div style={{maxWidth: '600px', maxHeight: '300px', width: '50%'}}>
            <Carousel>
              <div>
                <img src='https://www.apple.com/v/mac-mini/l/images/overview/hero__x8ruukomx2au_large_2x.jpg' />
                <p className="legend">きれい</p>
              </div>
              <div>
                <img src='https://www.apple.com/v/mac-mini/l/images/overview/hero__x8ruukomx2au_large_2x.jpg' />
                <p className="legend">Legend 1</p>
              </div>
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