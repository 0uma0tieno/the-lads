import { partnersData } from "../constants";

const Partners = () => (
  <div className="flex flex-wrap items-center justify-center gap-8">
    {partnersData.map((partner) =>
      partner.linkUrl ? (
        <a
          key={partner.name}
          href={partner.linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <img
            src={partner.logoUrl}
            alt={partner.name}
            className="h-20 w-auto object-contain transition-transform hover:scale-105"
            style={{ maxHeight: 100 }}
          />
        </a>
      ) : (
        <img
          key={partner.name}
          src={partner.logoUrl}
          alt={partner.name}
          className="h-20 w-auto object-contain"
          style={{ maxHeight: 100 }}
        />
      )
    )}
  </div>
);

export default Partners;