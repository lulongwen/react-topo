/**
 * @author lulongwen
 * Date: 2023-05-21 13:30
 * Description:
 * crypto.randomBytes(32) 生成加密随机数
 */

const alpha = 'qwertyuiopasdfghjklzxcvbnm'
const numbers = '0123456789'
const symbols= '!@#$%^&*_-=+'

/**
 * 生成密码
 * @param length {number} default 6
 * @param hasNumber {boolean} 是否包含数字
 * @param hasSymbol {boolean} 是否包含特殊字符
 */
export function createPassword(length = 6, hasNumber = true, hasSymbol = true) {
  let chars = alpha;
  if (hasNumber) {
    chars += numbers
  }
  if (hasSymbol) {
    chars += symbols
  }
  return generatePassword(length, chars)
}

function generatePassword (length: number, chars: string): string {
  let password = '';

  for(let i = 0; i < length; i++){
    password += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return password
}
