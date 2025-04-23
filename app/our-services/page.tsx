import type { Metadata } from "next"
import { ServicesHero } from "@/components/services-hero"
import { ServicesList } from "@/components/services-list"
import { MainLayout } from "@/components/main-layout"
import { getPageMetadata } from "@/lib/metadata"

export const metadata: Metadata = getPageMetadata("our-services")

export default function OurServices() {
  return (
    <MainLayout>
      <ServicesHero />
      <ServicesList />
    </MainLayout>
  )
}
