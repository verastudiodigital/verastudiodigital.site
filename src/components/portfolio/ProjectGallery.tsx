'use client';

import { useState } from 'react';
import type { PortfolioCategory, PortfolioCategoryOption, PortfolioProject } from '@/types/portfolio';
import { cn } from '@/lib/utils';
import { ProjectCard } from './ProjectCard';

interface ProjectGalleryProps {
  categories: PortfolioCategoryOption[];
  projects: PortfolioProject[];
}

export function ProjectGallery({ categories, projects }: ProjectGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory>('todos');

  const filteredProjects =
    selectedCategory === 'todos'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filtrar proyectos por categoría"
        className="flex flex-wrap gap-2"
      >
        {categories.map((category) => {
          const isActive = selectedCategory === category.id;
          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setSelectedCategory(category.id)}
              className={cn(
                'min-h-10 cursor-pointer rounded-xl px-4 py-2 text-sm font-semibold transition-colors',
                isActive
                  ? 'bg-[#0073F7] text-white shadow-sm'
                  : 'border border-[#E2E8F0] bg-white text-[#172033] hover:border-[#0073F7] hover:text-[#0073F7]'
              )}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} detailed />
        ))}
      </div>
    </div>
  );
}
