import Button from './Button';

const Emoji = ['👍', '❤️', '😨', '😀', '😡'];
const count = ['1', '0', '99+', '999+', '99+'];

export default function EmojiList() {
  const filteredEmoji = Emoji.filter((_, index) => count[index] !== '0');
  const filteredCount = count.filter((item) => item !== '0');

  return (
    <ul className="w-full flex justify-start gap-[.8rem]">
      {filteredEmoji.map((item, index) => (
        <li key={index}>
          <Button type="emoji" content={`${item} ${filteredCount[index]}`} />
        </li>
      ))}
    </ul>
  );
}
