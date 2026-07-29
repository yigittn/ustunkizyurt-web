import { HouseHeart } from "@/components/brand/house-heart";
import { FeatureOval } from "@/components/ui/feature-oval";
import { LeafDecor } from "@/components/ui/leaf-decor";
import { SectionHeading } from "@/components/ui/section-heading";
import { features } from "@/lib/content";

export function FeaturesSection() {
  return (
    <section
      id="imkanlarimiz"
      className="relative overflow-hidden bg-rose-50 py-20 lg:py-28"
    >
      <LeafDecor className="absolute -left-10 top-8 h-72 w-64 text-sage-300/50" />
      <LeafDecor
        flip
        className="absolute -right-10 bottom-8 h-72 w-64 text-sage-300/50"
      />

      <div className="container-page relative">
        <SectionHeading
          icon={<HouseHeart className="size-7" />}
          title="İmkânlarımız"
          subtitle="Konforunuz, güvenliğiniz ve huzurunuz için her şey düşünüldü."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-5">
          {features.map((feature) => (
            <FeatureOval
              key={feature.label}
              icon={feature.icon}
              label={feature.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
