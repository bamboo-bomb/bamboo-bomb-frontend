import { useState } from 'react';
import { ReactionListTextType } from '../../types/Bulletin';
import Button from './Button';
import {
  emojiList,
  formatReactionCount,
  hiddenReactionZero,
} from '../../utils/emojiList';

interface EmojiListProps {
  isShowZero?: boolean;
  reactions: ReactionListTextType;
  userReaction: string | null;
}

export default function EmojiList(props: EmojiListProps) {
  const { isShowZero, reactions, userReaction } = props;

  const [reactionList, setReactionList] = useState(reactions);
  const [selected, setSelected] = useState<keyof ReactionListTextType | null>(
    userReaction || null
  );

  const onClickEmojiButton = (
    name: keyof ReactionListTextType,
    e: React.MouseEvent
  ) => {
    e.stopPropagation();
    setReactionList((prev) => {
      const newReactions = { ...prev };

      // 이모지 선택 취소 시 count 감소 & 현재 상태 null
      if (selected === name) {
        newReactions[name] = Math.max(0, prev[name] - 1);
        setSelected(null);
      }
      // 이전 선택이 있었다면 이전 count 감소, 현재 선택 count 증가 & 현재 상태 변경
      else {
        if (selected) newReactions[selected] = Math.max(0, prev[selected] - 1);
        newReactions[name] = prev[name] + 1;
        setSelected(name);
      }
      // TODO: DB에 현재 reactions 저장
      return newReactions;
    });
  };

  const filteredReactionList = hiddenReactionZero(isShowZero, reactionList);

  return (
    <ul className="w-full flex justify-start gap-[.8rem]">
      {Object.entries(filteredReactionList).map(([name, count]) => (
        <li key={name}>
          <Button
            kind="emoji"
            content={`${emojiList[name]} ${formatReactionCount(count)}`}
            className={`flex items-center justify-center gap-2 ${
              selected === name ? 'border-green-4' : 'border-green-1'
            }`}
            onClick={(e) => onClickEmojiButton(name as keyof ReactionsType, e)}
          />
        </li>
      ))}
    </ul>
  );
}
