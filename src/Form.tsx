import React, {Dispatch, SetStateAction} from 'react';

interface InfoType {
  year: string;
  city: string;
  sport: string;
}

type Keys = 'sport' | 'year' | 'city';

interface Props {
  setInfo: Dispatch<SetStateAction<InfoType>>;
  setFormsSubmitted: Dispatch<SetStateAction<string[]>>;
  num: string;
  value: Keys;
  placeholder: string;
}

export const Form: React.FC <Props> = ({setInfo, setFormsSubmitted, num, value, placeholder}) => {
  const [val, setVal] = React.useState('');
  const submitCount = () => {
    setFormsSubmitted(prev => {
      if ( [...prev].includes(num)) {
        return [...prev];
      } else {
        return [...prev, num];
      }
    });
  }
  return (
    <div>
      <form 
        className='max-w-2lg flex gap-4 border rounded-sm border-lime-300 p-4 mb-3' 
        onSubmit={(e) => {
          e.preventDefault();
          
          setInfo(prev => {
            const key = value;
            const copy = {...prev}
            copy[key] = val;
            return copy;
          });
          setVal('');
          submitCount();
        }}
        onReset={() => {
          setVal('');
          setInfo(prev => ({...prev, val: ''}));
          submitCount();
        }}
      >
      <input 
          placeholder={placeholder}
          className='border border-teal-600 rounded-sm p-2 font-semibold mr-10 w-80'
          value={val}
          onChange={(e) => {
            setVal(e.target.value);
          }}
        />
        <button 
          className='border border-teal-600 rounded-sm w-24 h-18 mr-4 p-2'
        >
          OK
        </button>
        <button className='border border-teal-600 rounded-sm w-24 h-18 p-2' type='reset'>
          Скасувати
        </button>
      </form>
    </div>
  );
};

