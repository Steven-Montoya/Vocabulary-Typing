fetch('/data')
  .then(response => response.json())
  .then(data =>{
    const JSONtext = document.getElementById('json');
    data.forEach(item => {
      const div = document.createElement('div');
      const remove = document.createElement('button');
      div.textContent = `${item.Japanese} : ${item.English}`
      remove.textContent = "削除"
      JSONtext.appendChild(div)
      JSONtext.appendChild(remove)
      remove.addEventListener('click', () => {
        fetch('/deleteItem', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(item)
        })
        .then(response => {
          if (response.ok) {
            remove.disabled = true;
            console.log('削除リクエストを送信しました。')
          }
          else {
            console.error('削除リクエストが失敗しました。')
          }
        })
        .catch(error => console.error('削除リクエストを送信できませんでした', error));
      });
    });
  })
  .catch(error => console.error('データを取得できませんでした', error));