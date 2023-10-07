/**
 * random으로 key값 생성
 * @returns string
 */
export const getUniqueKey = () => {
  return `key_${Math.round(Math.random() * 100000000)}_${new Date().getTime()}`;
};
