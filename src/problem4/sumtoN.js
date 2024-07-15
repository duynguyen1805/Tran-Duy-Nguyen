/**
 * Tổng các số nguyên từ 1 đến N (input: n (any INT) ; type: number; output: number)
 */
/**
 * Dùng FOR
 *
 * @param {number} n
 * @returns {number}
 *
 * Độ phức tạp thời gian: O(n) - Duyệt qua tất cả các số từ 1 đến n.
 * Độ phức tạp không gian: O(1) - Chỉ sử dụng một lượng không gian cố định.
 */
function sum_to_n_a(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
/**
 * Dùng MATH
 *
 * @param {number} n
 * @returns {number}
 *
 * Độ phức tạp thời gian: O(1) - Tính trực tiếp
 * Độ phức tạp không gian: O(1) - Chỉ sử dụng một lượng không gian cố định.
 */
function sum_to_n_b(n) {
    return (n * (n + 1)) / 2;
}
/**
 * Dùng RECURSIVE
 *
 * @param {number} n
 * @returns {number}
 *
 * Độ phức tạp thời gian: O(n) - Đệ quy n lần.
 * Độ phức tạp không gian: O(n) - Ngăn xếp gọi đệ quy độ sâu n.
 */
function sum_to_n_c(n) {
    if (n <= 1) {
        return n;
    }
    return n + sum_to_n_c(n - 1);
}
console.log("[FOR] - Sum to 10: ", sum_to_n_a(10));
console.log("[MATH] - Sum to 10: ", sum_to_n_b(10));
console.log("[RECURSIVE] - Sum to 10: ", sum_to_n_c(10));
