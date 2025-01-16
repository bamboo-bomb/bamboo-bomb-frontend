import EmojiList from './EmojiList';

interface BulletinProps {
  title: string;
  content: string;
  isShowTime?: boolean;
  time: number;
}

export default function Bulletin(props: BulletinProps) {
  const { title, content, isShowTime = false, time } = props;
  return (
    <li className="w-full px-[1.2rem] py-[.8rem] flex justify-center items-center flex-col gap-[.8rem] text-[1.2rem] border-b border-b-black-20">
      <p className="w-full flex justify-between text-green-5">
        <span>{title}</span>
        {isShowTime && <span className="text-green-1">{time}분 남음</span>}
      </p>
      <p className="w-full line-clamp-2 text-[1rem]">{content}</p>
      <EmojiList />
    </li>
  );
}
