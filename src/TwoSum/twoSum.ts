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
      return [numIndices[complement], i];
    }
    // lưu giá trị hiện tại vào đối tượng với key và giá trị
    numIndices[nums[i]] = i;
  }
  return []; // trả về mảng rỗng nếu khồng tìm thấy
}
