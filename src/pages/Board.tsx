import { useState, useEffect } from 'react';
import Layout from '../components/common/Layout';
import Bulletin from '../components/common/Bulletin';
import dummy from '../dummy/bulletin.json';
import BoardButtonList from '../components/BoardButtonList';
import Modal from '../components/Modal';
import { useNavigate } from 'react-router-dom';

export default function Board() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isBoardButtonList, setIsBoardButtonList] = useState(false);
  const navigate = useNavigate();
  const toggleModal = () => setIsOpenModal(!isOpenModal);
  const closeBoardButtonList = () => setIsBoardButtonList(false);
  const openBoardButtonList = () => setIsBoardButtonList(true);

  // 게시글 모달을 열면 스크롤 비활성화, 닫으면 스크롤 활성화
  useEffect(() => {
    if (isOpenModal) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpenModal]);

  const onClickBulletin = (id: string | number) => navigate(`/board/${id}`);

  return (
    <Layout>
      {isOpenModal && (
        <Modal
          closeModal={toggleModal}
          closeBoardButtonList={closeBoardButtonList}
        />
      )}
      <BoardButtonList
        openModal={toggleModal}
        openBoardButtonList={openBoardButtonList}
        closeBoardButtonList={closeBoardButtonList}
        isBoardButtonList={isBoardButtonList}
      />
      <ul className="overflow-y-auto h-[calc(100%-4.8rem)]">
        {dummy.map((item) => (
          <li key={item.id} onClick={() => onClickBulletin(item.id)}>
            <Bulletin
              title={item.title}
              content={item.content}
              time={item.time}
              reactions={item.reactions}
              isShowZero
              userReaction={item.userReactions?.[item.authorId] ?? null}
            />
          </li>
        ))}
      </ul>
    </Layout>
  );
}
