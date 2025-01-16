import { useState, useRef } from 'react';
import { MdError } from 'react-icons/md';
import Button from './common/Button';

interface ModalProps {
  closeModal: () => void;
}
export default function Modal({ closeModal }: ModalProps) {
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const [contentHeight, setContentHeight] = useState(120);

  const onClickSaveButton = () => {
    alert('게시글 게시하기');
    closeModal();
  };

  // textarea의 높이를 120~280 사이가 되도록
  const onInputHeight = () => {
    if (!contentRef.current) return;
    const newHeight = Math.min(contentRef.current.scrollHeight, 280);
    setContentHeight(newHeight);
  };

  return (
    <div className="w-[32rem] h-screen m-auto fixed flex items-center justify-center inset-0 z-50 bg-black-50">
      <dialog className="w-[27rem] p-[1.6rem] block relative bg-transparent rounded-xl">
        <div className="w-full flex justify-between items-center">
          <p className="w-[11.4rem] px-[.4rem] py-[.2rem] flex justify-center items-center gap-[.4rem] text-4 text-red rounded-2xl bg-white-50">
            <MdError />이 글은 30분 후 폭파됩니다.
          </p>
          <div className="w-[8.8rem] flex justify-center gap-[.8rem]">
            <Button type="modal" iconName="paper" onClick={onClickSaveButton} />
            <Button type="modal" iconName="xMark" onClick={closeModal} />
          </div>
        </div>
        <div className="w-full p-[1rem] mt-[1.2rem] bg-white rounded-xl">
          <input
            className="block w-full p-[.4rem] border-b border-b-green-5 text-green-5 text-2 placeholder:text-green-1"
            type="text"
            name="title"
            id="title"
            maxLength={20}
            placeholder="20자 이내 제목을 입력해주세요"
          />
          <textarea
            ref={contentRef}
            style={{ height: `${contentHeight}px` }}
            className="block w-full max-h-[28rem] p-[.4rem] text-green-5 text-3 placeholder:text-green-1 resize-none overflow-auto"
            id="content"
            maxLength={1000}
            placeholder="1,000자 이내 내용을 입력해주세요"
            onInput={onInputHeight}></textarea>
        </div>
      </dialog>
    </div>
  );
}
