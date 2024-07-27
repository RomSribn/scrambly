import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { BackIcon } from 'assets/icons';

const Header: React.FC = () => {
  const pathname = usePathname();
  const backToHomeLink = (
    <Link href="/" className="flex items-center">
      <BackIcon />
      <span>Back</span>
    </Link>
  );

  return <div className="flex items-center text-[#757575] py-3">{pathname === '/' ? 'Home' : backToHomeLink}</div>;
};

export default Header;
