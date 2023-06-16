// export declare module '*.css' {
//   const classes: { [key: string]: string };
//   export default classes;
// }
declare module '*.css' {
  interface ClassNames {
    [className: string]: string
  }
  const classNames: ClassNames;
  export = classNames;
}