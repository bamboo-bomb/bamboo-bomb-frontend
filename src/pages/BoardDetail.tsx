import Layout from '../components/common/Layout';
import UserProfile from '../components/UserProfile';
import Bulletin from '../components/common/Bulletin';
import dummy from '../dummy/bulletin.json';
import { useNavigate, useParams } from 'react-router-dom';

export default function BoardDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = dummy.find((item) => item.id.toString() === id);
  if (!post) navigate('/bomb');
  return (
    <Layout>
      <UserProfile time={30} />
      <Bulletin
        title={post.title}
        content={post.content}
        time={post.time}
        reactions={post.reactions}
        userReaction={post.userReactions?.[post?.authorId] ?? null}
        isBoardDetail
      />
    </Layout>
  );
}
