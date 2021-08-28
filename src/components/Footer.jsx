import React from 'react'
import { Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

export default function Footer (props) {

  return (
    <footer style={{marginTop: 'auto'}}>
      <div style={{padding: '10px 20px', backgroundColor: '#8BC34A', boxShadow: '0 0 5px 0 #333'}}>
        <div className="contentsWrapper" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div>
            <Typography variant="h6">
              <Link to='/' style={{textDecoration: 'none', color: 'inherit'}}>
                あいてむカズ之助
              </Link>
            </Typography>
          </div>
          <div style={{width: '60%', minWidth: '150px', maxWidth: '2000px'}}>
            <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', fontSize: '10pt', color: '#234915'}}>
              <Link to='/About'>このサイトは？？</Link>
              <a href='https://twitter.com/Tech_Kazu' target='_blank'>カズ之助のTwitter</a>
              <a href='https://github.com/kazuki19992' target='_blank'>カズ之助のGitHub</a>
              <a href='https://github.com/kazuki19992/Kazunosuke-item.netlify.app' target='_blank'>あいてむカズ之助のリポジトリ</a>
            </div>
          </div>
        </div>
      </div>
      <div style={{backgroundColor: '#333333', color: '#fff', display: 'flex', justifyContent: 'center', padding: '5px 20px'}}>
        <span>Copyright: Kazuki Kushida</span>
      </div>
    </footer>
  )
}