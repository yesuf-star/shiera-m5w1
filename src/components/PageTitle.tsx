
import { useEffect } from "react";

type PageTitleProps = {
  title: string;
};

export default function PageTitle({ title }: PageTitleProps) {
  useEffect(() => {
    document.title = `${title} | Qur'an & Sunnah`;
  }, [title]);

  return (
    <h1 className="text-3xl font-bold tracking-tight text-emerald-950 sm:text-4xl">
      {title}
    </h1>
  );
}
