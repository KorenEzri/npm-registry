import { IPackage } from 'types';

export const createPackageObj = (
  name: string,
  version: string,
  dependencies: IPackage[],
) => {
  return {
    name: name,
    version: version,
    dependencies: dependencies.map((dep, index) => {
      const newDependencyObject = {
        name: dep.name,
        version: dep.version,
        dependencies: dep.dependencies,
        id: index,
      };
      return newDependencyObject;
    }),
  };
};
