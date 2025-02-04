// src/utils/timeUtils.ts

export function getRemainingTime(createTime?: string) {
  if (!createTime) return { text: '펑', nextUpdate: null };

  const createdAtMs = new Date(createTime).getTime();
  const expiresAtMs = createdAtMs + 30 * 60 * 1000;
  const nowMs = Date.now();
  const remainingMs = expiresAtMs - nowMs;

  if (remainingMs <= 0) return { text: '펑', nextUpdate: null };

  const remainingSec = Math.floor(remainingMs / 1000);
  const nextUpdate = remainingSec < 60 ? 1000 : 60000;

  return {
    text:
      remainingSec < 60
        ? `${remainingSec}초 남음`
        : `${Math.floor(remainingSec / 60)}분 남음`,
    nextUpdate,
  };
}

export function getRemainingTimeForBoardDetail(createTime: string) {
  const createdAt = new Date(createTime).getTime();
  const expiresAt = createdAt + 30 * 60 * 1000;
  const now = Date.now();
  const remainingMs = expiresAt - now;

  if (remainingMs <= 0) return '펑';

  const remainingSec = Math.floor(remainingMs / 1000);
  if (remainingSec < 60) return `${remainingSec}초 남음`;

  const remainingMin = Math.floor(remainingSec / 60);
  return `${remainingMin}분 남음`;
}
