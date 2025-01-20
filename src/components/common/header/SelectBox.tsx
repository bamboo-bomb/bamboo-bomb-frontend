import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SelectBox() {
  const [sortBy, setSortBy] = useState('default');

  const navigate = useNavigate();

  const onChangeSelectBox = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const changedSortBy = e.target.value;
    navigate(`/board?sort=${changedSortBy}`);
    setSortBy(changedSortBy);
  };

  // TODO: sortBy 사용해서 데이터 20개씩 호출
  console.log('sortBy', sortBy);

  return (
    <select
      name="sort"
      id="sort"
      className="bg-inherit font-regular text-3"
      onChange={onChangeSelectBox}>
      <option value="default">기본</option>
      <option value="popular">인기순</option>
      <option value="view">조회순</option>
    </select>
  );
}
