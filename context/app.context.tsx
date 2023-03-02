import { MenuItem } from "@/interfaces/menu.interface";
import { TopLevelCategory } from "@/interfaces/page.interface";
import { createContext, PropsWithChildren, ReactNode, useState } from "react";
import { IAppContext } from "./app.interface.context";

export const AppContext = createContext<IAppContext>({menu: [], firstCategory:TopLevelCategory.Courses});

export const AppContextProvider = ({menu,firstCategory,children}:PropsWithChildren<IAppContext>):JSX.Element => {

    const [menuState, setMenuState] = useState<MenuItem[]>(menu);
    const setMenu = (newMenu:MenuItem[]) => {
        setMenuState(newMenu);
    }

    return (
        <AppContext.Provider value={{menu: menuState, firstCategory, setMenu}}>
            {children}
        </AppContext.Provider>
    );
};

