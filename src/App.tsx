import React from 'react';
import { Info } from './Info';
import { Form } from './Form';

function App() {
  const [infoVisible, setInfoVisible] = React.useState(false);
  const [formsSubmitted, setFormsSubmitted] = React.useState<string[]>([]);
  const [info, setInfo] = React.useState({
    year: '',
    city: '',
    sport: '',
  });

  React.useEffect(() => {
    if (formsSubmitted.length === 3) {
      setInfoVisible(true);
    }
  }, [formsSubmitted]);

  return (
    <div className="max-w-3xl mx-auto p-10">
      <div className='w-full h-52'>
        {infoVisible && (
          <Info info={info} />
        )}
      </div>
      <div>
        <Form 
          setInfo={setInfo} 
          setFormsSubmitted={setFormsSubmitted} 
          num="1" 
          value="year"
          placeholder="Твій рік народження?"
        />
        <Form 
          setInfo={setInfo} 
          setFormsSubmitted={setFormsSubmitted} 
          num="2" 
          value="city"
          placeholder="З якого ти міста?"
        />
        <Form 
          setInfo={setInfo} 
          setFormsSubmitted={setFormsSubmitted} 
          num="3" 
          value="sport"
          placeholder="Твій улюблений вид спорту?"
        />
      </div>
    </div>
  );
}

export default App;
