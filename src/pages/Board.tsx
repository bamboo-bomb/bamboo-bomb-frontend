import { useState, useEffect } from 'react';
import Layout from '../components/common/Layout';
import Bulletin from '../components/common/Bulletin';
import dummy from '../dummy/bulletin.json';
import BoardButtonList from '../components/BoardButtonList';
import Modal from '../components/Modal';

export default function Board() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const closeModal = () => setIsOpenModal(false);
  const openModal = () => setIsOpenModal(true);

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
      {isOpenModal && <Modal closeModal={closeModal} />}
      <BoardButtonList openModal={openModal} />
      <ul className="overflow-y-auto h-[calc(100%-4.8rem)]">
        {dummy.map((item) => (
          <Bulletin
            key={item.id}
            title={item.title}
            content={item.content}
            time={item.time}
          />
        ))}
      </ul>
    </Layout>
  );
}
