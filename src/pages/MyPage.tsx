import Bulletin from '../components/common/Bulletin';
import Layout from '../components/common/Layout';
import UserProfile from '../components/UserProfile';
import dummy from '../dummy/bulletin.json';

export default function MyPage() {
  return (
    <Layout>
      <UserProfile isMypage />
      <ul className="overflow-y-auto h-[calc(100%-10.1rem)]">
        {dummy.map((item) => (
          <Bulletin
            key={item.id}
            title={item.title}
            content={item.content}
            time={item.time}
            isShowTime
          />
        ))}
      </ul>
    </Layout>
  );
}
