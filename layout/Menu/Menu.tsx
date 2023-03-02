import { AppContext } from "@/context/app.context";
import { FirstLevelMenuItem, PageItem } from "@/interfaces/menu.interface";
import { useContext } from "react";
import HatIcon from "./icons/Hat.svg";
import CloudIcon from "./icons/Cloud.svg";
import BookIcon from "./icons/Book.svg";
import BoxIcon from "./icons/Box.svg";
import { TopLevelCategory } from "@/interfaces/page.interface";
import styles from "./Menu.module.css";
import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";


const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: "courses",
    name: "Курсы",
    icon: <HatIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: "services",
    name: "Сервисы",
    icon: <CloudIcon />,
    id: TopLevelCategory.Services,
  },
  {
    route: "books",
    name: "Книги",
    icon: <BookIcon />,
    id: TopLevelCategory.Books,
  },
  {
    route: "products",
    name: "Продукты",
    icon: <BoxIcon />,
    id: TopLevelCategory.Products,
  },
];

function Menu(): JSX.Element {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const router = useRouter();
  

  const openSecondLevel = (secondCategory:string) => {
    setMenu && setMenu(menu.map(m => {
    if(m._id.secondCategory == secondCategory){
        m.isOpened = !m.isOpened;
      }
      return m;
    }))
  };


  const buildFirstLevel = (): JSX.Element => {
    return (
      <>
        {firstLevelMenu.map((m) => (
          <div key={m.route}>
            <Link  href={`/${m.route}`}>
              <div>
                <div
                  className={cn(styles.firstLevel, {
                    [styles.firstLevelActive]: m.id == firstCategory,
                  })}
                >
                  {m.icon}
                  <span>{m.name}</span>
                </div>
              </div>
            </Link>
            {m.id == firstCategory && buildSecondLevel(m)}
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem): JSX.Element => {
    return (
      <div className={styles.secondBlock}>
        {menu.map((m) => {
          if(m.pages.map(p => p.alias).includes(router.asPath.split("/")[2])){
            m.isOpened = true;
          }
          return(
            <div key={m._id.secondCategory}>
            <div className={styles.secondLevel} onClick ={ () => openSecondLevel(m._id.secondCategory)}>{m._id.secondCategory}</div>
            <div
              className={cn(styles.secondLevelBlock, {
                [styles.secondLevelBlockOpened]: m.isOpened,
              })}
            >
              {buildThirdLevel(m.pages, menuItem.route)}
            </div>
          </div>
          );

  })}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string): JSX.Element[] => {
    return pages.map((p) => (
      <Link href={`/${route}/${p.alias}`}>
        <div
          key={p.alias}
          className={cn(styles.thirdLevel, {
            [styles.thirdLevelActive]: `/${route}/${p.alias}` == router.asPath,
          })}
        >
          {p.category}
        </div>
      </Link>
    ));
  };

  return <div className={styles.menu}>{buildFirstLevel()}</div>;
}

export default Menu;
