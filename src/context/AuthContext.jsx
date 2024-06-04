import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(''); //현재 로그인한 유저 정보 담아둘 state

  const login = async (values) => {
    const res = await axios.post('백앤드 매핑 주소', values, {
      //백앤드에서 세션 방식 사용하기 때문에 withCredential: true로
      withCredentials: true
    });
    setCurrentUser(res.data);
    localStorage.setItem('currentUser', JSON.stringify(res.data)); //유저 정보를 로컬 스토리지에도 저장
  };

  const logout = async () => {
    await axios.get('백앤드 매핑 주소', {
      withCredentials: true
    });
    setCurrentUser('');
    localStorage.removeItem('currentUser'); //로그아웃시 로컬 스토리지에서 유저 정보 제거
  };

  useEffect(() => {
    //페이지 새로고침 해도 유저 정보 사라지지 않게
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
