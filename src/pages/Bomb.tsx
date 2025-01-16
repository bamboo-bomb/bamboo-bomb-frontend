import { IoIosLink } from 'react-icons/io';
import Layout from '../components/common/Layout';

export default function Bomb() {
  return (
    <Layout>
      <article className="w-full h-[calc(100vh-48px)] py-[7.8rem] flex justify-center items-center flex-col gap-[4rem]">
        <img src="/images/bamboo.svg" alt="" />
        <div>
          <h1 className="text-[2rem] text-center mb-[2rem]">
            이 대나무는 폭파 되었습니다.
          </h1>
          <a
            href="/board"
            className="w-full flex justify-center items-center gap-[.4rem] text-green-2 text-[1rem] underline">
            <IoIosLink />
            대나무숲으로 이동하기
          </a>
        </div>
      </article>
    </Layout>
  );
}
