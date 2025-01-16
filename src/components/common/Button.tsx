import { GoPencil } from 'react-icons/go';
import { GoHome } from 'react-icons/go';
import { HiOutlineXMark } from 'react-icons/hi2';
import { GoPlus } from 'react-icons/go';
import { IoIosArrowBack } from 'react-icons/io';
import { BiSolidTrash } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { TbSend } from 'react-icons/tb';

interface ButtonProps {
  type: 'board' | 'modal' | 'delete' | 'header' | 'logout' | 'emoji';
  iconName?:
    | 'pen'
    | 'home'
    | 'xMark'
    | 'plus'
    | 'dot'
    | 'trash'
    | 'arrow'
    | 'paper';
  content?: string;
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  const { type, iconName, content, onClick } = props;

  const iconList = {
    pen: <GoPencil />,
    home: <GoHome />,
    xMark: <HiOutlineXMark />,
    plus: <GoPlus />,
    dot: <BsThreeDotsVertical />,
    trash: (
      <>
        <BiSolidTrash />
        <span>삭제하기</span>
      </>
    ),
    arrow: <IoIosArrowBack />,
    paper: <TbSend />,
  };

  const classList = {
    board: `p-[.8rem] rounded-3xl text-[1.8rem] ${
      iconName === 'xMark'
        ? 'bg-green-1 text-green-3'
        : 'bg-green-3 text-green-1'
    }`,
    modal: `px-[1.5rem] py-[.8rem] rounded-2xl text-3 text-green-5 ${
      iconName === 'xMark' ? 'bg-green-1' : 'bg-green-2'
    }`,
    delete:
      'w-full p-[.8rem] rounded-xl flex justify-center items-center gap-[.4rem] bg-green-5 text-3',
    header: 'bg-inherit text-green-1 text-[1.8rem]',
    logout: 'px-[.8rem] py-[.4rem] bg-green-1 text-green-5 rounded-2xl ',
    emoji:
      'p-[.4rem] bg-green-1 text-green-3 rounded-2xl border border-green-1 active:border-green-4 focus:border-green-4',
  };

  return (
    <button type="button" className={classList[type]} onClick={onClick}>
      {iconName && iconList[iconName]}
      {content && <span>{content}</span>}
    </button>
  );
}
