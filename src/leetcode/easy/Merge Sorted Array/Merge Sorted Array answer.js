var merge = function (nums1, m, nums2, n) {
    // nums1에서 m만큼 자르고 그 뒤에 n만큼 nums2를 붙인다
    // 그리고 오름차순 정렬을 해준다

    nums1.splice(m, n, ...nums2);
    nums1.sort((a, b) => a - b);
};
