// jsonデータを取得
fetch('/data')
  .then(response => response.json())
  .then(data =>{
    // 単語ごとの表示設定
    const vocabulary_item = document.getElementById('vocabulary_item');
    data.forEach(item => {
      const tr_row = document.createElement('tr');
      const td_English = document.createElement('td');
      const td_Japanese = document.createElement('td');
      const td_Button = document.createElement('td');
      const remove = document.createElement('button');
      td_English.textContent = `${item.English}`;
      td_Japanese.textContent = `${item.Japanese}`;
      td_Button.id = 'Button_Area'
      remove.textContent = "削除";
      // 子要素に指定
      vocabulary_item.appendChild(tr_row);
      tr_row.appendChild(td_English);
      tr_row.appendChild(td_Japanese);
      tr_row.appendChild(td_Button);
      td_Button.appendChild(remove);
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
        fetch('/addList', {
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