"use client";

import { useTranslations } from "next-intl";

export default function AppPreview() {
  const t = useTranslations("appPreview");

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("title")}</h2>
          <p className="text-lg text-gray-600">{t("description")}</p>
        </div>
        <div className="aspect-video w-full">
          <video
            src="/videos/noetic-app-demo-2.mp4"
            className="w-full h-full rounded-lg"
            controls
            title="Noetic App Demo"
          />
        </div>
      </div>
    </section>
  );
}