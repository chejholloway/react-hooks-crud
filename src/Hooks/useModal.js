import { useState } from 'react';

const useModal = (initialMode = false) => {
  const [isOpen, setOpen] = useState(initialMode);
  const [data, setData] = useState({});
    
  const toggle = () => setOpen(!isOpen);
  
  const toggleWithData = (data) => {
    toggle(); 
    setData({...data})
  }

  return {isOpen, toggle, toggleWithData, data};
};

export default useModal; 