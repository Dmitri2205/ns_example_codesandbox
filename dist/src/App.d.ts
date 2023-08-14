/// <reference types="react" />
type Company = {
    bs: string;
    catchPhrase: string;
    name: string;
};
export type TUser = {
    id: number;
    email: string;
    name: string;
    phone: string;
    username: string;
    website: string;
    company: Company;
    address: any;
};
export interface IUserInfoProps {
    user: TUser;
}
declare function App(): JSX.Element;
export default App;
