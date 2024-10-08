export const fetchLeetCodeData = async () => {
  try {
    const response = await fetch('https://leetcode-api-faisalshohag.vercel.app/nikhilpulluri');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const leetcodeData = await response.json(); 
    return leetcodeData; 
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};
