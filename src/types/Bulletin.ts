export interface ReactionListTextType {
  LIKE: number;
  HEART: number;
  SURPRISED: number;
  LAUGH: number;
  ANGRY: number;
}

export interface ReactionListEmojiType {
  '👍': number | string;
  '❤️': number | string;
  '😨': number | string;
  '😀': number | string;
  '😡': number | string;
}

interface TimeStamp {
  date: string;
}

interface UserReactions {
  [key: string]: 'LIKE' | 'HEART' | 'SURPRISED' | 'LAUGH' | 'ANGRY' | null;
}

export interface BulletinType {
  id: string;
  title: string;
  content: string;
  timestamp: TimeStamp;
  authorId: string;
  viewCount: number;
  reactions: ReactionListTextType;
  userReactions: UserReactions;
}
