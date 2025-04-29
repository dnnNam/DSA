// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

// ví dụ
//  let nums1 = [1, 2, 3, 0, 0, 0];   m = 3, có 3 phần tử hợp lệ và 3 phần tử là 0
// let nums2 = [2, 5, 6];            n = 3, 3 phần tử cần chèn vào nums1
// kết quả phải là [1,2,2,3,5,6]

// yêu cầu gộp nums1 và nums2 thành một mảng duy nhất sắp xếp theo thứ tự không giảm (tăng dần)
// mảng xếp cuối cùng không cho hàm trả về thay vào đó lưu trữ vào mảng 1

export function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  let i = m - 1; // i = 3-1 = 2 chỉ vào phần tử cuối cùng của phần hợp lệ trong nums1 (nums1[2] = 3)
  let j = n - 1; // j = 3-1 = 2 chỉ vào phần tử cuối cùng trong nums[2]
  let k = m + n - 1; // k = 3 + 3  -1 = 5 , chỉ vào phần tử cuối cùng trong nums1 (nums1[5] = 0)

  // bắt đầu vòng lặp so sánh và chèn
  // có nhiệm vụ so sánh các phần tử nums1 nums2 nếu giá trị bên nào lớn hơn sẽ được ghi đè xuống cuối của mảng 1
  // lưu ý mảng này đã được sắp xếp
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      // nếu như mà phần tử cuối của mảng 1 lớn hơn mảng 2 thì ta chèn xuống cuốis
      nums1[k] = nums1[i];
      i--; // nums1 giảm xuống
    } else {
      nums1[k] = nums2[j];
      j--; // nums2 giảm xuống
    }
    k--;
  }
  // sau khi kết thúc vòng lặp trên kết quả sẽ là nums1 = [1, 2, 3, 3, 5, 6];
  // vòng while này có nhiệm vụ đảm bảo các phần tử nums2 được nhét vào nums1
  // j lúc này bằng 0 còn phần tử nums2[0] = 2 chưa được nhét vào nums1
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--; //  hết phần tử trong nums2
    k--; // chỉ số của nums1 giảm xuống
  }
}
