import { SliceZone } from "@prismicio/react";
import { Content } from "@prismicio/client";

import { components } from "@/slices";
import Heading from "@/components/Heading";
import Bounded from "@/components/Bounded";
import { formatDate } from "@/utils/formatDate";

export default function ContentBody({
  page,
}: {
  page: Content.BlogPostDocument | Content.ProjectDocument;
}) {
  const formattedDate = formatDate(page.data.date);
  return (
    <Bounded as="article">
      <div className="rounded-2xl  bg-green px-4 py-10 md:px-8 md:py-20">
        <Heading className="text-primaryPink" as="h1">{page.data.title}</Heading>
        <div className="flex gap-4 text-brown">
          {page.tags.map((tag, index) => (
            <span key={index} className="text-xl font-bold">
              {tag}
            </span>
          ))}
        </div>
        <p className="mt-8 border-b border-primaryPink text-xl font-medium text-primaryPink">
          {formattedDate}
        </p>
        <div className="prose-pre:bg-secondaryPink prose-pre:text-brown text-brown prose-strong:text-primaryPink prose-a:text-primaryPink prose-headings:text-primaryPink prose prose-lg prose-invert mt-2 w-full max-w-none md:mt-2 ">
          <SliceZone slices={page.data.slices} components={components} />
        </div>
      </div>
    </Bounded>
  );
}