import { useLocation } from 'react-router-dom';
import Header from './header/Header';

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

  // TODO: isOwner의 유무 처리 필요 => 데이터베이스 있을 때
  const dynamicHeader =
    pathname.startsWith('/board/') && !renderHeader[pathname] ? (
      <Header title="대나무" isOwner />
    ) : null;

  return (
    <section className="w-[32rem] h-screen m-auto relative font-regular">
      {renderHeader[pathname] ?? dynamicHeader}
      {children}
    </section>
  );
}
