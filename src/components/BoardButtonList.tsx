import Button from './common/Button';

interface BoardButtonListProps {
  isBoardButtonList: boolean;
  openBoardButtonList: () => void;
  closeBoardButtonList: () => void;
  openModal: () => void;
}

export default function BoardButtonList(props: BoardButtonListProps) {
  const {
    isBoardButtonList,
    openBoardButtonList,
    closeBoardButtonList,
    openModal,
  } = props;

  const onClickHome = () => (window.location.href = '/mypage');

  return (
    <div className="absolute bottom-[2rem] right-[2rem]">
      {isBoardButtonList ? (
        <ul className="w-[3.4rem] h-[12.6rem] flex flex-col gap-[1.2rem]">
          <li>
            <Button kind="board" iconName="pen" onClick={openModal} />
          </li>
          <li>
            <Button kind="board" iconName="home" onClick={onClickHome} />
          </li>
          <li>
            <Button
              kind="board"
              iconName="xMark"
              onClick={closeBoardButtonList}
            />
          </li>
        </ul>
      ) : (
        <Button kind="board" iconName="plus" onClick={openBoardButtonList} />
      )}
    </div>
  );
}
