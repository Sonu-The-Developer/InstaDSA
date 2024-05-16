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
  // ! InstaDSA Bonus Problem 01 - How Many Digits Divides Evenly
  {
    // & Problem
    const Problem = {
      ChallengeDay: 1,
      ProblemNumber: 1,
      Problem: "How Many Digits Divide Number Completely Of Given Number",
      Url: "https://www.geeksforgeeks.org/problems/count-digits5716/1",
      ...Information?.SolvedBy,
      ...Information?.Challenge,
      ...Information?.Language,
    };

    // & Solution
    const Solution = (Value) => {
      const strValue = String(Value);
      let evenlyDivideDigits = [];
      for (let i = 0; i < strValue; i++) {
        if (Number(strValue[i]) !== 0) {
          if (Value % Number(strValue[i]) === 0) {
            evenlyDivideDigits.push(Number(strValue[i]));
          }
        }
      }

      console.log(
        `${Value} Number Is Evenly Divided By ${evenlyDivideDigits.length} Digits : `,
        evenlyDivideDigits
      );
    };

    // & Testing
    console.log(
      `\nTesting Day ${Problem?.ChallengeDay} Problem - ${Problem.ProblemNumber} : Problem Statement - ${Problem?.Problem}`
    );
    Solution(12);
    Solution(3740);
    Solution(377);
  }

  // ! InstaDSA Bonus Problem 02 - Reverse The Number
  {
    // & Problem
    const Problem = {
      ChallengeDay: 1,
      ProblemNumber: 2,
      Problem: "Reverse The Given Number",
      Url: "https://leetcode.com/problems/reverse-integer/description/",
      ...Information?.SolvedBy,
      ...Information?.Challenge,
      ...Information?.Language,
    };

    // & Solution
    const Solution = (Value) => {
      let ReverseValue = 0;
      let StartValue = Value;

      for (let i = 1; StartValue != 0; i++) {
        ReverseValue = ReverseValue * 10 + (StartValue % 10);
        StartValue = Math.trunc(StartValue / 10);
      }

      if (Math.pow(-2, 31) > ReverseValue || Math.pow(2, 31) < ReverseValue) {
        console.log(
          `Reverse Number Of ${Value} Is : 0 Because Reverse Is Out Of Range : -2**31 To 2**31`
        );
      } else {
        console.log(`Reverse Number Of ${Value} Is : ${ReverseValue}`);
      }
    };

    // & Testing
    console.log(
      `\nTesting Day ${Problem?.ChallengeDay} Problem - ${Problem.ProblemNumber} : Problem Statement - ${Problem?.Problem}`
    );
    Solution(-38479);
    Solution(1010);
    Solution(1534236469);
  }

  // ! InstaDSA Bonus Problem 03 - Armstrong Number Or Not - Armstrong - 153 - digit = 3 - 1*1*1 + 5*5*5 + 3*3*3 = 153 (YES)
  {
    // & Problem
    const Problem = {
      ChallengeDay: 1,
      ProblemNumber: 3,
      Problem: "The Given Number Is Armstrong Number Or Not",
      Url: "https://www.geeksforgeeks.org/program-for-armstrong-numbers/amp/",
      ...Information?.SolvedBy,
      ...Information?.Challenge,
      ...Information?.Language,
    };

    // & Solution
    const Solution = (Value) => {
      let ArmstrongOrNot = true;
      let StartValue = Value;
      let TotalAddition = 0;

      for (let i = 1; StartValue != 0; i++) {
        TotalAddition += Math.pow(
          StartValue - Math.trunc(StartValue / 10) * 10,
          String(Value).length
        );
        StartValue = Math.trunc(StartValue / 10);
      }

      TotalAddition === Value
        ? console.log(`${Value} Is A Armstrong Number`)
        : console.log(`${Value} Is Not A Armstrong Number`);
    };

    // & Testing
    console.log(
      `\nTesting Day ${Problem?.ChallengeDay} Problem - ${Problem.ProblemNumber} : Problem Statement - ${Problem?.Problem}`
    );
    Solution(120);
    Solution(153);
    Solution(1634);
  }
}

// * Day 02
{
  // ! InstaDSA Bonus Problem 01 - If GIven Number Is N Then Print = 1**3 + 2**3 + 3**3 + ... N**3
  {
    // & Problem
    const Problem = {
      ChallengeDay: 2,
      ProblemNumber: 1,
      Problem:
        "If GIven Number Is N Then Print = 1**3 + 2**3 + 3**3 + ... N**3",
      Url: "https://www.geeksforgeeks.org/problems/count-digits5716/1",
      ...Information?.SolvedBy,
      ...Information?.Challenge,
      ...Information?.Language,
    };

    // & Solution
    const Solution = (Value) => {
      let Output = 0;
      for (let i = 1; i <= Value; i++) {
        Output += Math.pow(i, 3);
      }

      console.log(`1**3 + 2**3 + 3**3 + ... N**3 Of ${Value} Is : ${Output}`);
    };

    // & Testing
    console.log(
      `\nTesting Day ${Problem?.ChallengeDay} Problem - ${Problem.ProblemNumber} : Problem Statement - ${Problem?.Problem}`
    );
    Solution(3);
    Solution(0);
    Solution(5);
  }

  // ! InstaDSA Bonus Problem 02 - Reverse The Number
  {
    // & Problem
    const Problem = {
      ChallengeDay: 1,
      ProblemNumber: 2,
      Problem: "Reverse The Given Number",
      Url: "https://leetcode.com/problems/reverse-integer/description/",
      ...Information?.SolvedBy,
      ...Information?.Challenge,
      ...Information?.Language,
    };

    // & Solution
    const Solution = (Value) => {
      let Output = true;
      const cleanedStr = Value.toLowerCase().replace(/[^a-z0-9]/g, "");
      for (let i = 0; i < Math.floor(cleanedStr.length / 2); i++) {
        if (cleanedStr[i] !== cleanedStr[cleanedStr.length - 1 - i]) {
          Output = false;
        }
      }

      Output
        ? console.log(`"${Value}" : Is A Palindrome String`)
        : console.log(`"${Value}" : Is Not A Palindrome String`);
    };

    // & Testing
    console.log(
      `\nTesting Day ${Problem?.ChallengeDay} Problem - ${Problem.ProblemNumber} : Problem Statement - ${Problem?.Problem}`
    );
    Solution("A man, a plan, a canal: Panama");
    Solution("race a car");
    Solution(" ");
  }
}
