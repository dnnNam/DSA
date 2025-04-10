export function isPalindrome(x: number): boolean {
  // ý tưởng là biến thành chuỗi và và đảo ngược kiểm tra xem chuỗi đã đảo ngược có bằng số ban đầu hay không
  const s = x.toString();
  const reversed = s.split("").reverse().join("");
  return s === reversed;
}

// Palindrome number : là kiểm tra xem số đó có phải số đối xứng không
