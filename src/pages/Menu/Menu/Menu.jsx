import { Helmet } from 'react-helmet-async';
import Cover from '../../shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';
import desertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === 'dessert');
  const pizza = menu.filter((item) => item.category === 'pizza');
  const soup = menu.filter((item) => item.category === 'soup');
  const salad = menu.filter((item) => item.category === 'salad');
  const offered = menu.filter((item) => item.category === 'offered');

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | menu</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      {/**main cover */}
      <Cover img={menuImg} title="Our Menu"></Cover>
      <SectionTitle
        subHeading="Don't miss"
        heading="Today's offer"
      ></SectionTitle>

      {/**offered cover */}
      <MenuCategory items={offered}></MenuCategory>
      {/**deserts */}
      <MenuCategory
        items={dessert}
        title="desert"
        coverImg={desertImg}
      ></MenuCategory>
      {/**pizza category */}
      <MenuCategory
        items={pizza}
        title="pizza"
        coverImg={pizzaImg}
      ></MenuCategory>
      <MenuCategory
        items={salad}
        title="salad"
        coverImg={pizzaImg}
      ></MenuCategory>
      <MenuCategory items={soup} title="soup" coverImg={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
