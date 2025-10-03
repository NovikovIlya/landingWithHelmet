import { Button } from 'antd';
import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [consentState, setConsentState] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Ключ для localStorage
  const STORAGE_KEY = 'cookieConsent';

  // Читаем значение из localStorage при монтировании
  useEffect(() => {
    try {
      const storedValue = localStorage.getItem(STORAGE_KEY);
      setConsentState(storedValue || '0');
    } catch (error) {
      console.error('Ошибка при чтении из localStorage:', error);
      setConsentState('0');
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Функция для сохранения в localStorage
  const saveToLocalStorage = (value: string) => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
      setConsentState(value);
    } catch (error) {
      console.error('Ошибка при записи в localStorage:', error);
      // Можно добавить уведомление пользователю об ошибке
    }
  };

  const handleAccept = () => {
    saveToLocalStorage('1');
  };
  
  // ВАЖНО: Добавляем условие для скрытия компонента
  if (isLoading || consentState === '1') {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-4 md:p-6 z-50 m-4 rounded-xl animate-fade-in">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p 
          className="flex-1"
          style={{
            fontFamily: '"PT Sans"',
            fontFeatureSettings: '"calt", "rlig"',
            fontSize: '18px',
            fontVariationSettings: 'normal',
            fontWeight: 300,
           
            lineHeight: '28px',
            color: '#6B7280' // сохраняем серый цвет
          }}
        >
         Продолжая пользоваться сайтом, вы соглашаетесь на обработку файлов cookie и других пользовательских данных в соответствии с{' '}
          <a 
            href="https://kpfu.ru/portal/docs/F722252292/pd_policy.pdf" 
            className="text-blue-500 hover:text-blue-600"
            style={{ fontWeight: 'inherit' }} // наследуем вес шрифта от родителя
          >
           политикой конфиденциальности
          </a>
          . Заблокировать использование cookies сайтом можно в настройках браузера.
        </p>
        <Button
          onClick={handleAccept}
          type='primary'
          size='large'
          className=""
        >
          Понятно
        </Button>
      </div>
    </div>
  );
};

export default CookieConsent;