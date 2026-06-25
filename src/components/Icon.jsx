const paths = {
  arrow:
    'M5 12h14M13 6l6 6-6 6',
  mail:
    'M4 6h16v12H4z M4 7l8 6 8-6',
  github:
    'M12 2C6.5 2 2 6.6 2 12.2c0 4.4 2.8 8.1 6.7 9.4.5.1.7-.2.7-.5v-1.9c-2.7.6-3.3-1.2-3.3-1.2-.4-1.1-1-1.4-1-1.4-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.8.8.1-.7.3-1.1.6-1.4-2.2-.3-4.5-1.1-4.5-5 0-1.1.4-2 1-2.8-.1-.3-.4-1.3.1-2.8 0 0 .8-.3 2.8 1.1.8-.2 1.7-.3 2.5-.3.9 0 1.7.1 2.5.3 1.9-1.4 2.8-1.1 2.8-1.1.5 1.5.2 2.5.1 2.8.7.8 1 1.7 1 2.8 0 3.9-2.3 4.7-4.5 5 .4.3.7 1 .7 2v2.9c0 .3.2.6.8.5 3.9-1.3 6.7-5 6.7-9.4C22 6.6 17.5 2 12 2z',
  linkedin:
    'M6.5 9.5H3.8V20h2.7V9.5z M5.1 4.5a1.6 1.6 0 100 3.2 1.6 1.6 0 000-3.2z M20.2 20v-5.8c0-3.1-1.7-4.9-4.1-4.9-1.9 0-2.8 1-3.2 1.7V9.5h-2.7V20h2.7v-5.8c0-1.5.8-2.5 2.2-2.5 1.3 0 2.4.8 2.4 2.7V20h2.7z',
  file:
    'M7 3h7l5 5v13H7z M14 3v5h5 M9.5 13h5 M9.5 17h5',
  spark:
    'M12 2l1.8 5.7L20 10l-6.2 2.3L12 18l-1.8-5.7L4 10l6.2-2.3z',
  location:
    'M12 21s7-5.1 7-11a7 7 0 10-14 0c0 5.9 7 11 7 11z M12 13a3 3 0 100-6 3 3 0 000 6z',
};

export function Icon({ name, size = 20 }) {
  const path = paths[name] ?? paths.spark;
  const isFilled = ['github', 'linkedin'].includes(name);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={isFilled ? 'currentColor' : 'none'}
      stroke={isFilled ? 'none' : 'currentColor'}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={path} />
    </svg>
  );
}
