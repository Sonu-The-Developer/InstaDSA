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
      ChallengeDay: 1,
      ProblemNumber: 1,
      Constraints: '-231 <= x <= 231 - 1',
      Problem: "Given Number Is Palindrome Number OR Not?",
      Url: "https://leetcode.com/problems/palindrome-number/description",
      ...Information?.SolvedBy,
      ...Information?.Challenge,
      ...Information?.Language,
    };

    // & Solution
    const Solution = (Value) => {
      let reverse = String(Value).split('').reverse().join('');
      
      reverse == Value
        ? console.log(`${Value} Is A Palindrome Number`)
        : console.log(`${Value} Is Not A Palindrome Number`);
    };

    // & Testing
    console.log(
      `\nTesting Day ${Problem?.ChallengeDay} Problem ${Problem.ProblemNumber} : Problem Statement - ${Problem?.Problem}`
    );
    Solution(-1);
    Solution(10);
    Solution(1001);
  }

  // ! InstaDSA Problem 02 - LCM & GCD
  {
    // & Problem
    const Problem = {
      ChallengeDay: 1,
      ProblemNumber: 2,
      Constraints: "1 <= A,B <= 109",
      Problem: "Find LCM & GCD Of Given Two Numbers",
      Url: "https://www.geeksforgeeks.org/problems/lcm-and-gcd4516/1",
      ...Information?.SolvedBy,
      ...Information?.Challenge,
      ...Information?.Language,
    };

    // & Solution
    const Solution = (valueA, valueB) => {
      let Num1 = valueA, Num2 = valueB, GCD = 1;
      while(Num1 && Num2) {
        if(Num1 > Num2) {
            Num1 = Num1 % Num2;
        } else {
            Num2 = Num2 % Num1;
        }
      }
      GCD = Num1 === 0 ? Num2 : Num1;

      console.log(`LCM Of ${valueA} & ${valueB} Is : ${valueA*valueB/GCD} & GCD Is : ${GCD}`);
    };

    // & Testing
    console.log(
      `\nTesting Day ${Problem?.ChallengeDay} Problem ${Problem.ProblemNumber} : Problem Statement - ${Problem?.Problem}`
    );
    Solution(1, 1);
    Solution(10, 30);
    Solution(7, 3);
  }
 
  // ! InstaDSA Problem 03 - Print Count The Number Of Digits In Value Which Evenly Divide Value
  {
    // & Problem
    const Problem = {
      ChallengeDay: 1,
      ProblemNumber: 1,
      Constraints: "1<=N<=105",
      Problem: "Print Count The Number Of Digits In Value Which Evenly Divide Value",
      Url: "https://www.geeksforgeeks.org/problems/count-digits5716/1",
      ...Information?.SolvedBy,
      ...Information?.Challenge,
      ...Information?.Language,
    };

    // & Solution
    const Solution = (Value) => {
      let AllDigits = String(Value).split('');
      let Output = AllDigits.filter(Num => Num == 0 ? false : Value % Num == 0)
      console.log(`Count Of Digits In ${Value} Which Evenly Divide ${Value} Is : ${Output.length} & Output Values Are : `, Output);
    };

    // & Testing
    console.log(
      `\nTesting Day ${Problem?.ChallengeDay} Problem ${Problem?.ProblemNumber} : Problem Statement - ${Problem?.Problem}`
    );
    Solution(102);
    Solution(1);
    Solution(27);
  }
  
}

// * Day 02
{
  // ! InstaDSA Problem 01 - Print First Natural Numbers Which Are Less or Equal To The Given Number : Without Loop (Recursion)
  {
    // & Problem
    const Problem = {
      ChallengeDay: 2,
      ProblemNumber: 1,
      Constraint: "1<=n<=1000",
      Problem:
        "Print First Natural Numbers Which Are Less or Equal To The Given Number : Without Loop (Recursion)",
      Url: "https://www.geeksforgeeks.org/problems/print-n-to-1-without-loop/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=print-n-to-1-without-loop",
      ...Information?.SolvedBy,
      ...Information?.Challenge,
      ...Information?.Language,
    };

    // & Solution
    const Solution = (Value) => {
      let Output = [];
      const RecursionFunc = (Value) => {
        if(Value >= 1) {
          Output.push(Value);
          --Value;
          RecursionFunc(Value);
        }
      }
      RecursionFunc(Value);
      
      console.log(`First ${Value} Natural Numbers : `, Output);
    };

    // & Testing
    console.log(
      `\nTesting Day ${Problem?.ChallengeDay} Problem ${Problem?.ProblemNumber} : Problem Statement - ${Problem?.Problem}`
    );
    Solution(1);
    Solution(5);
    Solution(8);
  }

  // ! InstaDSA Problem 02 - Print First Factorial Series Of Numbers Till Factorial Is Lesser Or Equal To The Given Number
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

  // ! InstaDSA Problem 03 - Print Sum Of Fibonacci Series (N-1)th Number & (N-2)th Number
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
