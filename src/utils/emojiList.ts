export const formatReactionCount = (count: number) => {
  const limitList = [
    { limit: 10_000, label: '9999+' },
    { limit: 1_000, label: '999+' },
    { limit: 100, label: '99+' },
  ];

  for (const { limit, label } of limitList) {
    if (count >= limit) return label;
  }
  return count;
};

export const hiddenReactionZero = (isShowZero, reactions) => {
  if (!isShowZero) return reactions;
  return Object.fromEntries(
    Object.entries(reactions).filter(([_, count]) => count !== 0)
  );
};

export const emojiList = {
  LIKE: '👍',
  HEART: '❤️',
  SURPRISED: '😨',
  LAUGH: '😀',
  ANGRY: '😡',
};
