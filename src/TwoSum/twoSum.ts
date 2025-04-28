// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

export function twoSum(nums: number[], target: number): number[] {
  // tạo ra một đối tượng để lưu giá trị kiểm gồm value và key
  const numIndices: Record<number, number> = {};

  // duyệt qua các số trong mảng
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]; // số còn thiếu để đạt target
    if (numIndices[complement] !== undefined) {
      // kiểm tra xem trong numIndices có lưu phần tử đó hay chưa nếu có thì return
      return [numIndices[complement], i];
    }
    // lưu giá trị hiện tại vào đối tượng với key và giá trị  numIndices[2] = 1 là vị trí 1 có giá trị là 2
    // chỉ cần gõ không cần gán , tự tạo ngăn lưu giá trị và vị trí vô luôn
    numIndices[nums[i]] = i;
  }
  return []; // trả về mảng rỗng nếu khồng tìm thấy
}

// cách thứ 2 code dễ hiểu hơn nhưng time complexity sẽ là O(n^2) rất chậm nếu mảng dài

export function twoSum2(nums: number[], target: number): number[] {
  // tạo 2 dòng for
  // nums = [2,7,11,15]  , xét 2  cộng với tất cả các số từ 2 trở đi nếu bằng target lập tức return vị trí
  for (let i = 0; i <= nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

// cách này dùng map khá tương tự với record
// nhưng so sánh  tốc độ truy cập đơn giản record là object thường  nhanh hơn map một chút
// nhưng map ổn định hơn khi
// dữ liệu lớn (nhiều phần tử)
// khóa key không phải luôn là  string  hay number (ví dụ object làm key)
export function twoSum3(nums: number[], target: number): number[] {
  const map = new Map<number, number>(); // tạo 1 map lưu các số được xét rồi

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement)!, i]; // muốn lấy giá trị đổi i thành nums[i] tương tự với record
      // dấu chấm ! giúp khẳng định biến đó không phải là undefined hoặc là null
      // giúp typeScript bỏ qua kiểm tra lỗi null/ undefined
      // dùng khi bạn biêt chắc chắn nó đã tồn tại rồi
    }

    map.set(nums[i], i); // lưu các giá trị đã kiểm tra
  }
  return [];
}
