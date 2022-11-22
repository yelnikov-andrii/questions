import React from 'react';

interface InfoType {
  year: string;
  city: string;
  sport: string;
}

interface Props {
  info: InfoType;
}

export const Info: React.FC <Props> = ({info}) => {
  const countries = [
    {
      name: 'України',
      city: 'Київ'
    },
    {
      name: 'США',
      city: 'Вашингтон'
    },
    {
      name: 'Великобританії',
      city: 'Лондон'
    }
  ];
  const sports = [
    {
      name: 'Бокс',
      person: 'Кличко'
    },
    {
      name: 'Футбол',
      person: 'Шевченко'
    },
    {
      name: 'ММА',
      person: 'МакГрегор'
    }
  ];

  const currentTime = new Date();
  return (
    <ul>
      <li>
        {isNaN(+info.year) ? (
          <span>
            Ви ввели некоректне число
          </span>
        ) : 
        info.year === '' ? (
          <span>
            Ви не захотіли відповідати на це питання
          </span>
        ) :  (
          <span>
            Твій вік: {currentTime.getFullYear() - +info.year}
          </span>
        )}
      </li>
      <li>
        {info.city === '' ? (
          <span>
            Ви не захотіли відповідати на це питання
          </span>
        ) : countries.some(country => country.city.toLowerCase() === info.city.toLowerCase()) ? (
          <span>
            Ти живеш у столиці {countries.find(country => country.city === info.city)?.name}?
          </span>
        ) : (
          <span>
            Ти живеш у місті {info.city}
          </span>
        )}
      </li>
      <li>
        {info.sport === '' ? (
          <span>
            Ви не захотіли відповідати на це питання
          </span>
        ) : sports.some(sport => sport.name === info.sport) ? (
          <span>
            Ти хочеш бути таким як {sports.find(sport => sport.name.toLowerCase() === info.sport.toLowerCase())?.person} ?
          </span>
        ) : (
          <span>
            Твій улюблений вид спорту {info.sport}
          </span>
        )}
      </li>
    </ul>
  );
};

