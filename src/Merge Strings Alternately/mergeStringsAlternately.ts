export function mergeAlternately(word1: string, word2: string): string {
  // bài bài sẽ nối các kí tự của 2 chuỗi xen kẽ nhau
  let result = "";
  let maxlength = Math.max(word1.length, word2.length); // lấy độ dài lớn nhất

  for (let i = 0; i < maxlength; i++) {
    if (i < word1.length) result += word1[i];
    if (i < word2.length) result += word2[i];
  }

  return result;
}
