/**
 * @author lulongwen
 * Date: 2023-05-20 21:39
 * Description:
 */

/**
 * 生成随机验证码
 * @param size {number} glt 4
 * */
export function generateNumberCode(size = 4): number {
  const y = size < 4 ? 4 : size - 1;
  const radix = Math.pow(10,  y) * 9 // 9000
  return Math.floor(Math.random() * radix) + Math.pow(10,  y)
}
