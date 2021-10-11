export interface IPackage {
  name: string;
  version: string;
  dependencies?: IPackage[];
  id?: number;
}
