import Layout from '../components/common/Layout';
import UserProfile from '../components/UserProfile';
import Bulletin from '../components/common/Bulletin';
import dummy from '../dummy/bulletin.json';

export default function BoardDetail() {
  return (
    <Layout>
      <UserProfile />
      <Bulletin
        title={dummy[1].title}
        content={dummy[1].content}
        time={dummy[1].time}
        isBoardDetail
        isShowZero
      />
    </Layout>
  );
}
