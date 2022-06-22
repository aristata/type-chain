// @ts-check
/**
 * 프로그램을 초기화 한다
 * @param {object} config
 * @param {string} config.url
 * @param {string} config.initDate
 * @param {number} config.count
 * @returns {boolean} boolean
 */
export function init(config) {
    return true;
}

/**
 * 프로그램을 종료한다
 * @param {number} code
 * @returns {number}
 */
export function exit(code) {
    return code + 1;
}
