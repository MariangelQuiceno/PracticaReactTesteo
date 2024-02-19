import React from 'react'
import { Header } from '../../Layouts/Header/Header'
import { Logo } from '../../Logo/Logo'
import { Navbar } from '../../Navbar/Navbar'
import { Item } from '../../Items/Item'
import {MainHome} from '../../Layouts/MainHome/MainHome';
import  {DescriptionImgHome} from '../../DescriptionImgHome/DescriptionImgHome';
import {DescHome} from '../../DescHome/DescHome';
import './homeCss.css';

export const Home = () => {
  return (
    <div className="home-container"> 
      <Header>
        <Logo />
        <Navbar>
          <Item content="Inicio" />
          <Item content="Información" />
          <Item content="Proyectos" />
        </Navbar>
      </Header>
      <MainHome>
        <DescHome text="
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel mi lobortis nisl suscipit vulputate ac non metus. Quisque scelerisque porta diam eu condimentum. Nullam eleifend nibh quis porttitor tincidunt. Ut id lobortis nibh, vel tincidunt odio. Curabitur dolor metus, fermentum eget urna volutpat, venenatis accumsan tellus. Pellentesque ut erat non sapien luctus lobortis in at turpis. Nunc vulputate ex sit amet sem rutrum, lacinia faucibus tortor laoreet. Nullam efficitur, felis et suscipit feugiat, augue sem tempor sem, eget pellentesque odio nisl a sapien. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel mi lobortis nisl suscipit vulputate ac non metus. Quisque scelerisque porta diam eu condimentum. Nullam eleifend nibh quis porttitor tincidunt. Ut id lobortis nibh, vel tincidunt odio. Curabitur dolor metus, fermentum eget urna volutpat, venenatis accumsan tellus. Pellentesque ut erat non sapien luctus lobortis in at turpis. Nunc vulputate ex sit amet sem rutrum, lacinia faucibus tortor laoreet. Nullam efficitur, felis et suscipit feugiat, augue sem tempor sem, eget pellentesque odio nisl a sapien.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel mi lobortis nisl suscipit vulputate ac non metus. Quisque scelerisque porta diam eu condimentum. Nullam eleifend nibh quis porttitor tincidunt. Ut id lobortis nibh, vel tincidunt odio. Curabitur dolor metus, fermentum eget urna volutpat, venenatis accumsan tellus. Pellentesque ut erat non sapien luctus lobortis in at turpis. Nunc vulputate ex sit amet sem rutrum, lacinia faucibus tortor laoreet. Nullam efficitur, felis et suscipit feugiat, augue sem tempor sem, eget pellentesque odio nisl a sapien." />
        <DescriptionImgHome />
      </MainHome>
    </div>
  );
};
