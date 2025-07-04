import { partnersData } from "../constants";

{partnersData.map((partner) => (
  <a
    key={partner.name}
    href={partner.linkUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block"
  >
    <img
      src={partner.logoUrl}
      alt={partner.name}
      className="h-20 w-auto" // Increase h-20 for a larger logo (Tailwind), or use style={{height: '80px'}}
    />
  </a>
))}