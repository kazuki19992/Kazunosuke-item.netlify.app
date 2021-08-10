import React from 'react'
import { Card } from '@material-ui/core'
import { CardContent } from '@material-ui/core'
import { CardHeader } from '@material-ui/core'

export default function Price (props) {
  const datas = props.datas

  const shipInfo = datas.ships === "レターパック" ? "送料は代金に含まれています": "送料: 着払い(福島県郡山市から)"
  console.log(datas)

  const hrStyle = {
    width: '95%',
    borderTop: '4px dotted #33691e',
    borderBottom: 0
  }
  const wrapperStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    margin: '15px 0'
  }
  const bgColor = '#c5e1a5'
  const textColor = '#33691e'
  return (
    <div style={{width: '100%'}}>

      {/* 値段・配送方法・状態 */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          background: bgColor,
          color: textColor,
          borderTop: 'solid 6px #558b2f',
          boxShadow: '0 3px 4px rgba(0, 0, 0, 0.32)',
          width: '100%'
        }}
      >
        <div style={{width: '100%'}}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              width: '100%',
              margin: '20px 0'
            }}
          >
            <p style={{margin: 0, padding: 0}}>
              カズ之助希望価格
            </p>
            <p style={{fontSize: '36pt', fontWeight: 'bold', margin: 0, padding: 0}} >
              {datas.price}
            </p>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-around'}}>
          </div>
          <hr style={hrStyle} />
          <div style={wrapperStyle} >
            <p style={{margin: 0, padding: 0}}>
              配送方法(サイズ): {datas.ships}
            </p>
            <p style={{margin: 0, padding: 0}}>
              {shipInfo}
            </p>
          </div>
          <hr style={hrStyle} />
          <div style={wrapperStyle} >
            <p style={{margin: 0, padding: 0}}>
              状態: {datas.state}
            </p>
            <p style={{margin: 0, padding: 0}}>
              値下げ: TwitterのDMで交渉受付中
            </p>
          </div>
        </div>
      </div>

      {/* 説明 */}
      <Card style={{marginTop: '10px'}} variant="outlined">
        <CardHeader title='商品の説明' />
        <CardContent style={{margin: 0}}>
          <p>
            {datas.detail.split('\n').map((str, index) => (
              <React.Fragment key={index}>{str}<br /></React.Fragment>
            ))}
          </p>
        </CardContent>
      </Card>

      {/* 支払い方法 */}
      <Card style={{marginTop: '10px'}} variant="outlined">
        <CardHeader title='代金の支払方法' subheader='2021/07/29時点で対応しているもの' />
        <CardContent style={{margin: 0}}>
          <ul style={{margin: 0}}>
            <li>銀行振込</li>
            <li>PayPay送金</li>
            <li>Kyash送金</li>
          </ul>
        </CardContent>
      </Card>

      {/* 購入方法 */}
      <Card style={{marginTop: '10px'}} variant="outlined">
        <CardHeader title='購入方法' />
        <CardContent style={{margin: 0}}>
          <p>TwitterのDMで商品ページのリンクと購入希望の旨をお伝え下さい……</p>
        </CardContent>
      </Card>
    </div>
  )
}