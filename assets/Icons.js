const iconSize = 25;

export const HeartIcon = ({
  size = iconSize,
  strokeWidth = 1,
  color = "#ffffff",
  ...props
}) => (
  <svg
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M16.544 3.75c-3.043 0-4.543 3-4.543 3s-1.5-3-4.544-3C4.984 3.75 3.026 5.82 3 8.288c-.051 5.125 4.066 8.77 8.579 11.832a.75.75 0 0 0 .843 0c4.512-3.063 8.63-6.707 8.578-11.832-.025-2.469-1.983-4.538-4.456-4.538Z" />
  </svg>
);

export const UserIcon = ({
  size = iconSize,
  strokeWidth = 1,
  color = "#ffffff",
  ...props
}) => (
  <svg
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M16.125 6.75c-.184 2.478-2.063 4.5-4.125 4.5-2.063 0-3.945-2.021-4.125-4.5-.188-2.578 1.64-4.5 4.125-4.5 2.484 0 4.312 1.969 4.125 4.5Z" />
    <path d="M12 14.25c-4.078 0-8.217 2.25-8.983 6.497-.092.512.197 1.003.733 1.003h16.5c.536 0 .826-.491.734-1.003C20.217 16.5 16.078 14.25 12 14.25Z" />
  </svg>
);

export const BagIcon = ({
  size = iconSize,
  strokeWidth = 1,
  color = "#ffffff",
  ...props
}) => (
  <svg
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.75 8.25A.75.75 0 0 0 3 9v10.125c0 1.418 1.207 2.625 2.625 2.625h12.75c1.418 0 2.625-1.149 2.625-2.566V9a.75.75 0 0 0-.75-.75H3.75Z"
      clipRule="evenodd"
    />
    <path d="M7.5 8.25v-1.5a4.5 4.5 0 0 1 4.5-4.5v0a4.5 4.5 0 0 1 4.5 4.5v1.5" />
  </svg>
);

export const StarFullIcon = ({
  size = iconSize,
  color = "#ffdd00",
  ...props
}) => (
  <svg
    width={size}
    height={size}
    fill={color}
    stroke={color}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M23.25 9.53h-8.608L12 1.5 9.358 9.53H.75l7.041 4.94L5.05 22.5 12 17.524l6.951 4.976-2.747-8.03 7.046-4.94Z" />
  </svg>
);

export const StarHalfIcon = ({
  size = iconSize,
  strokeWidth = 1,
  color = "#ffdd00",
  ...props
}) => (
  <svg
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M22.5 9.75h-8.063L12 2.25l-2.438 7.5H1.5l6.563 4.5-2.532 7.5L12 17.062l6.469 4.688-2.532-7.5 6.563-4.5Z" />
    <path
      fill={color}
      stroke="none"
      d="M12 2.25v14.813L5.531 21.75l2.532-7.5L1.5 9.75h8.063L12 2.25Z"
    />
  </svg>
);

export const StarEmptyIcon = ({
  size = iconSize,
  strokeWidth = 1,
  color = "#ffdd00",
  ...props
}) => (
  <svg
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M22.5 9.75h-8.063L12 2.25l-2.438 7.5H1.5l6.563 4.5-2.532 7.5L12 17.062l6.469 4.688-2.532-7.5 6.563-4.5Z" />
  </svg>
);

export const ArrowDownIcon = ({
  size = iconSize,
  strokeWidth = 1,
  color = "#242424",
  ...props
}) => (
  <svg
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m5.25 8.625 6.75 6.75 6.75-6.75" />
  </svg>
);

export const PencilIcon = ({
  size = iconSize,
  strokeWidth = 1.5,
  color = "#2e62ff",
  ...props
}) => (
  <svg
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m17.069 5.875-12.99 13.02L3 21.004l2.109-1.078 13.02-12.99-1.06-1.061Z" />
    <path d="m19.72 3.22-1.06 1.06 1.06 1.06 1.06-1.06a.75.75 0 0 0 0-1.06v0a.75.75 0 0 0-1.06 0v0Z" />
  </svg>
);
