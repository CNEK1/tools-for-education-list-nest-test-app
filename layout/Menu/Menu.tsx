import { AppContext } from "@/context/app.context";
import { FirstLevelMenuItem, PageItem } from "@/interfaces/menu.interface";
import { useContext } from "react";
import HatIcon from "./icons/Hat.svg"
import CloudIcon from "./icons/Cloud.svg"
import BookIcon from "./icons/Book.svg"
import BoxIcon from "./icons/Box.svg"
import { TopLevelCategory } from "@/interfaces/page.interface";
import styles from './Menu.module.css';
import cn from 'classnames';

const firstLevelMenu:FirstLevelMenuItem[] = [
    {route: "courses", name:"Курсы", icon: <HatIcon/>, id: TopLevelCategory.Courses},
    {route: "services", name:"Сервисы", icon: <CloudIcon/>, id: TopLevelCategory.Services},
    {route: "books", name:"Книги", icon: <BookIcon/>, id: TopLevelCategory.Books},
    {route: "products", name:"Продукты", icon: <BoxIcon/>, id: TopLevelCategory.Products},
];

function Menu(): JSX.Element {
    const {menu,setMenu,firstCategory} = useContext(AppContext)
    
    const buildFirstLevel = ():JSX.Element => {
        return (
            <>
            {firstLevelMenu.map(m => (
                <div key = {m.route}>
                    <a href={`/${m.route}`}>
                        <div className={cn(styles.firstLevel, {
                            [styles.firstLevelActive]: m.id == firstCategory
                        })}>
                            {m.icon}
                            <span>
                                {m.name}
                            </span>
                        </div>
                    </a>
                    {m.id == firstCategory && buildSecondLevel(m)}
                </div>
            ))}
            </>
        );
    }


    const buildSecondLevel = (menuItem: FirstLevelMenuItem):JSX.Element => {
        return (
          <div>
            {menu.map(m => (
              <div key={m._id.secondCategory}>
                <div className={styles.secondLevel}>
                  {m._id.secondCategory}
                </div>
                <div className={cn(styles.secondLevelBlock, {
                  [styles.secondLevelBlockOpened]: m.isOpened
                })}>
                  {buildThirdLevel(m.pages, menuItem.route)}
                </div>
              </div>
            ))}
          </div>
        );
      };
      
      const buildThirdLevel = (pages: PageItem[], route: string):JSX.Element[] => {
        return (
            pages.map(p => (
              <a
                key={p.alias}
                href={`/${route}/${p.alias}`}
                className={cn(styles.thirdLevel, {
                  [styles.thirdLevelActive]: true
                })}
              >
                {p.category}
              </a>
            ))
        
        );
      };



    return( 
    <div className={styles.menu}>
        {buildFirstLevel()}
    </div>
    );
}

export default Menu;
