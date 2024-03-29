export interface IGame {
    idGame?: number;
    nameGame: string;
    price: number;
    discount?: number | null;
    description: string;
    linkImage: string;
    gamePlatform?: IPlatform[];
    stores?: IStore[];
  }
  
  export interface IPlatform {
    idPlatform?: number;
    namePlatform: string;
  }
  
  export interface IStore {
    idStore?: number;
    adress: string;
    sales_quantity: number;
    nameStore: string;
    linkMap: string;
  }