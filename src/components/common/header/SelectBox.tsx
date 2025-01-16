export default function SelectBox() {
  return (
    <select name="sort" id="sort" className="bg-inherit font-regular text-3">
      <option value="default">기본</option>
      <option value="popular">인기순</option>
      <option value="view">조회순</option>
    </select>
  );
}
