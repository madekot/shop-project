import { useContext, useEffect } from 'react';
import { ShopContext } from '../context';

function Alert() {
  const { setAlertName, alertName } = useContext(ShopContext);

  function closeAlert() {
    setAlertName('');
  }

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);

    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-next-line
  }, [alertName]);

  return (
    <div id="toast-container">
      <div className="toast">{alertName} добавлен в корзину</div>
    </div>
  );
}

export default Alert;
