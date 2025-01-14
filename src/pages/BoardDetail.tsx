import { useParams } from 'react-router-dom';

export default function BoardDetail() {
  const { id } = useParams();
  return (
    <>
      <h1>게시글:{id}</h1>
    </>
  );
}
