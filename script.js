function janken() {

  /*変数定義 ********/
  // じゃんけんの手の番号を決定

  var GU = 1;
  var CHOKI = 2;
  var PA = 3;


  /*関数定義********/
  // 人間に手を入力してもらう機能
  function getHumHand() {
    var hum = prompt('半角英数字の1〜3の数字で入力してください\n\n' + GU + ':グー\n' + CHOKI + ':チョキ\n' + PA + ':パー');
    hum = parseInt(hum, 10);
    if (hum != GU && hum != CHOKI && hum !== PA) {
      return undefined;
    } else {
      return hum;
    }
  }

  /*コンピューターの手を決める******/
  function getComHand() {
    return Math.floor(Math.random() * 3) + 1;
  }


  //コンピューターの手の名前を取得
  function getHandName(num) {
    switch (num) {
      case GU:
        return 'グー';
      case CHOKI:
        return 'チョキ';
      case PA:
        return 'パー';
    }
  }

  //結果の判定
  function getResult(com, hum) {
    if (hum === com) {
      return '結果はあいこでした！';
    } else if ((com === GU && hum === PA || com === CHOKI && hum === GU || com === PA && hum === CHOKI)) {
      return '勝ちました！';
    } else {
      return '負けました！';
    }
  }


  //最終的な結果のメッセージ
  function getResultMsg(com, hum) {
    return getResult(com, hum) + 'コンピューターの出した手は「' + getHandName(com) + '」でした';
  }

  /*実行処理**********/
  var hum = getHumHand();
  if (!hum) {
    alert('入力値をうまく認識できませんでした。ブラウザを再読み込みすると、もう一度挑戦できます。');
  } else {
    var com = getComHand();
    return getResult(com, hum);
  }

}

var win = 0;
var isLose = false;

while (!isLose) {
  var result = janken();
  if (result === '結果はあいこでした!') {
    continue;
  }
  if (result === '勝ちました！') {
    win++;
    alert('ただいま「' + win + '」勝中です。');
    continue;
  }
  alert('連勝はストップです！記録は「' + win + '」勝でした！');
  isLose = true;
}










