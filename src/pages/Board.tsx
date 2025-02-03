import { useState, useEffect } from 'react';
import Layout from '../components/common/Layout';
import BoardButtonList from '../components/BoardButtonList';
import Modal from '../components/Modal';
import BulletinList from '../components/common/BulletinList';

export default function Board() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isBoardButtonList, setIsBoardButtonList] = useState(false);

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
      <BulletinList />
    </Layout>
  );
}
