const TOKEN = 'LINEのトークンを指定(取得方法：https://arukayies.com/gas/line_bot/gettoken)';
const DEBUGID = 'LINEのユーザIDを指定(取得方法：https://arukayies.com/gas/line_bot/get-userid)';

//LINEBOTでボタンテンプレートを設定したメッセージを送るサンプル
function pushmessage_buttons_template() {
  //ボタンテンプレートを設定したメッセージを送る
  UrlFetchApp.fetch('https://api.line.me/v2/bot/message/push', {
    'headers': {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + TOKEN, //LINEのトークンを指定(取得方法：https://arukayies.com/gas/line_bot/gettoken)
    },
    'method': 'POST',
    'payload': JSON.stringify({
      'to': DEBUGID, //LINEのユーザIDを指定(取得方法：https://arukayies.com/gas/line_bot/get-userid)
      'messages': [
        {
          'type': 'template',
          'altText': 'ボタンテンプレートメッセージ',
          'template': {
            'type': 'buttons',
            'thumbnailImageUrl': 'https://placehold.jp/640x480.jpg?text=サンプル', // 画像のURL
            'imageAspectRatio': 'rectangle', // 画像のアスペクト比、「rectangle: 1.51:1」・「square: 1:1」、デフォルト値はrectangle
            'imageSize': 'cover', // 画像の表示形式
            'imageBackgroundColor': '#FFFFFF', // 画像の背景色
            'title': 'メニュー',
            'text': '以下より選択してください。',
            'defaultAction': {
              'type': 'uri',
              'label': 'View detail',
              'uri': 'https://arukayies.com/'
            },
            'actions': [
              {
                'type': 'uri',
                'label': 'TOPを開く',
                'uri': 'https://arukayies.com/'
              },
              {
                'type': 'uri',
                'label': '記事を開く',
                'uri': 'https://arukayies.com/gas/line_bot/pushmessage-buttons-template'
              }
            ]
          }
        }
      ],
      'notificationDisabled': false // trueだとユーザーに通知されない
    }),
  });
}