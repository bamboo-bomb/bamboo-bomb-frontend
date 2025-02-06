import Button from './common/Button';

interface UserProfileProps {
  isMypage?: boolean;
  time?: string;
  date?: string | undefined;
}

const formattedDate = (dateStr: string) => {
  const date = new Date(dateStr);

  if (isNaN(date.getTime())) return null;

  return `${
    date.getMonth() + 1
  }/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
};

export default function UserProfile(props: UserProfileProps) {
  const { isMypage = false, time, date } = props;
  const classList = isMypage
    ? {
        cover: 'p-[1.2rem] border-b border-b-black-20',
        img: 'w-[2.8rem] h-[2.8rem]',
        name: 'text-3',
      }
    : {
        cover: 'p-[.8rem]',
        img: 'w-[2rem] h-[2rem]',
        name: 'text-4',
      };

  const onClickLogout = () => alert('로그아웃');

  return (
    <div
      className={`w-full flex justify-between items-center ${classList.cover}`}>
      <div className="w-[10rem] flex justify-start items-center gap-[.8rem]">
        <img alt="" src="/images/profile.svg" className={classList.img} />
        <p className="w-full flex flex-col">
          <span className={classList.name}>지나가는 나그네</span>
          {isMypage || (
            <span className="text-5 text-black-20">
              {date && formattedDate(date)}
            </span>
          )}
        </p>
      </div>
      {isMypage ? (
        <Button kind="logout" content="로그아웃" onClick={onClickLogout} />
      ) : (
        <span className="text-4 text-black-20">{time}</span>
      )}
    </div>
  );
}
