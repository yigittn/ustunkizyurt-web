import { HouseHeart } from "@/components/brand/house-heart";
import { FeatureOval } from "@/components/ui/feature-oval";
import { LeafDecor } from "@/components/ui/leaf-decor";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Dictionary } from "@/i18n";
import { featureIcons, featureOrder } from "@/lib/content";

export function FeaturesSection({ d }: { d: Dictionary }) {
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
          title={d.featuresSection.title}
          subtitle={d.featuresSection.subtitle}
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-5">
          {featureOrder.map((id) => (
            <FeatureOval
              key={id}
              icon={featureIcons[id]}
              label={d.features[id].label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
