import React, { useState, useEffect } from 'react';
import './App.css';

const STORAGE_KEY = 'simpleMemo';

function App() {
  const [memo, setMemo] = useState('');

  useEffect(() => {
    const savedMemo = localStorage.getItem(STORAGE_KEY);
    if(savedMemo){
      setMemo(savedMemo);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, memo);
  }, [memo]);

  const handleDelete = () => {
    localStorage.removeItem(STORAGE_KEY);
    setMemo('');
  }

  return (
    <div className="App">
      <textarea
      value={memo}
      onChange={(e) => setMemo(e.target.value)}
      rows={10}
      placeholder='ここに入力'
       />
       <Btn onDelete={handleDelete}/>
    </div>
  );
}

function Btn({ onDelete }: { onDelete:() => void}){
  return (
    <button onClick={onDelete}>削除ボタン</button>
  )
}

export default App;
