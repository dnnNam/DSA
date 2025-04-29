// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r
// Example 2:

// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b
// word2:    p   q   r   s
// merged: a p b q   r   s
// Example 3:

// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.
// word1:  a   b   c   d
// word2:    p   q
// merged: a p b q c   d

export function mergeAlternately(word1: string, word2: string): string {
  // bài bài sẽ nối các kí tự của 2 chuỗi xen kẽ nhau
  let result = "";
  let maxlength = Math.max(word1.length, word2.length); // lấy độ dài lớn nhất
  // nối xen kẽ các chuỗis
  for (let i = 0; i < maxlength; i++) {
    if (i < word1.length) result += word1[i];
    if (i < word2.length) result += word2[i];
  }

  return result;
}

export function mergeAlternately2(word1: string, word2: string): string {
  let result = "";
  let i = 0;
  let j = 0;

  // lặp cho đến khi của 2 chuỗi word1 và word2 cho đến khi hết ký tự
  while (i < word1.length || j < word2.length) {
    // nếu còn kí tự trong word1 thì thêm vào result
    if (i < word1.length) {
      result += word1[i];
      i++;
    }

    // nếu còn kí tự ở trong word2 thì thêm vào result
    if (j < word2.length) {
      result += word2[j];
      j++;
    }
  }
  // trả ra kết quả
  return result;
}
