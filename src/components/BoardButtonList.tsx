import { useState } from 'react';
import Button from './common/Button';

interface BoardButtonListProps {
  openModal: () => void;
}
export default function BoardButtonList({ openModal }: BoardButtonListProps) {
  const [isOpen, setIsOpen] = useState(false);

  const onClickPlus = () => setIsOpen(true);
  const onClickXMark = () => setIsOpen(false);
  const onClickHome = () => (window.location.href = '/mypage');

  return (
    <div className="absolute bottom-[2rem] right-[2rem]">
      {isOpen ? (
        <div className="w-[3.4rem] h-[12.6rem] flex flex-col gap-[1.2rem]">
          <Button type="board" iconName="pen" onClick={openModal} />
          <Button type="board" iconName="home" onClick={onClickHome} />
          <Button type="board" iconName="xMark" onClick={onClickXMark} />
        </div>
      ) : (
        <Button type="board" iconName="plus" onClick={onClickPlus} />
      )}
    </div>
  );
}
