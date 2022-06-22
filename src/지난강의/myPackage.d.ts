interface Config {
    url: string
}
declare module "src/지난강의/myPackage" {
    function init(config: Config): boolean;

    function exit(code: number): number;
}
