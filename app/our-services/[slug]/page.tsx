import { MainLayout } from "@/components/main-layout";
import { ServiceDetail } from "@/components/service-detail";
import type { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // In a real app, you would fetch the service data here
  // For now, we'll just use the slug to create a title
  const title = params.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${title} | Funnelar Amazon Marketing Services`,
    description: `Learn about our ${title} services and how we can help grow your Amazon business.`,
  };
}

export default function ServiceDetailPage({ params }: Props) {
  return (
    <MainLayout>
      <ServiceDetail slug={params.slug} />
    </MainLayout>
  );
}
