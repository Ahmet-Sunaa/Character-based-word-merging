import React, { useState, useEffect, useRef } from 'react';
import api from './api/axiosConfig';
import './App.css';
import CustomButton from './components/CustomButton/CustomButton';
import CustomTextField from './components/CustomTextField/CustomTextField';
import CustomNumberField from './components/CustomNumberField/CustomNumberField';
import CustomTable from './components/CustomTable/CustomTable';


function App() {
  const [data, setData] = useState([]);
  const [responseLoad, setResponseLoad] = useState(false)
  const [cancel, setCancel] = useState(false);
  const [responseData, setResponseData] = useState({});
  const [appStatus, setAppStatus] = useState(false);
  const [textFieldNumber, setTextFieldNumber] = useState(0);

  const arr = useRef(new Array());

  useEffect(() => {
    if (textFieldNumber != 0) {
      arr.current = Array.from(Array(textFieldNumber).keys())
      setAppStatus(true)
    }
  }, [textFieldNumber])

  useEffect(() => {
    if (cancel) {
      setData(current => [])
      setAppStatus(false)
      setTextFieldNumber(0)
      setResponseData(current => { })
      setCancel(false)
    }
  }, [cancel])



  const handleClick = async (array, selectedIndex) => {
    if (array[selectedIndex] === "Birleştir") {
      await api.post('/api/merge_words', {
        words: data
      }).then(async (response) => {
        let dataR = await response.data
        setResponseData(dataR)
        console.log(dataR)
      }).then(() => setResponseLoad(true))
      setCancel(false)
    }
    else if (array[selectedIndex] === "Kaydet") {
      await api.post('/api/save_words', {
        responseData
      }).then((response) => console.log(response.data))
      setCancel(false)
    }
    else if (array[selectedIndex] === "İptal") {
      setCancel(true)
      setResponseLoad(false)
    }

  }



  return (
    <div className='App'>
      {appStatus
        ? <div>
          {!responseLoad ? <div className='Textfield'>
            {
              arr.current.map(i => <CustomTextField key={i.toString()} handleData={setData} />
              )
            }
          </div> :
            <div className='Table'>
              <CustomTable responseData={responseData} />
            </div>}

          <div className='Button'>
            <CustomButton handleClick={handleClick} />
          </div>

        </div>
        : <div className='NumberOfComponent'>
          <CustomNumberField number={setTextFieldNumber} />
        </div>}
    </div>
  );
}

export default App;
