// let leetcodeData = {};

// export const fetchLeetCodeData = async () => {
//   try {
//     const response = await fetch('https://leetcode-api-faisalshohag.vercel.app/nikhilpulluri');
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     leetcodeData = await response.json(); 
//     console.log(leetcodeData);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// };

// export const getLeetCodeData = () => leetcodeData; 





export const fetchLeetCodeData = async () => {
  try {
    const response = await fetch('https://leetcode-api-faisalshohag.vercel.app/nikhilpulluri');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const leetcodeData = await response.json(); // Store and return the fetched data
    return leetcodeData; // Return the fetched data directly
  } catch (error) {
    console.error('Error fetching data:', error);
    return null; // Return null or handle the error appropriately
  }
};
