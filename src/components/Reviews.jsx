import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function Reviews() {

  const defaultReviews = useMemo(() => ([
    {
      id: 1,
      name: 'hippa',
      avatarUrl: 'https://kun.vaysed.tech/3yy5ewa7.png',
      date: "2025-08-12",
      text: 'Certified digital tech wizard. Cranked a full web app in like 2 hours — insane. Fast, clean, top-tier quality. 100% recommend — hit him up.',
    },
    {
      id: 2,
      name: 'h3nky',
      avatarUrl: 'https://kun.vaysed.tech/fbla1p84.png',
      date: "2025-07-24",
      text: "Dude's a beast. Knows his stuff, nailed it first try, zero back-and-forth.",
    },
    {
      id: 3,
      name: 'Hjjbcf',
      avatarUrl: 'https://kun.vaysed.tech/v6yc22id.png',
      date: "2025-07-06",
      text: 'Absolute unit. Took every request on board and delivered exactly what I wanted. Super helpful, explains everything clearly. Highly recommend.',
    },
    {
      id: 4,
      name: 'ivanov902',
      avatarUrl: 'https://kun.vaysed.tech/0utgv3by.png',
      date: "2025-05-01",
      text: 'Probably the best dev. Knocked out a brutal spec most folks charge extra for, dropped solid advice, and wrapped it with a clean step-by-step guide.',
    },
  ]));

  const reviews = defaultReviews;

  return (
    <div className="px-5 lg:px-28 my-8 lg:my-16" id="reviews">
      <motion.h2
        className="text-2xl lg:text-4xl text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="font-extrabold">Reviews about my work</span>
      </motion.h2>

      <div className="mt-8 lg:mt-12">
        <div className="space-y-4">
          {reviews.length === 0 && (
            <p className="text-[#71717A]">No reviews yet. Be the first to leave one.</p>
          )}
          {reviews.map((item) => (
            <motion.div
              key={item.id}
              className="border-2 border-black rounded-xl p-4 flex gap-4 bg-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-black flex-shrink-0 bg-neutral-200">
                {item.avatarUrl ? (
                  <img src={item.avatarUrl} alt={item.name} className="h-full w-full object-cover" />
                ) : (
                  <div className="h-full w-full flex items-center justify-center text-sm font-bold">
                    {item.name?.charAt(0)?.toUpperCase() || '?'}
                  </div>
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="font-semibold">{item.name}</p>
                  <span className="text-xs text-[#71717A]">{item.date}</span>
                </div>
                <p className="text-sm lg:text-base mt-1 text-[#111]">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}


