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
  FollowLinkFormat: "   ### **- [Go To The Problem URL](link)**   ",
};

// ? InstaDSA Problem 01 - Palindrome Number
{
  // ? Problem
  const Problem = {
    ProblemNumber: 1,
    Problem: "Given Number Is Palindrome Number OR Not?",
    Url: "https://leetcode.com/problems/palindrome-number/description",
    ...Information?.SolvedBy,
    ...Information?.Challenge,
    ...Information?.Language,
  };

  // ? Solution
  const Solution = (n) => {
    let output = true;
    if (n < 0) {
      output = false;
    }
    const strN = String(n);
    const digits = strN.length;

    let digitA, digitB;

    if (n > 9) {
      for (let i = 1; i <= digits / 2; i++) {
        digitA = strN[i - 1];
        digitB = strN[digits - i];

        if (digitA !== digitB) {
          output = false;
          break;
        }
      }
    }
    output ? console.log(`${n} Is A Palindrome Number`) : console.log(`${n} Is Not A Palindrome Number`);
  };

  // ? Testing
  console.log(
    `\nTesting Problem - ${Problem.ProblemNumber} : Problem Statement - ${Problem?.Problem}`
  );
  Solution(-1);
  Solution(10);
  Solution(1001);
}
