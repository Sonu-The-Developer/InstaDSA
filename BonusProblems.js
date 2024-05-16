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
  // ! InstaDSA Bonus Problem 01 - Print First Natural Numbers Which Are Less or Equal To The Given Number
  {
    // & Problem
    const Problem = {
      ChallengeDay: 2,
      ProblemNumber: 1,
      Problem:
        "Print First Natural Numbers Which Are Less or Equal To The Given Number",
      Url: "https://www.geeksforgeeks.org/problems/print-n-to-1-without-loop/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=print-n-to-1-without-loop",
      ...Information?.SolvedBy,
      ...Information?.Challenge,
      ...Information?.Language,
    };

    // & Solution
    const Solution = (Value) => {
      let Output = [];
      for (let i = 1; i <= Value; i++) {
        Output.push(i);
      }
      console.log(`First ${Value} Natural Numbers : `, Output);
    };

    // & Testing
    console.log(
      `\nTesting Day ${Problem?.ChallengeDay} Problem - ${Problem?.ProblemNumber} : Problem Statement - ${Problem?.Problem}`
    );
    Solution(12);
    Solution(1);
    Solution(7);
  }

  // ! InstaDSA Bonus Problem 02 - Print First Factorial Series Of Numbers Till Factorial Is Lesser Or Equal To The Given Number
  {
    // & Problem
    const Problem = {
      ChallengeDay: 2,
      ProblemNumber: 2,
      Problem:
        "Print First Factorial Series Of Numbers Till Factorial Is Lesser Or Equal To The Given Number",
      Url: "https://www.geeksforgeeks.org/problems/find-all-factorial-numbers-less-than-or-equal-to-n3548/0?problemType=functional&difficulty%255B%255D=-1&page=1&query=problemTypefunctionaldifficulty%255B%255D-1page1",
      ...Information?.SolvedBy,
      ...Information?.Challenge,
      ...Information?.Language,
    };

    // & Solution
    const Solution = (Value) => {
      let Output = [1];
      let LastValue = 1;
      for (let i = 2; LastValue * i <= Value; i++) {
        Output.push(LastValue * i);
        LastValue *= i;
      }
      console.log(
        `Factorial Series Of Numbers Till Factorial Is Lesser Or Equal To ${Value} : ${Output}`
      );
    };

    // & Testing
    console.log(
      `\nTesting Day ${Problem?.ChallengeDay} Problem - ${Problem?.ProblemNumber} : Problem Statement - ${Problem?.Problem}`
    );
    Solution(12);
    Solution(24);
    Solution(0);
  }

  // ! InstaDSA Bonus Problem 03 - Print Sum Of Fibonacci Series (N-1)th Number & (N-2)th Number
  {
    // & Problem
    const Problem = {
      ChallengeDay: 2,
      ProblemNumber: 3,
      Problem: "Print Sum Of Fibonacci Series (N-1)th Number & (N-2)th Number",
      Url: "https://leetcode.com/problems/fibonacci-number/description/",
      ...Information?.SolvedBy,
      ...Information?.Challenge,
      ...Information?.Language,
    };

    // & Solution
    const Solution = (Value) => {
      let Series = [0, 1];
      let Output = 0;
      if (Value <= 1) {
        Output = Value;
      } else if (Value >= 2) {
        for (let i = 2; i < Value; i++) {
          Series.push(Series[i - 2] + Series[i - 1]);
        }
        Output = Series[Value - 2] + Series[Value - 1];
      }

      console.log(
        `Sum Of Fibonacci Series ${Value - 1}th Number & ${
          Value - 2
        }th Number Is : ${Output}`
      );
    };

    // & Testing
    console.log(
      `\nTesting Day ${Problem?.ChallengeDay} Problem - ${Problem?.ProblemNumber} : Problem Statement - ${Problem?.Problem}`
    );
    Solution(0);
    Solution(4);
    Solution(1);
  }
}
