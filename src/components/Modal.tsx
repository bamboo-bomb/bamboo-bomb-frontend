import { useState, useRef } from 'react';
import { MdError } from 'react-icons/md';
import Button from './common/Button';

interface ModalProps {
  closeModal: () => void;
  closeBoardButtonList: () => void;
}

export default function Modal(props: ModalProps) {
  const { closeModal, closeBoardButtonList } = props;
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [contentHeight, setContentHeight] = useState(120);

  const isSaveButtonDisabled = title.trim() === '' || content.trim() === '';

  const onClickXMark = () => {
    closeModal();
    closeBoardButtonList();
  };

  const onClickSaveButton = () => {
    if (title.trim() === '') return alert('게시글 제목이 비어있습니다.');
    if (content.trim() === '') return alert('게시글 내용이 비어있습니다.');
    console.log('게시글 올리는 부분 작성 필요함');
    onClickXMark();
  };

  // textarea의 높이를 120~280 사이가 되도록
  const onInputHeight = () => {
    if (!contentRef.current) return;
    const newHeight = Math.min(contentRef.current.scrollHeight, 280);
    setContentHeight(newHeight);
  };

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);

  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setContent(e.target.value);

  return (
    <div className="w-[32rem] h-screen m-auto fixed flex items-center justify-center inset-0 z-50 bg-black-50">
      <dialog className="w-[27rem] p-[1.6rem] block relative bg-transparent rounded-xl">
        <div className="w-full flex justify-between items-center">
          <p className="w-[11.4rem] px-[.4rem] py-[.2rem] flex justify-center items-center gap-[.4rem] text-4 text-red rounded-2xl bg-white-50">
            <MdError />이 글은 30분 후 폭파됩니다.
          </p>
          <div className="w-[8.8rem] flex justify-center gap-[.8rem]">
            <Button
              kind="modal"
              iconName="paper"
              onClick={onClickSaveButton}
              disabled={isSaveButtonDisabled}
            />
            <Button kind="modal" iconName="xMark" onClick={onClickXMark} />
          </div>
        </div>
        <div className="w-full p-[1rem] mt-[1.2rem] bg-white rounded-xl">
          <input
            className="block w-full p-[.4rem] border-b border-b-green-5 text-green-5 text-2 placeholder:text-green-1"
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={onChangeTitle}
            minLength={1}
            maxLength={20}
            placeholder="20자 이내 제목을 입력해주세요"
          />
          <textarea
            ref={contentRef}
            style={{ height: `${contentHeight}px` }}
            className="block w-full max-h-[28rem] p-[.4rem] text-green-5 text-3 placeholder:text-green-1 resize-none overflow-auto"
            id="content"
            value={content}
            onChange={onChangeContent}
            minLength={1}
            maxLength={1000}
            placeholder="1,000자 이내 내용을 입력해주세요"
            onInput={onInputHeight}></textarea>
        </div>
      </dialog>
    </div>
  );
}
