import EmojiList from './EmojiList';
interface BulletinProps {
  title: string;
  content: string;
  isBoardDetail?: boolean;
  isShowTime?: boolean;
  isShowZero?: boolean;
  time: number | string;
}

export default function Bulletin(props: BulletinProps) {
  const {
    title,
    content,
    isBoardDetail = false,
    isShowTime = false,
    isShowZero = false,
    time,
  } = props;
  return (
    <div
      className={`w-full px-[1.2rem] py-[.8rem] flex justify-center items-center flex-col ${
        isBoardDetail
          ? 'gap-[1.6rem]'
          : 'gap-[.8rem] border-b border-b-black-20'
      }`}>
      <p className="w-full flex justify-between text-green-5">
        <span className="text-[1.2rem]">{title}</span>
        {isShowTime && <span className="text-green-1">{time}분 남음</span>}
      </p>
      <p
        className={`w-full text-[1rem] ${isBoardDetail ? '' : 'line-clamp-2'}`}>
        {content}
      </p>
      <EmojiList isShowZero={isShowZero} />
    </div>
  );
}
