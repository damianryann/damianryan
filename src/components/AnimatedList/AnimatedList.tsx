import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ListItem {
  image: string;
  name: string;
  description: string;
  href?: string;
}

interface AnimatedListProps {
  items: ListItem[];
}

export default function AnimatedList(props: AnimatedListProps) {
  const { items } = props;

  const listItems = items.map((item, index) => {
    const { image, name, description, href } = item;

    return href ? (
      <Link
        key={index}
        className="col-span-1 sm:col-span-2 md:col-span-3 no-underline text-white mb-8 transform transition-transform duration-300 hover:scale-110"
        href={href}
        rel="noopener noreferrer"
        target="_blank">
        <div className="grid-item">
          <Image
            className="h-full w-full aspect-video"
            src={image}
            alt={name}
            width={800}
            height={400}
          />
          <h3 className="text-xl text-primary my-2">{name}</h3>
          <p>{description}</p>
        </div>
      </Link>
    ) : (
      <div
        key={index}
        className="col-span-1 sm:col-span-2 md:col-span-3 mb-6 transform transition-transform duration-300 hover:scale-110">
        <Image
          className="w-full"
          src={image}
          alt={name}
          width={800}
          height={200}
        />
        <h3 className="text-xl text-primary my-2">{name}</h3>
        <p>{description}</p>
      </div>
    );
  });

  return (
    <div className="animated-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {listItems}
    </div>
  );
}
