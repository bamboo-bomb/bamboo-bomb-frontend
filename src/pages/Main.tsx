import Layout from '../components/common/Layout';

export default function Main() {
  const onClickLogin = () => alert('login');
  return (
    <Layout>
      <article className="w-full h-full py-[7.3rem] flex justify-center items-center gap-[4.4rem] flex-col">
        <h1 className="font-title text-[3rem]">임금님 귀는 당나귀 귀</h1>
        <img src="/images/logo.svg" alt="" />
        <button type="button" onClick={onClickLogin}>
          <img src="/images/login.svg" alt="네이버 로그인" />
        </button>
      </article>
    </Layout>
  );
}
