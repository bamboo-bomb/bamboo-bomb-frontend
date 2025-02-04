import { useEffect, useState } from 'react';
import { ReactionListTextType } from '../../types/Bulletin';
import EmojiList from './EmojiList';
import { getRemainingTimeForBoardDetail } from '../../utils/timeUtils';

interface BulletinProps {
  title: string;
  content: string;
  createTime?: string;
  reactions: ReactionListTextType;
  userReaction: null | keyof ReactionListTextType;
  isBoardDetail?: boolean;
  isShowTime?: boolean;
  isShowZero?: boolean;
}

export default function Bulletin({
  title,
  content,
  createTime,
  reactions,
  userReaction,
  isBoardDetail = false,
  isShowTime = false,
  isShowZero = false,
}: BulletinProps) {
  const [remainingTime, setRemainingTime] = useState(
    getRemainingTimeForBoardDetail(createTime)
  );

  useEffect(() => {
    if (!createTime) return;

    const interval = setInterval(() => {
      setRemainingTime(getRemainingTimeForBoardDetail(createTime));
    }, 1000);

    return () => clearInterval(interval);
  }, [createTime]);

  return (
    <div
      className={`w-full px-[1.2rem] py-[.8rem] flex justify-center items-center flex-col ${
        isBoardDetail
          ? 'gap-[1.6rem]'
          : 'gap-[.8rem] border-b border-b-black-20 cursor-pointer'
      }`}>
      <p className="w-full flex justify-between text-green-5">
        <span className="text-2">{title}</span>
        {isShowTime && remainingTime && (
          <span className="text-green-1">{remainingTime}</span>
        )}
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
