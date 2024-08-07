function findClosestNumber(nums: number[]): number {

    const allPositive = nums.map((num) => (num**2)**(1/2))
    const sorted = allPositive.sort((a, b) => a - b);
    if(nums.indexOf(sorted[0]) == -1) {
      return nums[nums.indexOf(-sorted[0])]
    }
    return sorted[0]
  }