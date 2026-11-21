import React from 'react';
import Image from 'next/image';
import { Quote } from 'lucide-react';
import { patientStories } from '@/content/stories';

export default function StoriesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal active">
          <h4 className="text-teal font-bold uppercase tracking-widest text-sm mb-2">Voices of Hope</h4>
          <h2 className="text-4xl text-navy">Patient Stories</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {patientStories.map((story, idx) => (
            <div
              key={story.id}
              className={`flex flex-col md:flex-row items-center gap-8 bg-off-white p-8 rounded-3xl ${
                idx === 0 ? 'reveal-left' : 'reveal-right'
              } active hover:shadow-md transition-shadow`}
            >
              <div className="relative w-32 h-32 shrink-0 rounded-full overflow-hidden shadow-lg group">
                <Image
                  src={story.image}
                  alt={story.patientName}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="128px"
                />
              </div>
              <div>
                <Quote className="w-8 h-8 text-teal/30 mb-2 rotate-180" />
                <p className="italic text-gray-600 mb-4 font-light text-lg leading-relaxed">
                  &ldquo;{story.quote}&rdquo;
                </p>
                <p className="font-bold text-navy">— {story.family}</p>
                <p className="text-xs uppercase tracking-widest text-teal mt-0.5">{story.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
