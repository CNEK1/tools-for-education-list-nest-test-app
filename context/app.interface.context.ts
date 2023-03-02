import { MenuItem } from "@/interfaces/menu.interface";
import { TopLevelCategory } from "@/interfaces/page.interface";

export interface IAppContext{
    menu:MenuItem[];
    firstCategory:TopLevelCategory;
    setMenu?: (newMenu: MenuItem[]) => void;
}
