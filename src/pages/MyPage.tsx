import BulletinList from '../components/common/BulletinList';
import Layout from '../components/common/Layout';
import UserProfile from '../components/UserProfile';

export default function MyPage() {
  return (
    <Layout>
      <UserProfile isMypage />
      <BulletinList isMyPage />
    </Layout>
  );
}
