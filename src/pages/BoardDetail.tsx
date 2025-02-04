import Layout from '../components/common/Layout';
import UserProfile from '../components/UserProfile';
import Bulletin from '../components/common/Bulletin';
import dummy from '../dummy/bulletin.json';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getRemainingTimeForBoardDetail } from '../utils/timeUtils';

export default function BoardDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = dummy.find((item) => item.id.toString() === id);
  if (!post) navigate('/bomb');
  const createTime = post?.timestamp.date;
  const [remainingTime, setRemainingTime] = useState(
    getRemainingTimeForBoardDetail(createTime)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(getRemainingTimeForBoardDetail(createTime));
    }, 1000);

    return () => clearInterval(interval);
  }, [createTime]);

  return (
    <Layout>
      <UserProfile date={post?.timestamp.date} time={remainingTime} />
      <Bulletin
        title={post.title}
        content={post.content}
        createTime={post?.timestamp.date}
        reactions={post.reactions}
        userReaction={post.userReactions?.[post?.authorId] ?? null}
        isBoardDetail
      />
    </Layout>
  );
}
