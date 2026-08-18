export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  type: string;
  summary: string;
  description: string;
  technologies: string[];
  problem: string;
  whatIBuilt: string[];
  howItWorks: string[];
  implementationDetails: string[];
  challenges: string[];
  status: string;
  links: ProjectLink[];
  screenshots: string[];
};

export const projects: Project[] = [
  {
    slug: "task-api",
    title: "Task API",
    type: "Backend API project",
    summary:
      "A FastAPI CRUD application for managing tasks, developed through multiple implementation stages and later extended with authentication and protected routes.",
    description:
      "This project focused on building a practical backend API instead of a static demo. The API supports task management and was extended in stages so the structure stayed understandable while new backend features were added.",
    technologies: ["Python", "FastAPI", "REST API", "Authentication"],
    problem:
      "The goal was to practice building a real backend API with clear routes, predictable request and response behavior, and protected functionality where authentication is required.",
    whatIBuilt: [
      "CRUD endpoints for managing task records.",
      "A staged FastAPI implementation that could be extended without rewriting the whole project.",
      "Authentication and protected routes added after the initial API was working.",
      "Simple API behavior that can be tested and explained route by route.",
    ],
    howItWorks: [
      "Clients send HTTP requests to FastAPI route handlers.",
      "The API validates incoming task data before processing it.",
      "Task routes handle creating, reading, updating, and deleting task records.",
      "Protected routes require authentication before access is allowed.",
    ],
    implementationDetails: [
      "Kept the API organized around clear REST actions.",
      "Separated the first working version from later authentication changes.",
      "Focused on backend behavior instead of frontend polish.",
      "Used incremental implementation stages to make debugging easier.",
    ],
    challenges: [
      "Understanding how route design affects API usability.",
      "Adding authentication without making the project difficult to explain.",
      "Keeping implementation stages clear instead of mixing every feature together.",
    ],
    status:
      "Working backend learning project. GitHub or demo links should be added only when the repository URL is ready to share.",
    links: [],
    screenshots: [],
  },
  {
    slug: "polite-scraper",
    title: "The Polite Scraper",
    type: "Web scraping / data pipeline",
    summary:
      "A polite Python scraping pipeline that processes catalogue pages from Books to Scrape, discovers books, validates records, caches HTML, and generates structured output.",
    description:
      "This scraper was built to practice reliable data collection instead of only extracting page text. It handles discovery, detail-page visits, normalization, validation, caching, and reporting.",
    technologies: ["Python", "Requests", "BeautifulSoup", "Pydantic", "JSON"],
    problem:
      "The goal was to scrape book data in a controlled and repeatable way while avoiding fragile behavior such as failing on one bad page or repeatedly downloading the same HTML.",
    whatIBuilt: [
      "A scraping pipeline for the first three catalogue pages of Books to Scrape.",
      "Book discovery across catalogue pages, producing 60 discovered books.",
      "Detail-page scraping for each discovered book.",
      "Normalized JSON output and a run report.",
      "HTML caching so repeated runs do not need to refetch every page.",
    ],
    howItWorks: [
      "The scraper requests catalogue pages with polite delays and timeout handling.",
      "It extracts canonical book detail URLs from each catalogue page.",
      "Each detail page is visited and converted into a structured record.",
      "Pydantic validates each record before it is included in the final output.",
      "The run report records what happened so failures are visible instead of hidden.",
    ],
    implementationDetails: [
      "Uses request timeouts to avoid hanging on slow pages.",
      "Uses caching to make reruns faster and more idempotent.",
      "Normalizes fields before writing JSON.",
      "Handles broken pages without stopping the entire scraping run.",
      "Tracks canonical URLs so records are easier to identify and deduplicate.",
    ],
    challenges: [
      "Balancing simple code with enough failure handling to make the scraper reliable.",
      "Normalizing inconsistent page data into a stable JSON shape.",
      "Making failed pages visible while still allowing the run to finish.",
    ],
    status:
      "Completed as a data pipeline exercise. Screenshots or sample output files can be added later if they are available.",
    links: [],
    screenshots: [],
  },
  {
    slug: "gemini-ai-workflow",
    title: "Gemini AI Workflow",
    type: "AI / no-code workflow",
    summary:
      "A structured Gemini workflow that moves a task through understanding, drafting, critique, revision, final formatting, and human review.",
    description:
      "This project tested a repeatable AI-assisted workflow against manual work. The focus was not just getting an answer from Gemini, but making the workflow structured enough to review and improve.",
    technologies: ["Gemini", "Prompt design", "AI-assisted workflow", "Human review"],
    problem:
      "The goal was to use AI in a controlled way: define the task, draft an output, critique it, revise it, format it, and still include a human review step.",
    whatIBuilt: [
      "A step-by-step Gemini workflow: Understand, Draft, Critique, Revise, Final Format, Human Review.",
      "A testing process using five real inputs.",
      "A comparison between the workflow and manual work for time and quality.",
      "A repeatable structure that can be reused for similar tasks.",
    ],
    howItWorks: [
      "The workflow starts by clarifying what the task is asking for.",
      "Gemini creates an initial draft from the clarified task.",
      "The output is critiqued against the task requirements.",
      "A revised version is produced based on the critique.",
      "The final answer is formatted and checked by a human before use.",
    ],
    implementationDetails: [
      "Uses separate stages instead of one long prompt.",
      "Includes critique and revision so the first model output is not treated as final.",
      "Keeps human review as the last step to catch incorrect or low-quality output.",
      "Compares time and quality against manual work to judge whether the workflow is useful.",
    ],
    challenges: [
      "Writing prompts that are specific without becoming too complicated.",
      "Making the critique step useful instead of generic.",
      "Comparing AI-assisted work with manual work fairly.",
    ],
    status:
      "Completed workflow exercise. Add real screenshots or documentation links later if you want to show the tested inputs and outputs.",
    links: [],
    screenshots: [],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
