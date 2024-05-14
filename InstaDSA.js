// Welcome Buddy, Let's Code
// Install Colorful Comments VS Code Extension

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

// * Day 01
{
  // ! InstaDSA Problem 01 - Palindrome Number
  {
    // & Problem
    const Problem = {
      ProblemNumber: 1,
      Problem: "Given Number Is Palindrome Number OR Not?",
      Url: "https://leetcode.com/problems/palindrome-number/description",
      ...Information?.SolvedBy,
      ...Information?.Challenge,
      ...Information?.Language,
    };

    // & Solution
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
      output
        ? console.log(`${n} Is A Palindrome Number`)
        : console.log(`${n} Is Not A Palindrome Number`);
    };

    // & Testing
    console.log(
      `\nTesting Problem - ${Problem.ProblemNumber} : Problem Statement - ${Problem?.Problem}`
    );
    Solution(-1);
    Solution(10);
    Solution(1001);
  }

  // ! InstaDSA Problem 02 - LCM & GCD
  {
    // & Problem
    const Problem = {
      ProblemNumber: 2,
      Problem: "Find LCM & GCD Of Given Two Numbers",
      Url: "https://www.geeksforgeeks.org/problems/lcm-and-gcd4516/1",
      ...Information?.SolvedBy,
      ...Information?.Challenge,
      ...Information?.Language,
    };

    // & Solution
    const GetLcmGcdOF = (valueA, valueB) => {
      let LCM = 1,
        GCD = 1,
        isPrime = true;
      if (valueA === valueB) {
        LCM = valueA;
      } else {
        for (let i = 2; i < valueA * valueB; i++) {
          for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j == 0) {
              isPrime = false;
              break;
            }
          }

          if (isPrime) {
            if (valueA % i == 0 && valueB % i == 0) {
              LCM *= i;
              GCD *= i;
            } else if (valueA % i == 0 || valueB % i == 0) {
              LCM *= i;
            }
          }
          isPrime = true;
        }
      }
      console.log(`LCM Of ${valueA} & ${valueB} Is : ${LCM} & GCD Is : ${GCD}`);
    };

    // & Testing
    console.log(
      `\nTesting Problem - ${Problem.ProblemNumber} : Problem Statement - ${Problem?.Problem}`
    );
    GetLcmGcdOF(1, 1);
    GetLcmGcdOF(10, 30);
    GetLcmGcdOF(7, 3);
  }
}
