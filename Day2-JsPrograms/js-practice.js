// DAY 2 – Advanced JavaScript Practice

// Sample Job Data
const jobs = [
  { id: 1, title: "Frontend Developer", salary: 40000, experience: 2, applicants: 15 },
  { id: 2, title: "Backend Developer", salary: 60000, experience: 4, applicants: 10 },
  { id: 3, title: "Full Stack Developer", salary: 80000, experience: 5, applicants: 8 },
  { id: 4, title: "UI/UX Designer", salary: 35000, experience: 1, applicants: 20 },
  { id: 5, title: "React Developer", salary: 70000, experience: 3, applicants: 12 }
];

// console.log("All Jobs:", jobs);


//  Filter job list by salary (>50000)
const highSalaryJobs = jobs.filter(job => job.salary > 50000);
// console.log("High Salary Jobs:", highSalaryJobs);


//  Count total applicants (reduce)
const totalApplicants = jobs.reduce((total, job) => {
  return total + job.applicants;
}, 0);
// console.log("Total Applicants:", totalApplicants);


//  Sort jobs by experience
const sortedByExperience = [...jobs].sort((a, b) => {
  return a.experience - b.experience;
});
// console.log("Sorted by Experience:", sortedByExperience);


//  Map job titles
const jobTitles = jobs.map(job => job.title);
// console.log("Job Titles:", jobTitles);


//  Reduce salary totals
const totalSalary = jobs.reduce((total, job) => {
  return total + job.salary;
}, 0);
console.log("Total Salary Expense:", totalSalary);





























// Extra ES6 Practice:

// Destructuring
// const { title, salary } = jobs[0];
// console.log(`First Job: ${title}, Salary: ${salary}`);

// // Template Literals
// jobs.forEach(job => {
//   console.log(`${job.title} earns ₹${job.salary}`);
// });

// // Spread Operator
// const newJob = { id: 6, title: "Node Developer", salary: 50000, experience: 2, applicants: 5 };

// const updatedJobs = [...jobs, newJob];
// console.log("Updated Jobs:", updatedJobs);
