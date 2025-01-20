import Button from './Button';

const emojiList = {
  '👍': '1',
  '❤️': '0',
  '😨': '99+',
  '😀': '999+',
  '😡': '99+',
};

interface EmojiListProps {
  isShowZero?: boolean;
}

export default function EmojiList({ isShowZero }: EmojiListProps) {
  const filteredEmojiList = Object.entries(emojiList).filter(
    ([_, count]) => isShowZero || count !== '0'
  );

  return (
    <ul className="w-full flex justify-start gap-[.8rem]">
      {filteredEmojiList.map(([emoji, count], index) => (
        <li key={index}>
          <Button type="emoji" content={`${emoji} ${count}`} />
        </li>
      ))}
    </ul>
  );
}
