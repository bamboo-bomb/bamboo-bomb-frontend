import { ReactionListTextType } from '../../types/Bulletin';
import EmojiList from './EmojiList';

interface BulletinProps {
  title: string;
  content: string;
  time?: number | string;
  reactions: ReactionListTextType;
  userReaction: null | keyof ReactionListTextType;
  isBoardDetail?: boolean;
  isShowTime?: boolean;
  isShowZero?: boolean;
}

// TODO: time에 대한 시간 처리 해야함
export default function Bulletin(props: BulletinProps) {
  const {
    title,
    content,
    time,
    reactions,
    userReaction,
    isBoardDetail = false,
    isShowTime = false,
    isShowZero = false,
  } = props;

  return (
    <div
      className={`w-full px-[1.2rem] py-[.8rem] flex justify-center items-center flex-col ${
        isBoardDetail
          ? 'gap-[1.6rem]'
          : 'gap-[.8rem] border-b border-b-black-20 cursor-pointer'
      }`}>
      <p className="w-full flex justify-between text-green-5">
        <span className="text-2">{title}</span>
        {isShowTime && <span className="text-green-1">{time}분 남음</span>}
      </p>
      <p className={`w-full text-3 ${isBoardDetail || 'line-clamp-2'}`}>
        {content}
      </p>
      <EmojiList
        isShowZero={isShowZero}
        reactions={reactions}
        userReaction={userReaction}
      />
    </div>
  );
}
