var merge = function (nums1, m, nums2, n) {
  for (let i = 0; i < nums1.length; i++) {
    //replace the 0's in nums1 with the numbers of nums2
    //run sort on the array
    for (let i = 0; i < n; i++) {
      nums1.splice(nums1.indexOf(0), 1, nums2[i]);
    }
    console.log(nums1);
  }
};

merge([2, 0], 1, [1], 1);
