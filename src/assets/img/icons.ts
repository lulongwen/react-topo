/**
 * @author lulongwen
 * Date: 2023-03-12 14:23
 * Description: 批量导图 png
 */

// vite 批量导入文件
// @ts-ignore
const requireComponent = import.meta?.glob(
  "./technologies/*.png",
  { eager: true }
);

// const requireComponent = require.context('./images', false, /\.png$/);

// @ts-ignore
const requireTool = import.meta?.glob("./tools/*.png", { eager: true });

const result: { [key: string]: string } = {};
const t: { [key: string]: string } = {};

function capitalizeFirstLetter(str: string) {
  return str.toUpperCase();
}

function validateFileName(str: string): string | undefined {
  if (/^\S+\.png$/.test(str)) {
    return str.replace(/^\S+\/(\w+)\.png$/, (rs, $1) => capitalizeFirstLetter($1));
  }
}

Object.keys(requireComponent).forEach((filePath: string) => {
  const fileName = validateFileName(filePath);
  if (fileName) {
    result[fileName] = (requireComponent as { [key: string]: any })[filePath].default;
  }
});

Object.keys(requireTool).forEach((filePath: string) => {
  const fileName = validateFileName(filePath);
  if (fileName) {
    t[fileName] = (requireTool as { [key: string]: any })[filePath].default;
  }
});

export default { ...result, ...t };
