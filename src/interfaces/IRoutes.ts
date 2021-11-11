export interface IRoutes {
  name: string;
  path: string;
  component: any;
}

export interface IRouteSidebar extends IRoutes {
  icon?: any;
  childRoute?: IRoutes[];
}
