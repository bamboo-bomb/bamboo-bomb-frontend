import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../Button';
import SelectBox from './SelectBox';

interface HeaderProps {
  title: '대나무' | '대나무숲' | '해우소' | '💣';
  isBoard?: boolean;
  isOwner?: boolean;
}

export default function Header(props: HeaderProps) {
  const { title, isBoard = false, isOwner = false } = props;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const onClickArrowButton = () => {
    if (location.pathname.includes('/bomb')) return navigate(-2);
    return navigate(-1);
  };

  const onClickDot3 = () => setIsDropdownOpen(true);

  const onClickDelete = () => {
    setIsDropdownOpen(false);
    alert('trash');
    // TODO: 게시글 삭제 요청
    navigate(-1);
  };

  return (
    <header className="w-full p-[1.2rem] flex justify-between items-center bg-green-3 text-green-1 text-1 font-regular">
      <div className="w-[5.3rem] flex items-center">
        {isBoard || (
          <Button kind="header" iconName="arrow" onClick={onClickArrowButton} />
        )}
      </div>
      <h1>{title}</h1>
      <div className="w-[5.3rem] flex justify-end items-center relative">
        {isOwner && (
          <>
            <Button kind="header" iconName="dot" onClick={onClickDot3} />
            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-[0.4rem] w-[7.4rem]">
                <Button
                  kind="delete"
                  iconName="trash"
                  onClick={onClickDelete}
                />
              </div>
            )}
          </>
        )}
        {isBoard && <SelectBox />}
      </div>
    </header>
  );
}
