export function isPalindrome(x: number): boolean {
  // ý tưởng là biến thành chuỗi và và đảo ngược kiểm tra xem chuỗi đã đảo ngược có bằng số ban đầu hay không
  const s = x.toString();
  const reversed = s.split("").reverse().join("");
  return s === reversed;
}

// Palindrome number : là kiểm tra xem số đó có phải số đối xứng không

export function isPalindrome2(x: number): boolean {
  // kiểm tra xem coi có trường hợp số âm , hoặc nếu số mà khác 0 chia hết cho 10 thì không phải là số đối xứng như 100 , 10
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

  // nếu x > reversed thì lấy phần tử cuối bỏ vào reversed
  let reversed = 0;
  while (x > reversed) {
    reversed = reversed * 10 + (x % 10); // lấy phần tử cuối của x , reversed * 10 dịch chuyển thêm 1 đơn vị
    x = Math.floor(x / 10); // xóa số cuối cùng dùng thêm math.floor để làm tròn
  }
  return x === reversed || x === Math.floor(reversed / 10); // ví dụ 12 == 12 nếu  như 12 với 123 thì Math.floor(reversed / 10) làm tròn
}
