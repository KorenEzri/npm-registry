export interface INpmPackage {
  name: string;
  description: string;
  "dist-tags": {
    [tag: string]: string;
  };
  versions: {
    [version: string]: {
      name: string;
      version: string;
      dependencies?: {
        [packageName: string]: string;
      };
    };
  };
}
