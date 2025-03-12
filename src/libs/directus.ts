import { createDirectus, rest } from '@directus/sdk';
import { CMS_URL } from './globals';

export interface ReelsSchema {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  file: any[];
  link: string;
}

export interface AboutSchema {
  id: number;
  title: string;
  subtitle: string;
  body: string;
  image: string;
  altText: string;
  caption: string;
}

export interface NavigationSchema {
  id: number;
  title: string;
  externalLink: boolean;
  hidden: boolean;
  slug: string;
}

export interface Schema {
  about: AboutSchema;
  navigation: NavigationSchema[];
  reels: ReelsSchema[];
  reels_files: any[];
}

export const client = createDirectus<Schema>(CMS_URL).with(rest());
