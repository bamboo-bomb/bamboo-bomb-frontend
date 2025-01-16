import Button from './common/Button';

interface UserProfileProps {
  isMypage?: boolean;
}

export default function UserProfile({ isMypage }: UserProfileProps) {
  const classList = isMypage
    ? {
        cover: 'p-[1.2rem] border-b border-b-black-20',
        img: 'w-[2.8rem] h-[2.8rem]',
        name: 'text-[1rem]',
      }
    : {
        cover: 'p-[.8rem]',
        img: 'w-[2rem] h-[2rem]',
        name: 'text-[.8rem]',
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
            <span className="text-[.6rem] text-black-20">01/09 5:34</span>
          )}
        </p>
      </div>
      {isMypage ? (
        <Button type="logout" content="로그아웃" onClick={onClickLogout} />
      ) : (
        <span className="text-[.8rem] text-black-20">28분 남음</span>
      )}
    </div>
  );
}
