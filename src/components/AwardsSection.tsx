import React from 'react';
import { colors, typography } from '../config/design-system';
import { siteContent } from '../config/content';

interface AwardItemProps {
  imageUrl: string;
  year: string;
  isActive?: boolean;
  opacity?: number;
  height?: string;
}

const AwardItem: React.FC<AwardItemProps> = ({ 
  imageUrl, 
  year, 
  isActive = false, 
  opacity = 1,
  height = "300px"
}) => {
  return (
    <div 
      className={`flex-shrink-0 w-80 mx-4 ${opacity < 1 ? "opacity-20" : ""}`}
      style={{ height }}
    >
      <div 
        className="relative w-full h-full bg-gray-50 rounded-3xl p-8 flex flex-col justify-center items-center"
      >
        <img
          src={imageUrl}
          className="w-48 h-48 object-contain"
          alt={`Award ${year}`}
        />
        {isActive && (
          <div 
            className="absolute bottom-6 left-6 right-6 flex justify-between items-center"
            style={{ 
              fontSize: typography.sizes.lg,
              color: colors.text.accent,
            }}
          >
            <span className="font-normal uppercase tracking-wide">{year}</span>
            <img
              src={year === "2016" ? "https://cdn.builder.io/api/v1/image/assets/60f4999e82e146c4a58bdf49ad469d0d/c9121766f46fad8cdd16a23b98d973569d524f22?placeholderIfAbsent=true" : year === "2024" ? "https://cdn.builder.io/api/v1/image/assets/60f4999e82e146c4a58bdf49ad469d0d/8b3722509c407d34d0fb9937661f58d9b1c92558?placeholderIfAbsent=true" : "https://cdn.builder.io/api/v1/image/assets/60f4999e82e146c4a58bdf49ad469d0d/df014115721f64c77ab85783759808ec590f3e3e?placeholderIfAbsent=true"}
              className="w-6 h-6"
              alt="Award Icon"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export const AwardsSection: React.FC = () => {
  const { awards } = siteContent.sections;

  return (
    <section 
      className="w-full py-32 px-4"
      style={{ backgroundColor: colors.sections.awards }}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Subtitle */}
        <div 
          className="flex justify-center gap-2 font-normal uppercase leading-none mb-16"
          style={{ 
            fontSize: typography.sizes.base,
            color: colors.text.accent,
            letterSpacing: typography.tracking.normal
          }}
        >
          <span>({awards.subtitle})</span>
        </div>

        {/* Title */}
        <h2 
          className="font-extrabold leading-tight mb-16"
          style={{ 
            fontSize: typography.sizes.hero,
            color: colors.text.primary,
            letterSpacing: typography.tracking.widest
          }}
        >
          {awards.title.split('\n').map((line, index) => (
            <div key={index} className="mb-2">
              {line}
            </div>
          ))}
        </h2>

        {/* Awards Carousel */}
        <div className="flex justify-center items-center overflow-x-auto pb-8">
          <AwardItem 
            imageUrl="https://cdn.builder.io/api/v1/image/assets/60f4999e82e146c4a58bdf49ad469d0d/a36fe1ce37f78fd4dbc7804c330bfeff5203ed6c?placeholderIfAbsent=true" 
            year="2015" 
            opacity={0.2}
            height="250px"
          />
          <AwardItem 
            imageUrl="https://cdn.builder.io/api/v1/image/assets/60f4999e82e146c4a58bdf49ad469d0d/ed383224f09a5d02968c9e182ff96d38d44a739a?placeholderIfAbsent=true" 
            year="2016" 
            isActive={true}
            height="300px"
          />
          <AwardItem 
            imageUrl="https://cdn.builder.io/api/v1/image/assets/60f4999e82e146c4a58bdf49ad469d0d/2e859ffd0a0870e46b7104116d7de2b77336b5ea?placeholderIfAbsent=true" 
            year="2024" 
            isActive={true}
            height="350px"
          />
          <AwardItem 
            imageUrl="https://cdn.builder.io/api/v1/image/assets/60f4999e82e146c4a58bdf49ad469d0d/7b486a95460b2d1f9c9a3be66f34b2b2c0366f83?placeholderIfAbsent=true" 
            year="2024" 
            isActive={true}
            height="300px"
          />
          <AwardItem 
            imageUrl="https://cdn.builder.io/api/v1/image/assets/60f4999e82e146c4a58bdf49ad469d0d/3bee870f99597690b012f11cf34132130d66b243?placeholderIfAbsent=true" 
            year="2025" 
            opacity={0.2}
            height="250px"
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-center mt-8">
          <div className="flex gap-1 bg-[#B1C5CE] rounded-2xl p-1">
            <button className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/60f4999e82e146c4a58bdf49ad469d0d/5232323290b61bc2081e3410786229bf3eea6ce1?placeholderIfAbsent=true"
                className="w-8 h-8"
                alt="Previous"
              />
            </button>
            <button className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/60f4999e82e146c4a58bdf49ad469d0d/4d45f1136d8cea980b9d92386be4e9ef92575f74?placeholderIfAbsent=true"
                className="w-8 h-8"
                alt="Next"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};