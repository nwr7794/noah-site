export const projects = [
  {
    title: 'Launch Blueprint',
    description: 'A conversion-focused launch page system for a growing product team.',
    tag: 'Strategy',
  },
  {
    title: 'Field Notes',
    description: 'A lightweight publishing experience for essays, updates, and case studies.',
    tag: 'Content',
  },
  {
    title: 'Signal Studio',
    description: 'A polished portfolio refresh with a faster path from discovery to inquiry.',
    tag: 'Brand',
  },
];

export function createProjectCard(project) {
  const article = document.createElement('article');
  article.className = 'project-card';

  const tag = document.createElement('p');
  tag.className = 'project-tag';
  tag.textContent = project.tag;

  const title = document.createElement('h3');
  title.textContent = project.title;

  const description = document.createElement('p');
  description.textContent = project.description;

  article.append(tag, title, description);
  return article;
}

export function renderProjects(documentRef = document) {
  const list = documentRef.querySelector('[data-project-list]');
  if (!list) return;

  const fragment = documentRef.createDocumentFragment();
  projects.forEach((project) => fragment.append(createProjectCard(project)));
  list.replaceChildren(fragment);
}

export function renderYear(documentRef = document, date = new Date()) {
  const year = documentRef.querySelector('[data-year]');
  if (year) year.textContent = String(date.getFullYear());
}

if (typeof document !== 'undefined') {
  renderProjects();
  renderYear();
}
