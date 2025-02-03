import { useLocation } from 'react-router-dom';
import Header from './header/Header';
import dummy from '../../dummy/bulletin.json';
interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { pathname } = useLocation();

  const renderHeader: Record<string, JSX.Element | null> = {
    '/': null,
    '/board': <Header title="대나무숲" isBoard />,
    '/mypage': <Header title="해우소" />,
    '/bomb': <Header title="💣" />,
  };

  // TODO: userId는 로그인한 유저의 _id
  const userId = '자몽허니블랙티';

  const pathPartList = pathname.split('/');
  const postId = pathPartList[pathPartList.length - 1];
  const isOwner = !!dummy.find(
    (item) => item.id === postId && item.authorId === userId
  );
  const dynamicHeader =
    pathname.startsWith('/board/') && !renderHeader[pathname] ? (
      <Header title="대나무" isOwner={isOwner} />
    ) : null;

  return (
    <section className="w-[32rem] h-screen m-auto relative font-regular">
      {renderHeader[pathname] ?? dynamicHeader}
      {children}
    </section>
  );
}
