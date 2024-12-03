interface AnnounceSectionProps {
  imageSrc: string;
  altText: string;
  className?: string;
}

export default function AnnounceSection({ imageSrc, altText, className }: AnnounceSectionProps) {
  return (
    <section className={`flex flex-col justify-center items-center ${className || ''}`}>
      <img src={imageSrc} className='w-full h-full' alt={altText} />
    </section>
  );
}

