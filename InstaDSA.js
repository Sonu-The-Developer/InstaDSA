// Welcome Buddy, Let's Code

const Information = {
  By: "Sonu_The_Developer",
  Date: "14-May-2024",
  Place: "Bangalore, Karnataka",
  Contact: {
    WhatsApp: "https://wa.me/+918572880368",
    Email: "sonupoonia85728@gmail.com",
  },
  SocialMedia: {
    Instagram: "https://instagram.com/Sonu_The_Developer",
    Twitter: "https://twitter.com/S_The_Developer",
    Github: "Sonu-The-Developer",
  },
  Challenge: "InstaDSA",
  Language: "javascript",
  CreditTo: {
    Instagram: "https://instagram.com/hiten.codes",
    Twitter: "https://twitter.com/hiten_codes",
  },
  SolvedBy: {
    Instagram: "https://instagram.com/Sonu_The_Developer",
    Twitter: "https://twitter.com/S_The_Developer",
    Github: "https://github.com/Sonu-The-Developer",
  },
};

// ? InstaDSA Problem 01 - Palindrome Number
{
  const Problem = {
    Problem: "Palindrome Number",
    Url: "https://leetcode.com/problems/palindrome-number/description",
    ...Information?.SolvedBy,
    ...Information?.Challenge,
    ...Information?.Language,
  };

  // ? Solution
  const Solution = () => {};

  console.log(`\n *** Output Of ${Problem?.Problem} *** \n`);
  console.log(`${Solution(10)} \n`);
}
