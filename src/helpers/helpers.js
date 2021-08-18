// バッジ描画用
export function renderStatus(status) {
  const statusList = ["販売中", "商談中", "売り切れ！", "販売停止中"]
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
  },{
    color: '#383838',
    backgroundColor: '#c7c7c7',
    border: '1px solid #5c5c5c'
  }]

  return (
    <div style={{ ...badgeStyle, ...badgeDiffStyle[status]}}>
      <span>{statusList[status]}</span>
    </div>
  )
}

export function getState (state) {
  // 状態を返す
  const statusList = [
    "悪い", "使える", "普通", "良い", "新品同然"
  ]
  return statusList[state]
}

export function shipService (ships) {
  const service = ['ヤマト運輸', 'ゆうパック', 'レターパック']
  return service[ships]
}

export function copyTextToClipboard(text) {
  navigator.clipboard.writeText(text)
  .then(function() {
    console.log('Async: Copying to clipboard was successful!', text);
    return true
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
    return false
  });
}