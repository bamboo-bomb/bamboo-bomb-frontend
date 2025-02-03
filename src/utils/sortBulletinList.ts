import { BulletinType, ReactionListTextType } from '../types/Bulletin';

const sortedView = (data: BulletinType[]): BulletinType[] => {
  return data.sort((a, b) => b.viewCount - a.viewCount);
};

const sum = (reactions: ReactionListTextType): number => {
  const total = Object.values(reactions).reduce(
    (acc: number, cur: number) => acc + cur,
    0
  );
  return total;
};

const sortPopular = (data: BulletinType[]): BulletinType[] => {
  return data.sort((a, b) => sum(b.reactions) - sum(a.reactions));
};

const sortedDefault = (data: BulletinType[]): BulletinType[] => {
  return data.sort(
    (a, b) =>
      new Date(b.timestamp.date).getTime() -
      new Date(a.timestamp.date).getTime()
  );
};

export const sortedDefaultByOwner = (
  userId: string,
  data: BulletinType[]
): BulletinType[] => {
  return data.filter((item) => item.authorId === userId);
};

export const sortBulletinList = (
  condition: 'default' | 'view' | 'popular' = 'default',
  data: BulletinType[]
): BulletinType[] => {
  switch (condition) {
    case 'popular':
      return sortPopular(data);
    case 'view':
      return sortedView(data);
    default:
      return sortedDefault(data);
  }
};
