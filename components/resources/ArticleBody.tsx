interface ArticleBodyProps {
  content: string;
}

export function ArticleBody({ content }: ArticleBodyProps) {
  const sections = content.split("\n\n");

  return (
    <article className="prose prose-invert max-w-none">
      {sections.map((section, i) => {
        if (section.startsWith("## ")) {
          const text = section.replace("## ", "");
          const id = text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
          return (
            <h2 key={i} id={id} className="mt-10 scroll-mt-24 font-display text-display-sm text-neutral-50">
              {text}
            </h2>
          );
        }
        if (section.startsWith("- ")) {
          const items = section.split("\n").filter((l) => l.startsWith("- "));
          return (
            <ul key={i} className="mt-4 space-y-2">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-body-lg text-neutral-400">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                  {item.replace("- ", "")}
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="mt-4 text-body-lg leading-relaxed text-neutral-400">
            {section}
          </p>
        );
      })}
    </article>
  );
}
