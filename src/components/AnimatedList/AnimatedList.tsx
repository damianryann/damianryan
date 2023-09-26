import React, { Fragment } from 'react';
import clsx from 'clsx';
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
      <a
        key={index}
        className="col-sm-12 col-md-6 col-lg-4 text-decoration-none text-white"
        href={href}
        rel="noopener noreferrer"
        target="_blank">
        <div className="grid-item ">
          <img className="w-100" src={image} alt={name} />
          <h3 className="fw-bold text-primary my-2">{name}</h3>
          <p>{description}</p>
        </div>
      </a>
    ) : (
      <div key={index} className="grid-item col-sm-12 col-md-6 col-lg-3">
        <img className="w-100" src={image} alt={name} />
        <h3 className="fw-bold text-primary my-2">{name}</h3>
        <p>{description}</p>
      </div>
    );
  });

  return <div className="animated-list row">{listItems}</div>;
}
