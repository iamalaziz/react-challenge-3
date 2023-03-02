import React, { useState } from 'react';

const EasyScreen = () => {
  const getRandom = Math.floor(Math.random() * 10);
  const [select, setSelect] = useState(getRandom);

  const handleClick = (num) => {
    
  };

  return (
    <table>
      <tbody>
        <tr>
          <td
            className={select === 1 ? 'selected' : null}
            onClick={() => handleClick(1)}
          ></td>
          <td
            className={select === 2 ? 'selected' : null}
            onClick={() => handleClick(2)}
          ></td>
          <td
            className={select === 3 ? 'selected' : null}
            onClick={() => handleClick(3)}
          ></td>
        </tr>
        <tr>
          <td
            className={select === 4 ? 'selected' : null}
            onClick={() => handleClick(4)}
          ></td>
          <td
            className={select === 5 ? 'selected' : null}
            onClick={() => handleClick(5)}
          ></td>
          <td
            className={select === 6 ? 'selected' : null}
            onClick={() => handleClick(6)}
          ></td>
        </tr>
        <tr>
          <td
            className={select === 7 ? 'selected' : null}
            onClick={() => handleClick(7)}
          ></td>
          <td
            className={select === 8 ? 'selected' : null}
            onClick={() => handleClick(8)}
          ></td>
          <td
            className={select === 9 ? 'selected' : null}
            onClick={() => handleClick(9)}
          ></td>
        </tr>
      </tbody>
    </table>
  );
};

export default EasyScreen;
