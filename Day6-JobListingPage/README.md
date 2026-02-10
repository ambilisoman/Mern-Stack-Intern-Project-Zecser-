
#  Job Card System – React (Day 6 Task)
This project demonstrates rendering dynamic job listings using reusable React components. It focuses on list rendering, component composition, and responsive UI design.


## Features

* Dynamic job list rendering using `.map()`
* Reusable **JobCard** component
* Component splitting (Navbar, Sidebar, JobList)
* Font Awesome icons integration
* Mobile responsive layout
* Toggle navbar menu (hamburger)
* Clean card-based UI

## Job Fields

Each job contains:
* Title
* Company
* Experience
* Salary
* Apply Button

## List Rendering
Jobs are rendered dynamically:

```jsx
jobsData.map((job) => (
  <JobCard key={job.id} job={job} />
))
```

* `.map()` → loops job array
* `key` → unique identifier
* `job` → passed as props

## UI & Responsiveness

* Desktop → Sidebar + Job Feed layout
* Mobile → Stacked layout
* Navbar includes hamburger toggle menu


## Learning Outcomes

* Rendering lists in React
* Importance of `key` prop
* Props & reusable components
* Data-driven UI
* Responsive design basics
* Component composition

