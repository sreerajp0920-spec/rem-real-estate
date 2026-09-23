import React from 'react';
import { Home, ChevronRight } from 'lucide-react';
import { ActiveTab } from '../types';

export interface BreadcrumbItem {
  label: string;
  tab?: ActiveTab;
  onClick?: () => void;
  isCurrent?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-2.5 px-1">
      <ol className="flex items-center flex-wrap gap-1.5 text-xs text-slate-500 font-medium">
        <li className="flex items-center">
          <button
            onClick={items[0]?.onClick}
            className="flex items-center space-x-1 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
            title="Return to Home"
          >
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only">Home</span>
          </button>
        </li>

        {items.map((item, index) => {
          if (index === 0) return null;
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center space-x-1.5">
              <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
              {isLast || item.isCurrent ? (
                <span className="font-semibold text-slate-900 truncate max-w-xs" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <button
                  onClick={item.onClick}
                  className="hover:text-slate-900 transition-colors cursor-pointer truncate max-w-xs"
                >
                  {item.label}
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
