import { useParams } from 'react-router-dom';
import Layout from '../components/common/Layout';

export default function BoardDetail() {
  const { id } = useParams();
  return (
    <Layout>
      <h1>게시글:{id}</h1>
    </Layout>
  );
}
