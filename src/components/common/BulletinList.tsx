import { useNavigate, useSearchParams } from 'react-router-dom';
import Bulletin from './Bulletin';
import dummy from '../../dummy/bulletin.json';
import {
  sortBulletinList,
  sortedDefaultByOwner,
} from '../../utils/sortBulletinList';
import { BulletinType } from '../../types/Bulletin';

interface BulletinListProps {
  isMyPage?: boolean;
}

export default function BulletinList({ isMyPage }: BulletinListProps) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const sortBy = searchParams.get('sort') as 'default' | 'view' | 'popular';

  const onClickBulletin = (id: string | number) => navigate(`/board/${id}`);

  // TODO: userId는 전역으로 관리 해야함
  const userId = '자몽허니블랙티';
  const data = isMyPage
    ? sortedDefaultByOwner(userId, dummy)
    : sortBulletinList(sortBy, dummy);

  return (
    <ul className="overflow-y-auto h-[calc(100%-4.8rem)]">
      {data.map((item: BulletinType) => (
        <li key={item.id} onClick={() => onClickBulletin(item.id)}>
          <Bulletin
            title={item.title}
            content={item.content}
            // time={item.time}
            reactions={item.reactions}
            userReaction={item.userReactions?.[item.authorId] ?? null}
            isShowZero
            isShowTime={isMyPage ? true : false}
          />
        </li>
      ))}
    </ul>
  );
}
