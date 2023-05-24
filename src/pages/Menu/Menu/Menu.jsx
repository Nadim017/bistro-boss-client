import { Helmet } from 'react-helmet-async';
import Cover from '../../shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | menu</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      <Cover img={menuImg} title="Our Menu"></Cover>
    </div>
  );
};

export default Menu;
