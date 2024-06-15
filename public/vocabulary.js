// jsonデータを取得
fetch('/data')
  .then(response => response.json())
  .then(data =>{
    // 単語ごとの表示設定
    const JSONtext = document.getElementById('addJSON');
    data.forEach(item => {
      const div = document.createElement('div');
      const remove = document.createElement('button');
      div.textContent = `${item.Japanese} : ${item.English}`;
      remove.textContent = "削除";
      JSONtext.appendChild(div);
      JSONtext.appendChild(remove);
      remove.addEventListener('click', () => {
        // 削除ボタンをクリックしたときにPOSTリクエストを作成
        fetch('/deleteList', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(item)
        })
        // POSTリクエストを送信
        .then(response => {
          if (response.ok) {
            // ステータスコードが問題ないとき=>ボタンを無効化しリロード
            remove.disabled = true;
            location.reload();
            console.log('削除リクエストを送信しました。');
          }
          else {
            // ステータスコードに問題があるとき=>エラーを吐く
            console.error('削除リクエストが失敗しました。');
          }
        })
        .catch(error => console.error('削除リクエストを送信できませんでした', error));
      });
    });
  })
  .catch(error => console.error('vocabulary.jsで英単語データを取得できませんでした', error));

// 削除済みデータを取得
fetch('/delete')
  .then(response => response.json())
  .then(data => {
    // 単語ごとの表示設定
    const deleteText = document.getElementById('deleteJSON');
    data.forEach(item => {
      const deleteDiv = document.createElement('div');
      const add = document.createElement('button');
      add.textContent = "追加";
      deleteDiv.textContent = `${item.Japanese} : ${item.English}`;
      deleteText.appendChild(deleteDiv);
      deleteText.appendChild(add);
      add.addEventListener('click', () => {
        // 削除ボタンをクリックしたときにPOSTリクエストを作成
        fetch('/addItem', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(item)
        })
        // POSTリクエストを送信
        .then(response => {
          if (response.ok) {
            // ステータスコードが問題ないとき=>ボタンを無効化しリロード
            add.disabled = true;
            location.reload();
            console.log('追加リクエストを送信しました。');
          }
          else {
            // ステータスコードに問題があるとき=>エラーを吐く
            console.error('追加リクエストが失敗しました。');
          }
        })
        .catch(error => console.error('追加リクエストを送信できませんでした', error));
      });
    })
  })
  .catch(error => console.error('削除済みデータを取得できませんでした', error));